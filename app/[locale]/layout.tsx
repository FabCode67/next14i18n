import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import { notFound } from "next/navigation";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Locale } from "../types";
import "../globals.css";
import { locales } from "@/i18nconfig";
import useTextDirection from "../_hooks/useTextDirection";
import { NextIntlClientProvider, useMessages } from 'next-intl';


const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations("Metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const dir = useTextDirection();

  if (locales.includes(locale) === false) {
    return notFound();
  }
  const messages = useMessages();

  unstable_setRequestLocale(locale);
  return (
    <NextIntlClientProvider>
      <html lang={locale} dir={dir}>
        <body className="bg-lime-50">
        <div className="h-screen flex flex-col justify-between w-full">
      <Header />
        {children}
        <Footer />
        </div>
        </body>
      </html>
    </NextIntlClientProvider  >
  );
}
