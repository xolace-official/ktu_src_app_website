import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "KTU SRC App Support",
  description: "Official support page for the KTU SRC App by XolaceInc Ltd.",
  metadataBase: new URL("https://ktu.xolaceinc.com"),
  openGraph: {
    title: "KTU SRC App Support",
    description:
      "Official support page for the KTU SRC App by XolaceInc Ltd.",
    url: "https://ktu.xolaceinc.com/support",
    siteName: "KTU SRC App",
    locale: "en_GH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
