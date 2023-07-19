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
    <div className="lg:pt-[146px] pt-[90px]">
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

      <section className="lg:max-w-[60vw] mx-auto px-10 flex flex-col gap-10 my-10 ">
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
      <section className="lg:max-w-[60vw] mx-auto px-10 flex flex-col gap-10 my-10">
        <SectionTitle title={" "} subtitle={"Security Systems:"} />
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <li className="mb-4 flex flex-col gap-5">
            <img
              src="/security.jpeg"
              className="w-[200px] h-[200px] object-cover"
            />
            <a className="hover:underline">Access Control Equipment</a>
          </li>

          <li className="mb-4 flex flex-col gap-5">
            <img
              src="/cctv.webp"
              className="w-[200px] h-[200px] object-cover"
            />
            <a className="hover:underline">CCTV Technologies</a>
          </li>

          <li className="mb-4 flex flex-col gap-5">
            <img
              src="/home-alarms.jpg"
              className="w-[200px] h-[200px] object-cover"
            />
            <a className="hover:underline">Intrusion Technologies</a>
          </li>

          <li className="mb-4 flex flex-col gap-5">
            <img
              src="/fibre.jpg"
              className="w-[200px] h-[200px] object-cover"
            />
            <a className="hover:underline">Fibre Transmission Technologies</a>
          </li>

          <li className="mb-4 flex flex-col gap-5">
            <img
              src="/biometric.jpg"
              className="w-[200px] h-[200px] object-cover"
            />
            <a className="hover:underline">Biometrics & Card Access Systems</a>
          </li>
        </ul>
        <p>
          An extremely advanced software based on self learning video analytics
          technology system. The system learns the environment, detect unusual
          behaviors and assesses for potential threats. Our smart detection
          technology works in conjunction with 24/7 live offsite monitoring of
          the CCTV surveillance System to your business or your home. License
          Plate Recognition Camera: the LPR database is linked to SAPS and get
          updated daily.
        </p>
        <SectionTitle title={" "} subtitle={"The key is Prevention:"} />
        <p>
          The world is becoming increasingly aware that off-site monitoring is
          part of the security industry&apos;s way forward, there are already
          many sites being protected by off-site monitoring. As crime increases
          and threats become real the concept of an additional layer of security
          is no longer unreachable. This is the niche where off-site video is
          giving realtime support in situations of duress and loss prevention
          via early detection and warning and providing peace-of mind by
          allowing us to the system to analyze for any suspicious activity.
        </p>
      </section>
    </div>
  );
}
