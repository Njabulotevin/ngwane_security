import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import {
  BsEnvelope,
  BsEnvelopeFill,
  BsFacebook,
  BsGeoAlt,
  BsInstagram,
  BsPhone,
  BsTelephone,
  BsTelephoneFill,
} from "react-icons/bs";

export default function Home() {
  const links = ["Home", "About", "Services", "Contact"];
  const services = [
    { service: "Commercial Guardin", icon: "/building.png" },
    { service: "Industrial Guardin", icon: "/factory.png" },
    { service: "Special Events security", icon: "/red-carpet.png" },
    { service: "Equipment Installation", icon: "/security-camera.png" },
  ];

  const servicesExtra = [
    {
      name: "Commercial Guarding",
      description:
        "Our highly trained security personnel provide reliable protection for commercial premises, ensuring the safety of your business, employees, and assets. With a proactive approach and attention to detail, we offer comprehensive security solutions tailored to meet the unique needs of your commercial establishment.",
    },
    {
      name: "Industrial Guarding",
      description:
        "Our experienced team specializes in industrial security, providing robust protection for manufacturing plants, warehouses, and industrial sites. We understand the specific risks and challenges faced in these environments, and our skilled guards are trained to maintain a secure and controlled atmosphere, safeguarding your operations and assets.",
    },
    {
      name: "Special Events",
      description:
        "Whether you're organizing a high-profile event or need temporary security measures, we offer specialized services such as speed fencing and events security. Our dedicated event security team ensures the smooth operation of your event, managing access control, crowd management, and overall safety to create a secure environment.",
    },
    {
      name: "Installations",
      description:
        "Enhance your security infrastructure with our installation services. Our expert technicians deploy cutting-edge technologies, including CCTV systems, biometric access control, and integrated security solutions. We provide tailored installations to meet your specific requirements, ensuring optimal coverage and efficient management of your security systems.",
    },
  ];

  const features = [
    {
      title: "Comprehensive Security Solutions",
      description:
        "Ngwane Security is your one-stop solution for all your security needs. We offer a complete range of services, including comprehensive planning, system analysis, design, and executive services.",
    },
    {
      title: "Expertise in Security Planning",
      description:
        "Our experienced team excels in crafting customized security plans that align with your specific requirements. We assess potential risks, devise effective strategies, and implement robust security measures to safeguard your assets and ensure peace of mind.",
    },
    {
      title: "System Analysis and Design",
      description:
        "With meticulous attention to detail, we conduct thorough system analysis to identify vulnerabilities and design tailored security solutions. Our goal is to optimize your security infrastructure, integrating advanced technologies for enhanced protection and efficient management.",
    },
    {
      title: "Dedicated Executive Services",
      description:
        "Ngwane Security provides specialized executive services to protect high-profile individuals, executives, and VIPs. Our trained professionals deliver discreet and reliable security solutions, ensuring their safety and maintaining confidentiality.",
    },
  ];

  const contacts = [
    {
      title: "Email Addresss",
      value: "info@ngwanesecurity.co.za",
      icon: <BsEnvelope size={30} />,
    },
    {
      title: "Phone Numbers",
      value: "(+27) 72 543 9261",
      icon: <BsTelephone size={30} />,
    },
    {
      title: "Our Address",
      value: "P.O BOX 113 , DUNDONALDS ,MPUMALANGA ,2336",
      icon: <BsGeoAlt size={30} />,
    },
  ];

  return (
    <div className="">
      <main>
        <div
          style={{
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
          className=" h-screen w-full bg-[url('/background_mobile.png')]  lg:bg-[url('/background.png')] "
        >
          <div className="h-[90px] mb-[120px]"></div>
          <div className="flex items-center ">
            <div className="flex flex-col items-start gap-10 p-10 lg:pl-[220px] w-full">
              <h2 className="lg:text-6xl text-3xl text-white font-bold max-w-[700px] animate__animated animate__slideInLeft">
                Comprehensive Protection for Your Peace of Mind
              </h2>
              <h4 className="text-sm lg:text-base text-slate-100  max-w-[700px] animate__animated animate__slideInLeft animate__delay">
                Securing Your World with Exceptional Solutions. Comprehensive
                protection, personalized and cost-efficient services for your
                peace of mind. Trust Ngwane Security.
              </h4>{" "}
              <a
                href="#_"
                className="relative rounded lg:w-auto w-full text-center py-[17px] px-[40px] overflow-hidden group bg-red-700 r hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Get Started</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <section className="w-full min-h-[60vh] lg:px-[220px] p-10 lg:py-16">
        <div className="min-h-[100px] bg-red-700 w-full lg:w-[60vw] mx-auto rounded shadow -translate-y-28 p-10">
          <div className="flex flex-wrap justify-center items-center gap-12">
            {services.map((service, i) => {
              return (
                <div
                  key={i}
                  className="text-gray-100 font-semibold flex flex-col gap-4 items-center"
                >
                  <div className="bg-white shadow-md rounded-full w-[60px] h-[60px] flex items-center justify-center">
                    <img src={service.icon} className="w-[30px] h-[30px]" />
                  </div>
                  <h4>{service.service}</h4>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center gap-16 w-full flex-wrap">
          <img src="about_element.png" />
          <div className="flex flex-col items-start gap-5 ">
            <SectionTitle
              title={"Our Story"}
              subtitle={"Exceptional Security Services for Your Peace of Mind"}
            />
            <p className="text-slate-600  text-sm font-medium max-w-[685px] animate__animated animate__slideRight">
              As a leading South African company, Ngwane Security is dedicated
              to providing excellent security services. We offer a comprehensive
              range of solutions, including planning, system analysis, design,
              and executive services. With a commitment to personalized,
              high-quality, and cost-efficient solutions, we exceed client
              expectations by going above and beyond. As a member of the South
              Africa PSIRA (Private Security Industry Regulatory Authority), we
              ensure top-tier professionalism and adherence to industry
              standards. Trust Ngwane Security to meet all your security needs
              with meticulous attention to detail and exceptional service
              delivery.
            </p>
            <button className="bg-red-700 text-white rounded-md px-[40px] py-[17px] animate__animated animate__slideInUp">
              Read More
            </button>
          </div>
        </div>
      </section>
      <section className="bg-red-700 w-full p-5 lg:p-10">
        <p className="text-slate-50 text-sm font-medium max-w-[700px] text-center mx-auto">
          Trust Ngwane Security for a comprehensive suite of security services,
          encompassing planning, system analysis, design, and executive
          solutions. Our expertise and commitment to excellence make us the
          ideal partner for your security needs.
        </p>
      </section>
      <section className="p-10 lg:px-[220px] lg:py-20">
        <div className="flex flex-col gap-10">
          <div className="max-w-[650px]">
            <SectionTitle
              title={"Why Choose Us."}
              subtitle={
                "Our personalized, high-quality, and cost-efficient approach sets us apart, as we go above and beyond to exceed your expectations"
              }
            />
          </div>

          <div className="grid  lg:grid-cols-2 gap-10">
            {features.map((feature, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col gap-4 border border-gray-200 rounded p-4 px-6"
                >
                  <h4 className="text-lg font-semibold text-red-700">
                    {feature.title}
                  </h4>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="p-10 lg:py-20 lg:px-[220px]">
        <div className="flex flex-wrap justify-center lg:items-start items-center gap-10 lg:gap-16">
          {contacts.map((contact, i) => {
            return (
              <div
                key={i}
                className="flex lg:w-[200px] flex-col gap-4 items-center"
              >
                <div className="w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] bg-red-700 rounded-md text-white flex items-center justify-center">
                  {contact.icon}
                </div>
                <h4 className="text-base font-semibold ">{contact.title}</h4>
                <p className="text-sm font-normal text-center">
                  {contact.value}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
