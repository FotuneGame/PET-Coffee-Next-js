import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

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
        <Navbar />
        <div className="content">
          {children}
        </div>
        <Footer />
        </body>
    </html>
  );
}
