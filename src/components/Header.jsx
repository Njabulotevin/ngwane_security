"use client";

import React, { useState } from "react";
import {
  BsEnvelopeFill,
  BsFacebook,
  BsInstagram,
  BsJustify,
  BsTelephoneFill,
  BsXLg,
} from "react-icons/bs";
import Link from "next/link";
import { contact_details } from "@/configs/contact_details";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOn, setIsMenuOn] = useState(false);
  const links = ["Home", "About", "Services", "Contact"];

  const router = useRouter();

  
  return (
    <div className="fixed top-0 z-[1000] w-full">
      <div className="flex justify-end bg-red-700 px-10 py-2 text-white">
        <div className="hidden lg:flex  gap-3 items-center">
          <div className="border flex items-center justify-center border-gray-100 rounded-md p-2 w-[40px] h-[40px]">
            <BsTelephoneFill />
          </div>
          <p className="font-bold text-sm">{contact_details["contact_number"]}</p>
          <div className="border flex items-center justify-center border-gray-100 rounded-md p-2 w-[40px] h-[40px]">
            <BsEnvelopeFill />
          </div>
          <p className="font-bold text-sm">{contact_details["email"]}</p>
          <div className="flex gap-4 ">
            <a href="https://web.facebook.com/profile.php?id=61565390712558" className="border flex items-center justify-center border-gray-100 rounded-md p-2 w-[40px] h-[40px]">
              <BsFacebook />
            </a>
            <div className="border flex items-center justify-center border-gray-100 rounded-md p-2 w-[40px] h-[40px]">
              <BsInstagram />
            </div>
          </div>
        </div>
      </div>
      <div className="flex  items-center justify-between h-[90px] bg-white w-full mb-[120px] px-4 lg:px-[220px] py-2 shadow-md">
        <img onClick={()=>router.push("/")} src="/logo.png" className="w-[50px] h-[65px] cursor-pointer" />
        <div className=" hidden lg:flex items-center gap-10">
          {links.map((link, i) => {
            return (
              <div
                key={i}
                className="hover:bg-red-700 hover:text-white h-[100%] p-2 font-medium "
              >
                <Link href={link === "Home" ? "/" : `/${link.toLowerCase()}`}>
                  <span>{link}</span>
                </Link>
              </div>
            );
          })}
        </div>

        <button onClick={()=>router.push("/contact")} className="bg-red-700 text-white font-semibold text-sm rounded-md px-[40px] py-[10px] hidden lg:flex">
          Get A Quote
        </button>
        <div
          className="lg:hidden flex cursor-pointer"
          onClick={() => setIsMenuOn(true)}
        >
          <BsJustify size={25} />
        </div>

        {isMenuOn && (
          <div className=" lg:hidden flex flex-col gap-2 absolute bg-white h-screen top-0 right-0 w-[80vw] p-4">
            <div
              className="mb-5 cursor-pointer"
              onClick={() => setIsMenuOn(false)}
            >
              <BsXLg size={20} />
            </div>

            <div className="flex flex-col gap-2">
              {links.map((link, i) => {
                return (
                  <div
                    key={i}
                    className="hover:bg-red-700 hover:text-white p-2 font-medium "
                    onClick={() => setIsMenuOn(false)}
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
        )}
      </div>
    </div>
  );
}
