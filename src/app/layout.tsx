import "./globals.css";
import type { Metadata } from "next";
import { Tajawal } from "next/font/google";

const tajawal = Tajawal({
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--tajawal",
});

export const metadata: Metadata = {
  title: "Table Sync",
  description: "gerenciador de tabelas",
  icons: '/favicon.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* <-- create by Arthur Ferreira --> */}
      <body className={`${tajawal.variable} font-sans`}>{children}</body>
    </html>
  );
}
