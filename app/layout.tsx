import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AION Radar — The IDE is not your vendor",
  description:
    "AION Radar. A Friday letter on agents, tools, and the missed-call leak. Agents draft. Humans send.",
  applicationName: "AION Radar",
  authors: [{ name: "AION", url: "https://x.com/aion_sys" }],
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0c0b09",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
