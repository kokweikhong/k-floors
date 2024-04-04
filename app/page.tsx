import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import TestimonialReferenceSlider from "@/components/home/TestimonialReferenceSlider";

const ProjectReferenceSlider = dynamic(
  () => import("../components/home/ProjectReferenceSlider")
);
const Application = dynamic(() => import("../components/home/Application"));

import heroImage from "../public/images/home/hero_image_1.jpg";

import callToActionImage from "../public/images/home/Sustainability.jpeg";
import certEuropeanStandard from "../public/icons/european standards.svg";

import imgGoogleReviews from "../public/testimonials/google reviews.png";

import logoKandinskyWhite from "../public/kandinsky_logo_white.svg";
import logoKandinskyLiteWhite from "../public/kandinsky lite_logo3.svg";

export const metadata = {
  title:
    "Kandinsky | Experience the Beauty of Timber Wood with Our Flooring, Stairs, Wall, and Ceiling Services in Malaysia and Singapore",
  description:
    "Discover the natural beauty of timber wood with our expert services. Whether you need new flooring, stairs, walls, or ceilings, our team in Malaysia and Singapore has you covered.",
  alternates: {
    canonical: "https://www.k-floors.com",
  },
};

// TODO : hero image alt

export default function Home() {
  return (
    <main>
      {/* hero section */}
      <section className="relative flex flex-col justify-center h-screen text-center">
        <div className="absolute top-0 left-0 -z-[1] w-full h-full">
          <Image
            src={heroImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col items-center gap-5 px-[15px] lg:ml-auto 2xl:mr-[10%]">
          <h1 className="uppercase text-[#fff] text-[64px] lg:text-[54px] lg:max-w-[700px] leading-[68px] px-[20px]">
            wood meets art
          </h1>
          <p className="text-[#eee] text-[18px] md:text-[28px] lg:text-[21px] max-w-[550px] px-[20px]">
            Sustainable and ethically sourced, KANDINSKY offers engineered
            timber for walls, ceilings, stairs, and flooring.
          </p>
          <Link href="/product" className="btn-primary-fill">
            get your free sample now
          </Link>
        </div>
      </section>

      {/* application section */}
      <Application />

      {/* call to action */}
      <section>
        <div className="relative my-[50px] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/40 after:-z-[1]">
          <div className="absolute top-0 left-0 -z-[1] w-full h-full">
            <Image
              src={callToActionImage}
              alt="natural, forest, wood"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-2">
            <div className="flex items-center justify-center w-full">
              <div className="w-[150px] h-[35px] relative">
                <Image src={logoKandinskyLiteWhite} alt="kandinksy logo" fill />
              </div>
            </div>
            <div className="bg-black text-[#fff] flex flex-col justify-center items-center py-[20px]">
              <div>
                <div className="h-[15px] w-[150px] mb-1">
                  <Image
                    src={logoKandinskyWhite}
                    alt="kandinksy logo"
                    className="w-full h-full"
                  />
                </div>
                {/* <span className="uppercase">coming soon</span> */}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-[80px] py-[30px] lg:grid lg:grid-cols-3">
            <div className="w-[380px] max-w-[380px] text-[#fff] text-center flex flex-col justify-center items-center lg:mx-auto lg:col-span-2">
              <div className="w-[170px]">
                <Image
                  src={certEuropeanStandard}
                  alt="european standards | FSC"
                  className="w-full h-fll"
                />
              </div>
              <h2 className="py-3 text-[32px] leading-[1.5]">
                <span className="uppercase">
                  sustainably and ethically sourced
                </span>
              </h2>
            </div>

            <div className="hidden lg:block">
              <Link
                href="/about"
                className="bg-[#fff] font-semibold uppercase text-[16px] py-[24px] px-[32px] rounded-[40px]"
              >
                find out more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* project references */}
      <ProjectReferenceSlider />

      {/* testimonial section */}
      <section className="mt-[50px]">
        <div className="xl:flex xl:justify-center xl:items-center">
          <div className="px-[15px] flex flex-col items-start xl:basis-1/2">
            <h4 className="relative pr-[60px] text-primary text-[26px] font-bold lg:after:hidden lg:mx-auto after:content-[''] after:w-[35px] after:h-[2px] after:bg-primary after:absolute after:top-1/2 after:right-0">
              Reviews
            </h4>
            <h2 className="text-[42px] font-extrabold lg:mx-auto">
              Testimonials
            </h2>
          </div>
          <div className="relative flex items-center justify-center w-full">
            <Image src={imgGoogleReviews} alt="google reviews summary" />
          </div>
        </div>
        <div>
          <TestimonialReferenceSlider />
          <div className="flex items-center justify-center mt-[50px]">
            <Link
              href="/about"
              className="uppercase bg-secondary text-[#fff] text-base font-semibold px-[32px] py-[24px] rounded-[40px] shadow-[0px_15px_20px_rgba(0,0,0,0.2)]"
            >
              find out more
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
