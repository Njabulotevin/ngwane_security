import SectionTitle from "@/components/SectionTitle";
import React from "react";

export default function Page() {
  const features = [
    {
      title: "EXPERIENCE",
      description:
        "Ngwane Security has experienced leadership and we always aim to prove ourselves time and time again. ",
    },
    {
      title: "PROFESSIONAL TECHNICAL SUPPORT",
      description:
        "Ngwane Security manages our own technical department with Highly trained technicians who undergo constant courses to ensure that they are kept in tune with the latest technology. ",
    },
    {
      title: "BENEFICIAL CONSULTANCY",
      description:
        "Our experienced management will give you the best and most cost effective, objective and impartial advice after reviewing your exact needs will make recommendations that are suitable for you, your business and your budget. ",
    },
    {
      title: "GENERAL",
      description:
        "Usually in the recently released crime statistics residential Robberies mostly increases by 100% and business robberies especially small and medium business the increase over the same period is a staggering 295%. We are an area based company which ensures that our vehicles are close by and therefore able to provide a quick response in your time of urgent assistance. We are expanding our services to ensure that you are even more protected and have peace of mind.",
    },
  ];
  return (
    <div className="lg:pt-[220px] pt-[180px]  flex flex-col gap-10">
      <section className="flex flex-col gap-10 p-10 justify-center items-center">
        <SectionTitle
          title={"About Us"}
          subtitle={"Exceptional Security Services for Your Peace of Mind"}
          className="justify-center lg:items-center"
        />
        <p className="lg:max-w-[40vw] text-center">
          Ngwane Security is a South African company dedicated to the provision
          of excellent security services. We are capable of dealing with all
          your security needs and offer a complete range, planning, system
          analysis and design as well as executive services.
        </p>
      </section>

      <section>
        <div className="bg-red-700 p-10 flex flex-wrap gap-10 justify-center">
          <img
            src="/security.jpeg"
            alt=""
            className="lg:w-[40%] h-[400px] object-cover"
          />
          <div className="lg:max-w-[30%] text-white flex flex-col gap-5">
            <h4 className="text-xl font-bold ">Our Mission</h4>
            <p>
              Ngwane Security is a South African company dedicated to the
              provision of excellent security services. We are capable of
              dealing with all your security needs and offer a complete range,
              planning, system analysis and design as well as executive
              services.
            </p>
            <p>
              Ngwane Security is committed to providing exceptional services by
              delivering personalized, high - quality and cost efficient
              solutions to meet the need of our clients. We strive to exceed the
              requests of our clients by going above and beyond what is asked to
              ensure that every detail is to your requirements Ngwane Security
              is member of the South Africa PSIRA: “ Private Security Industry
              Regulatory Authority “.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10 p-10 lg:max-w-[50vw] mx-auto my-10">
          <p>
            Since we here for protection Ngwane Security has organized wide
            range of security services such as guarding, training and other
            security services. Our Security packages are designed especially for
            the client with respect to their specific needs and financial
            capabilities.
          </p>
          <p>
            When we provide our services, we take the time to understand your
            needs and your environment as well as a full risk assessment to
            ensure that our security officers will fit your requirements.
          </p>
          <div className="flex gap-5 flex-wrap">
            <p>
              Ngwane Security implements stringent training for its entire force
              over and above the average. Ngwane Security is an independent
              consultancy not tied to any other businesses, this means that the
              advice we give you is unbiased, objective and impartial. After
              reviewing your needs, we make recommendations that are right for
              your business at your budget.
            </p>
            <img
              src="/tt.png"
              alt=""
              className="lg:w-[500px] lg:h-[500px] object-cover"
            />
          </div>
          <p>
            Our management team all have the necessary experience to give you
            the best advice possible and the knowledge to consult and recommend
            an unequalled security solution for your unique needs.
          </p>
        </div>
      </section>
      <section className="lg:max-w-[50vw] mx-auto flex flex-col gap-10 px-10">
        <SectionTitle title={"WHY USE NGWANE SECURITY?"} subtitle={""} />
        <div className="grid  lg:grid-cols-2 gap-10 ">
          {features.map((feature, i) => {
            return (
              <div
                key={i}
                className="flex flex-col gap-4 rounded p-4 px-6 bg-white shadow"
              >
                <h4 className="text-lg font-semibold text-red-700">
                  {feature.title}
                </h4>
                <p className="text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
