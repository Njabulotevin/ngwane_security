import React from "react";
import Contacts from "@/components/Contacts";

export default function Page() {
  return (
    <div className="lg:pt-[146px] pt-[90px]">
      <div
        className="bg-[url('/security.jpeg')] h-[250px] relative"
        style={{ backgroundSize: "100%", backgroundPosition: "center" }}
      >
        <div className="lg:max-w-[70vw] mx-auto p-10 absolute left-[20vw]">
          <div className={`flex flex-col gap-3 text-white`}>
            <h2 className="text-3xl font-bold">Contacts</h2>
            <h4 className="text-xl font-bold ">Get in touch with us.</h4>
          </div>
        </div>
        <div className="w-full h-full bg-gray-900/80"></div>
      </div>
      <div className="bg-red-700">
        <Contacts />
      </div>
    </div>
  );
}
