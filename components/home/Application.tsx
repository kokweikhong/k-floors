import Image from "next/image";

import cert1 from "../../public/icons/SGBC.svg";
import cert2 from "../../public/icons/STAT.svg";
import cert3 from "../../public/icons/TUV.svg";

import applicationCeiling from "../..//public/images/home/application_ceiling.jpg";
import applicationFloor from "../../public/images/home/application_floor.jpg";
import applicationStair from "../../public/images/home/application_stair.jpg";
import applicationWall from "../../public/images/home/application_wall.jpg";

import React from "react";

const certs: { src: any; alt: string; desc: string }[] = [
  {
    src: cert1,
    alt: "SGBC certified (2 ticks)",
    desc: "SGBC certified (2 ticks)",
  },
  { src: cert2, alt: "STATS certified", desc: "STATS certified" },
  {
    src: cert3,
    alt: "Class 2 fire rated | Tested with TUV",
    desc: "Class 2 fire rated (Tested with TUV)",
  },
];

const applications: {
  title: string;
  desc: string;
  img: { src: any; alt: string };
}[] = [
  {
    title: "ceiling",
    desc: "Transform your space with our professional wood ceiling installation services. Custom design with a range of wood types and finishes available.",
    img: { src: applicationCeiling, alt: "wood ceiling" },
  },
  {
    title: "floor",
    desc: "Our wood floor installation service offers a custom design with a variety of wood types and finishes for a long-lasting flooring solution.",
    img: { src: applicationFloor, alt: "wood flooring" },
  },
  {
    title: "stair",
    desc: "Our high-quality wooden stair installation services add beauty and function to your space, with safety and durability in mind.",
    img: { src: applicationStair, alt: "wood stair" },
  },
  {
    title: "wall",
    desc: "Add natural beauty and warmth to any space with our wood wall installation services. Custom design with a range of wood types and finishes available.",
    img: { src: applicationWall, alt: "wood wall" },
  },
];

const Application: React.FC = () => {
  return (
    <section className="mt-[50px]">
      <div className="px-[15px] flex flex-col items-start">
        <h4 className="relative pr-[60px] text-primary text-[26px] font-bold lg:mx-auto lg:after:hidden after:content-[''] after:w-[35px] after:h-[2px] after:bg-primary after:absolute after:top-1/2 after:right-0">
          Application
        </h4>
        <h2 className="font-extrabold text-[42px] leading-[50.8px] lg:mx-auto">
          Handcrafted European Wood
        </h2>
      </div>
      <div className="my-[30px] xl:grid xl:grid-cols-3">
        {/* certificates */}
        <div className="px-[15px] grid grid-cols-3 gap-[38px] my-[30px] xl:col-start-3 xl:col-span-1 xl:grid-cols-1">
          {certs.map((cert, index) => {
            return (
              <div
                key={index}
                className="text-center flex flex-col gap-2 justify-center w-[80px] xl:w-[160px] mx-auto"
              >
                <div className="relative block w-[62px] h-[62px] md:w-[90px] md:h-[90px] mx-auto">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="leading-[0.5]">
                  <span className="text-[12px] font-normal xl:text-base">
                    {cert.desc}
                  </span>
                </h3>
              </div>
            );
          })}
        </div>

        {/* services */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 xl:col-span-2 xl:row-start-1 xl:grid-cols-1 xl:col-start-1">
          {applications.map((app, index) => {
            return (
              <div
                key={index}
                className="py-[80px] w-full h-[180px] relative flex items-center justify-center border-b-[#eee] border-b"
              >
                <div className="absolute top-0 left-0 -z-[1] w-full h-full after:h-full after:w-full after:absolute after:top-0 after:left-0 after:bg-black/40">
                  <Image
                    src={app.img.src}
                    alt={app.img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col items-start px-[38px] py-[10px] md:w-[410px]">
                  <h3 className="uppercase text-[#fff] text-[24px] font-bold mb-[15px]">
                    {app.title}
                  </h3>
                  <p className="text-[#eee] font-light leading-[19px]">
                    {app.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Application;
