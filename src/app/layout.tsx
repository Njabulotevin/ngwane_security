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
  const links = ["Home", "About", "Services", "Contact"];
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed top-0 z-[1000] w-full">
          <div className="flex justify-end bg-red-700 px-10 py-2 text-white">
            <div className="hidden lg:flex  gap-3 items-center">
              <div className="border flex items-center justify-center border-gray-100 rounded-md p-2 w-[40px] h-[40px]">
                <BsTelephoneFill />
              </div>
              <p className="font-bold text-sm">(+27) 72 543 9261</p>
              <div className="border flex items-center justify-center border-gray-100 rounded-md p-2 w-[40px] h-[40px]">
                <BsEnvelopeFill />
              </div>
              <p className="font-bold text-sm">info@ngwanesecurity.co.za</p>
              <div className="flex gap-4 ">
                <div className="border flex items-center justify-center border-gray-100 rounded-md p-2 w-[40px] h-[40px]">
                  <BsFacebook />
                </div>
                <div className="border flex items-center justify-center border-gray-100 rounded-md p-2 w-[40px] h-[40px]">
                  <BsInstagram />
                </div>
              </div>
            </div>
          </div>
          <div className="flex  items-center justify-between h-[90px] bg-white w-full mb-[120px] px-4 lg:px-[220px] py-2 shadow-md">
            <img src="/logo.png" className="w-[50px] h-[65px]" />
            <div className=" hidden lg:flex items-center gap-10">
              {links.map((link, i) => {
                return (
                  <div
                    key={i}
                    className="hover:bg-red-700 hover:text-white h-[100%] p-2 font-medium "
                  >
                    <Link
                      href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    >
                      <span>{link}</span>
                    </Link>
                  </div>
                );
              })}
            </div>
            <button className="bg-red-700 text-white font-semibold text-sm rounded-md px-[40px] py-[10px] ">
              Get A Quote
            </button>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
