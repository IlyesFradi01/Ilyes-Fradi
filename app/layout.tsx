import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ilyes Fradi - Fullstack Developer Portfolio",
  description: "Portfolio of Ilyes Fradi, a Fullstack Developer showcasing projects, skills, and experience",
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

