import React from "react";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { contact_details } from "@/configs/contact_details";


function Contacts() {
  const contacts = [
    {
      name: "Email Address",
      value: "Email: "+ contact_details["email"],
      icon: <MdEmail className="text-primary text-lg" />,
    },
    {
      name: "Phone Numbers",
      value: "Phone: " + contact_details["contact_number"],
      icon: <MdPhone className="text-primary text-lg" />,
    },
    {
      name: "Physical Address",
      value: contact_details["address"],
      icon: <MdLocationPin className="text-primary text-lg" />,
    },
  ];

  return (
    <div className="bg-primary p-12 ">
      <div className="flex justify-center align-center gap-20 flex-col md:flex-row ">
        {contacts.map((item, index) => {
          return (
            <div
              className="flex flex-col justify-center items-center md:flex-row gap-6"
              key={index}
            >
              <div className="icon bg-white rounded-full h-[58px] w-[58px] mx-auto flex justify-center items-center">
                <span>{item.icon}</span>
              </div>
              <div className="details">
                <h4 className="text-white text-center md:text-left text-base font-bold">
                  {item.name}
                </h4>
                <p className="text-white text-center md:text-left text-sm">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Contacts;
