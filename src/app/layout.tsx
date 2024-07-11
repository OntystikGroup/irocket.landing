import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "iRocket",
  description:
    "Поставим Ваш магазин на 1 место и удержим Вас там. Не упустите шанс увеличить свои продажи и обеспечить стабильный поток заказов.",
  keywords:
    "irocket, irocket.kz, демпинг, демпинг бот, каспи бот, каспи продажа, аналитика, аналитика каспи товаров",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
