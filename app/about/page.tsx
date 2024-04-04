import React from "react";
import Image from "next/image";
import Link from "next/link";

import ProjectSlider from "@/components/ProjectSlider";
import TestimonialSlider from "@/components/TestimonialSlider";

import heroImage from "../../public/images/about/about_hero_image.jpg";
import svgDissection from "../../public/images/K-Floor dissection.svg";

import svgPetFriendly from "../../public/icons/pet friendly.svg";
import svgKidFriendly from "../../public/icons/Kid friendly.svg";
import svgSGBC from "../../public/icons/SGBC.svg";
import svgStats from "../../public/icons/STAT.svg";

import svgFSC from "../../public/icons/FSC-black.svg";
import svgEuropeanStandards from "../../public/icons/european standards-black.svg";
import svgCE from "../../public/icons/CE-black.svg";
import svgTUV from "../../public/icons/TUV-black.svg";
import svg15YearsWarranty from "../../public/icons/15 year warranty.svg";

import teamRaziq from "../../public/images/teams/Raziq.png";
import teamSC from "../../public/images/teams/SC.png";
import teamIrene from "../../public/images/teams/Irene.png";
import teamHo from "../../public/images/teams/Ho.png";
import teamKyosti from "../../public/images/teams/Kyosti.png";

import svgBizSafe from "../../public/icons/Bizsafe.svg";
import svgDelivery from "../../public/icons/Delivery.svg";
import svgSelfCollection from "../../public/icons/Self Collection.svg";

const IconHolder: React.FC<{
  svgImage: string;
  imgAlt: string;
  desc: string;
}> = ({ svgImage, imgAlt, desc }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-[55px] h-[55px]">
        <Image src={svgImage} alt={imgAlt} />
      </div>
      <span className="text-base font-medium">{desc}</span>
    </div>
  );
};

const TeamCard: React.FC<{
  avatar: any;
  name: string;
  position: string;
}> = ({ avatar, name, position }) => {
  return (
    <div className="text-center">
      <div className="w-[150px] h-[150px]">
        <Image src={avatar.src} alt={avatar.alt} className="w-full h-full" />
      </div>
      <div className="mt-2">
        <h3 className="text-[11px] text-[#488791] font-medium uppercase">
          {name}
        </h3>
      </div>
      <div>
        <h4 className="font-normal text-[10px]">{position}</h4>
      </div>
    </div>
  );
};

const svgs: { src: any; alt: string }[] = [
  { src: svgFSC, alt: "FSC" },
  { src: svgEuropeanStandards, alt: "European Standards" },
  { src: svgCE, alt: "CE" },
  { src: svgTUV, alt: "TUV" },
  { src: svg15YearsWarranty, alt: "15 Years Warranty" },
];

