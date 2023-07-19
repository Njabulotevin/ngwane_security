import "./globals.css";
import { Montserrat } from "next/font/google";
import "animate.css";
import {
  BsEnvelopeFill,
  BsFacebook,
  BsInstagram,
  BsTelephoneFill,
} from "react-icons/bs";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Ngwane security official site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
