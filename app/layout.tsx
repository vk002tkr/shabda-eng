import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shabda Engineering | Industrial Fasteners",
  description:
    "Shabda Engineering — Traders & Manufacturers of Industrial Fasteners in Faridabad, Haryana.",
  keywords: [
    "Shabda Engineering",
    "industrial fasteners",
    "fasteners manufacturer",
    "fasteners supplier",
    "industrial fasteners Faridabad",
    "bolts",
    "nuts",
    "screws",
    "washers",
    "threaded rods",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}