const faqs: { question: string; answer: string[] }[] = [
  {
    question: "Are all samples free?",
    answer: [
      "Yes, they are! Our dedicated team of experts are ready to help you advise on your next design or build.",
    ],
  },
  {
    question: "Where can I visit KANDINSKY?",
    answer: [
      "KANDINSKY is a Singaporean brand that's now also available in Malaysia. Visit our showrooms in Johor and Singapore's Senko for a closer look.",
    ],
  },
  {
    question: "When will i receive my sample?",
    answer: [
      "We'll call you to confirm your delivery details before delivering to your preferred time slot.",
      "If you prefer to pick up your order in Singapore, our showroom is open on weekdays from 9:30 am to 6:30 pm, and on Saturdays from 10 am to 2 pm.",
      "For pick up in Malaysia, please contact us at +60 16-778 5788 to arrange your preferred time slot.",
    ],
  },
  {
    question: "Is there a company profile?",
    answer: [
      "Certainly, you can find our company profile on the About Us page. It includes our project portfolio, material specifications, and product information",
    ],
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* hero section */}
      <section className="relative flex items-center justify-center w-full h-screen">
        <div className="after:z-[0] w-full h-full after:h-full after:w-full after:absolute after:top-0 after:left-0 after:bg-black/40">
          <Image
            src={heroImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="text-[#fff] px-[30px] z-10 absolute top-0 left-0 flex flex-col justify-center items-center text-center w-full h-full">
          <h2 className="max-w-[400px] uppercase font-bold text-[64px]">
            About us
          </h2>
          <span className="max-w-[400px] w-full h-[1px] bg-[#fff] my-4"></span>
          <p className="text-[18px] text-left max-w-[400px]">
            Where Wood Meet Art - Kandinsky®. Discover the art of woodworking
            and meet the creative minds behind every piece of wood. Explore our
            stunning projects, impressive statistics, and read testimonials from
            satisfied clients. Experience the beauty of wood with Kandinsky®.
          </p>
        </div>
      </section>

      {/* product introduction */}
      <section className="container mx-auto px-[15px] mt-[50px]">
        <div className="flex flex-col items-center gap-4">
          <div>
            <Image
              src={svgDissection}
              alt="/images/K-Floor dissection.svg"
              width="500"
              height="500"
            />
          </div>
          <p className="uppercase text-[#767676]">
            Symmetric 3 layer construction
          </p>
        </div>
        <div className="flex flex-col gap-5 font-medium mt-[50px]">
          <p>
            KANDINSKY®’s symmetric-three-layer-construction consist of the top
            and bottom is overlaid with hardwood OAK, a softwood core PINE is
            bonded with PVA adhesive.
          </p>
          <p>
            This construction allows KANDINSKY® to be significantly sturdier,
            more even and durable.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-1 mt-[50px]">
          <IconHolder
            svgImage={svgPetFriendly}
            imgAlt="Pet Friendly"
            desc="Pet Friendly"
          />
          <IconHolder
            svgImage={svgKidFriendly}
            imgAlt="Children Safe"
            desc="Children Safe"
          />
          <IconHolder
            svgImage={svgSGBC}
            imgAlt="SGBC certified"
            desc="SGBC certified"
          />
          <IconHolder
            svgImage={svgStats}
            imgAlt="STATS certified"
            desc="STATS certified"
          />
        </div>
      </section>

      {/* project section */}
      <section className="mt-[50px] py-[40px] bg-[#F3F3F3]">
        <ProjectSlider />
      </section>

      {/* introduction section */}
      <section className="container mx-auto px-[15px] mt-[50px]">
        <div className="lg:max-w-[900px] flex flex-col items-center mx-auto">
          <div>
            <p className="font-medium">
              KANDINSKY® wood is a top-quality flooring option that has been
              rigorously tested and certified for safety, making it a great
              choice for households with children and pets. Not only is it fire
              resistant, but it&apos;s also suitable for installation over
              underfloor heating, making it a versatile option for a range of
              homes.{" "}
            </p>
          </div>
          <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr] gap-[25px] mt-[30px]">
            {svgs.map((svg, index) => {
              return (
                <div
                  key={index}
                  className="w-full h-[50px] md:h-[75px] lg:h-[100px]"
                >
                  <Image
                    src={svg.src}
                    alt={svg.alt}
                    className="w-full h-full"
                  />
                </div>
              );
            })}
          </div>
          <div className="font-medium mt-[30px]">
            <p>
              KANDINSKY® wood products come with a 15-year limited warranty for
              added peace of mind and protection.*
            </p>
            <p className="text-[#999] mt-[20px]">Terms and Conditions apply*</p>
          </div>
        </div>
      </section>

      {/* testimonial section */}
      <section className="mt-[50px] py-[40px] bg-[#F3F3F3]">
        <h2 className="px-[15px] mb-[20px]">Testimonials Gallery</h2>
        <TestimonialSlider />
      </section>

      {/* our team section */}
      <section className="mt-[50px] px-[15px] mx-auto container">
        <div className="text-center">
          <h2 className="px-[15px] mb-[20px] font-bold text-[26px]">
            Our Team
          </h2>
          <h3 className="text-base font-medium font-inter">
            Meet the creative minds behind every piece of wood.
          </h3>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-[30px]">
          <TeamCard
            avatar={{ src: teamRaziq, alt: "operations team" }}
            name="Muhamed Raziq"
            position="opertaions"
          />
          <TeamCard
            avatar={{ src: teamSC, alt: "operations team" }}
            name="sheng chuan"
            position="Project QAQC"
          />
          <TeamCard
            avatar={{ src: teamIrene, alt: "sales team" }}
            name="Irene Lee"
            position="Sales & Marketing"
          />
          <TeamCard
            avatar={{ src: teamHo, alt: "production team" }}
            name="Uncle Ho"
            position="Production"
          />
          <TeamCard
            avatar={{ src: teamKyosti, alt: "business development" }}
            name="Kyosti Kurkela"
            position="Research & Business Development"
          />
        </div>
      </section>

      {/* FAQs section */}
      <section className="mt-[50px] container mx-auto px-[15px]">
        <h2 className="pb-8 text-center border-b border-b-[#767676]">FAQs</h2>
        <div className="flex items-center justify-center gap-[10px] mt-[30px]">
          <div className="w-[65px] h-[65px]">
            <Image src={svgBizSafe} alt="biz safe" className="w-full h-full" />
          </div>
          <div className="w-[65px] h-[65px]">
            <Image
              src={svgDelivery}
              alt="free delivery"
              className="w-full h-full"
            />
          </div>
          <div className="w-[65px] h-[65px]">
            <Image
              src={svgSelfCollection}
              alt="self collection"
              className="w-full h-full"
            />
          </div>
        </div>
        <div>
          <ul className="text-[20px]">
            {faqs.map((faq, index) => {
              return (
                <li key={index} className="mt-[25px]">
                  <h3 className="font-inter text-[20px] font-medium">{`${
                    index + 1
                  }. ${faq.question}`}</h3>
                  {faq.answer.map((ans, idx) => {
                    return (
                      <p
                        key={idx}
                        className="pl-[25px] text-[20px] font-medium mt-[15px] text-[#767676]"
                      >
                        {ans}
                      </p>
                    );
                  })}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 mt-[50px]">
          <p className="text-[10px] leading-[12px]">or contact us at</p>
          <div className="flex gap-10">
            <Link href="https://wa.me/6587767837" className="w-[45px] h-[45px]">
              <Image
                src="/icons/whatsapp.svg"
                alt="whatsapp icon"
                width="52"
                height="52"
                className="w-full h-full"
              />
            </Link>
            <Link href="tel:6566844012" className="w-[45px] h-[45px]">
              <Image
                src="/icons/phone.svg"
                alt="phone icon"
                width="52"
                height="52"
                className="w-full h-full"
              />
            </Link>
          </div>
          <p className="text-[10px] leading-[12px]">
            to better understand your needs
          </p>
        </div>
      </section>
    </main>
  );
}
