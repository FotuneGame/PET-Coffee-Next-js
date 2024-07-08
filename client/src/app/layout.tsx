import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Popup from "@/components/ui/popup";
import StoreProvider from "./StoreProvider";

const latoTTF = Lato({ subsets: ['latin'], weight: ['400','700'] });

export const metadata: Metadata = {
  title: "Кофе на каждый день",
  description: "Сделано на Next",
  keywords: "Кофе кофейня спб"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={latoTTF.className}>
        <StoreProvider>
            <Navbar />
            <div className="content">
              {children}
            </div>
            <Popup>
                Мы можем использовать cookie для работы сайта...
            </Popup>
            <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
