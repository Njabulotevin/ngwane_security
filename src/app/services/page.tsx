import SectionTitle from "@/components/SectionTitle";
import React from "react";

export default function Page() {
  const services = [
    {
      name: "Commercial Guarding",
      icon: "/building.png",
      description:
        "Our highly trained security personnel provide reliable protection for commercial premises, ensuring the safety of your business, employees, and assets. With a proactive approach and attention to detail, we offer comprehensive security solutions tailored to meet the unique needs of your commercial establishment.",
    },
    {
      name: "Industrial Guarding",
      icon: "/factory.png",
      description:
        "Our experienced team specializes in industrial security, providing robust protection for manufacturing plants, warehouses, and industrial sites. We understand the specific risks and challenges faced in these environments, and our skilled guards are trained to maintain a secure and controlled atmosphere, safeguarding your operations and assets.",
    },
    {
      name: "Special Events",
      icon: "/red-carpet.png",
      description:
        "Whether you're organizing a high-profile event or need temporary security measures, we offer specialized services such as speed fencing and events security. Our dedicated event security team ensures the smooth operation of your event, managing access control, crowd management, and overall safety to create a secure environment.",
    },
    {
      name: "Installations",
      icon: "/security-camera.png",
      description:
        "Enhance your security infrastructure with our installation services. Our expert technicians deploy cutting-edge technologies, including CCTV systems, biometric access control, and integrated security solutions. We provide tailored installations to meet your specific requirements, ensuring optimal coverage and efficient management of your security systems.",
    },
  ];
  return (
    <div className="lg:pt-[146px] ">
      <div
        className="bg-[url('/security.jpeg')] h-[250px] relative"
        style={{ backgroundSize: "100%", backgroundPosition: "center" }}
      >
        <div className="max-w-[70vw] mx-auto p-10 absolute left-[20vw]">
          <div className={`flex flex-col gap-3 text-white`}>
            <h2 className="text-3xl font-bold">Services</h2>
            <h4 className="text-xl font-bold ">
              Exceptional Security Services for Your Peace of Mind
            </h4>
          </div>
        </div>
        <div className="w-full h-full bg-gray-900/80"></div>
      </div>

      <section className="lg:max-w-[60vw] mx-auto px-10 flex flex-col gap-10 my-10">
        <SectionTitle title={" "} subtitle={"Our Services Include:"} />
        <div className="flex flex-wrap justify-center items-center gap-12">
          <div className="flex flex-wrap gap-10">
            {services.map((service, i) => {
              return (
                <div
                  key={i}
                  className=" font-semibold flex flex-col gap-4  w-[300px]"
                >
                  <div className="bg-white shadow-md rounded-full w-[60px] h-[60px] flex items-center justify-center ring ring-white ring-offset-2">
                    <img src={service.icon} className="w-[30px] h-[30px]" />
                  </div>
                  <h4>{service.name}</h4>
                  <p className="font-medium">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
