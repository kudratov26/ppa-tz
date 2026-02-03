import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { cookies } from "next/headers";
import { CURRENCY_COOKIE_NAME, DEFAULT_CURRENCY } from "@/constants/currencies";
import { Currency } from "@/types/types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PPA - Недвижимости",
  description: "PPA - Ассоциация Недвижимости Пхукета",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cookieStore = await cookies();
  const currency = (cookieStore.get(CURRENCY_COOKIE_NAME)?.value as Currency) || DEFAULT_CURRENCY;
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header currency={currency} />
        {children}
      </body>
    </html>
  );
}
