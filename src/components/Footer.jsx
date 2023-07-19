"use client";

import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";
import { GrTwitter } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const socials = [
    {
      icon: <GrFacebookOption className="text-red-700" />,
      url: "http://www.facebook.com",
    },
    {
      icon: <FiInstagram className="text-red-700" />,
      url: "http://www.facebook.com",
    },
    {
      icon: <GrTwitter className="text-red-700" />,
      url: "http://www.facebook.com",
    },
  ];

  const quickLinks = [
    { name: "About us", url: "/about" },
    { name: "Contacts", url: "/contacts" },
    { name: "FAQ", url: "/faq" },
  ];
  return (
    <footer className="p-4 pt-10 px-12 mt-10  bg-red-700 text-white">
      <div className="max-w-7xl mx-auto mb-[200px] md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <h3 className="self-center mb-6 text-md font-semibold whitespace-nowrap dark:text-grayIsh ">
            Follow Us
          </h3>

          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {socials.map((item, i) => {
              return (
                <a
                  href={item.url}
                  className="bg-white w-[58px] h-[58px] rounded-full flex justify-center items-center"
                  key={i}
                >
                  {item.icon}
                </a>
              );
            })}
          </div>
          <div className="mt-8">
            <h1 className="self-center mb-6 text-md font-semibold whitespace-nowrap dark:text-grayIsh">
              Certifications and Alliances
            </h1>
            <div className="flex flex-wrap justify-start items-center gap-2"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 md:gap-20 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
              Services
            </h2>
            <ul className="text-white">
              <Link href="/services">
                <li className="mb-4">
                  <a className="hover:underline">Commercial Guarding</a>
                </li>
              </Link>
              <Link href="/services">
                <li className="mb-4">
                  <a className="hover:underline">Industrial Guarding</a>
                </li>
              </Link>
              <Link href="/services">
                <li className="mb-4">
                  <a className="hover:underline">Installations</a>
                </li>
              </Link>
              <Link href="/services">
                <li className="mb-4">
                  <a className="hover:underline">Installations</a>
                </li>
              </Link>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white">Company</h2>
            <ul className="textwhite">
              {quickLinks.map((item, i) => {
                return (
                  <li key={i} className="mb-4">
                    <a href={item.url} className="hover:underline">
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
              Legal
            </h2>
            <ul className="text-white">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
      <div className="max-w-7xl mx-auto sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-white sm:text-center">
          © 2023{" "}
          <a href="https://flowbite.com" className="hover:underline">
            Ngwane Security
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
