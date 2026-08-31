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

const title = "AION Radar — Friday letter for founders, developers, and creators";
const description =
  "AION Radar is a Friday letter of strategic input for founders, developers, and creators. Agents, tools, distribution, and the decisions that compound.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "AION Radar",
  authors: [{ name: "AION", url: "https://x.com/aion_sys" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "AION Radar",
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AION Radar",
    description,
    creator: "@aion_sys",
  },
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
