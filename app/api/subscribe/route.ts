import { NextResponse } from "next/server";
import { normalizeEmail } from "@/lib/email";
import { createSupabaseAnonClient, getSupabaseEnv } from "@/lib/supabase";

function rpcOk(data: unknown): boolean {
  if (data && typeof data === "object" && !Array.isArray(data)) {
    return (data as { ok?: boolean }).ok === true;
  }
  if (Array.isArray(data) && data[0] && typeof data[0] === "object") {
    return (data[0] as { ok?: boolean }).ok === true;
  }
  return false;
}

function isDuplicateError(message: string): boolean {
  const m = message.toLowerCase();
  return (
    m.includes("duplicate") ||
    m.includes("already exists") ||
    m.includes("unique") ||
    m.includes("conflict")
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Send JSON with an email field." },
      { status: 400 },
    );
  }

  const email = normalizeEmail(
    typeof body === "object" && body !== null && "email" in body
      ? (body as { email: unknown }).email
      : undefined,
  );

  if (!email) {
    return NextResponse.json(
      { ok: false, error: "Enter a valid email." },
      { status: 400 },
    );
  }

  const env = getSupabaseEnv();
  if (!env.ok) {
    return NextResponse.json({ ok: false, error: env.error }, { status: 503 });
  }

  const supabase = createSupabaseAnonClient(env.url, env.anonKey);
  const { data, error } = await supabase.rpc("radar_subscribe", {
    p_email: email,
    p_source: "landing",
  });

  if (error) {
    if (isDuplicateError(error.message)) {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json(
      { ok: false, error: "Could not subscribe. Try again." },
      { status: 500 },
    );
  }

  if (rpcOk(data)) {
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json(
    { ok: false, error: "Could not subscribe. Try again." },
    { status: 500 },
  );
}
