import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhrumil Patel | SDE · AI Systems · Technical Delivery",
  description:
    "Personal portfolio of Dhrumil Patel focused on SDE roles, AI systems, ML engineering, technical delivery, cloud programs, and data products."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
