import "./globals.css";
import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import StoreProvider from "./storeProvider";

const tajawal = Tajawal({
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--tajawal",
  subsets: ["latin"], 
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Table Sync",
  description: "gerenciador de tabelas",
  icons: "/favicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        id="modal"
        className={`${tajawal.variable} font-sans h-full bg-primary100 `}
      >
        <StoreProvider >
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
