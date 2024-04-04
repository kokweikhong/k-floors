"use client";

import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import imgTestimonial1 from "../../public/testimonials/Review 1.jpg";
import imgTestimonial2 from "../../public/testimonials/Review 2.jpg";
import imgTestimonial3 from "../../public/testimonials/Review 3.jpg";

import svgGoogle from "../../public/icons/Google-color.svg";
import svgInstagram from "../../public/icons/Instagram - White.svg";
import svgMothership from "../../public/icons/Testimonal Mothership - White.svg";
import svgStarFill from "../../public/icons/star fill - yellow.svg";

export default function TestimonialReferenceSlider() {
  const [sliderRef] = useKeenSlider({
    // mode: "free-snap",
    loop: true,

    breakpoints: {
      "(min-width: 600px)": {
        slides: { origin: "center", perView: 2, spacing: 15 },
      },
    },
  });
  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="px-[15px] min-[600px]:px-0 h-full relative keen-slider__slide">
        <div className="relative min-h-[450px] md:min-h-[550px] xl:h-[700px] h-full after:absolute after:h-full after:w-full after:top-0 after:left-0 after:bg-black/50 after:rounded-[15px]">
          <Image
            src={imgTestimonial1}
            alt="google review"
            fill
            className="rounded-[15px] object-cover"
          />
        </div>
        <div className=" absolute top-5 flex items-center justify-center w-full gap-1 text-[#eee] z-10">
          <div className="absolute top-0 left-3">
            <Image src={svgGoogle} alt="mothership review" />
          </div>
          <div className="absolute top-0 -translate-x-1/2 left-1/2 h-[36px] flex items-center">
            <p className="text-[10px] text-[#fff]">
              Positive : Well organised & Responsive
            </p>
          </div>
        </div>
        <div className="px-[50px] py-[30px] absolute bottom-0 left-0 flex flex-col gap-2 items-center justify-center w-full text-[#eee] z-10">
          <div className="flex items-center justify-center w-full gap-2">
            <div className="relative block">
              <Image src="/testimonials/image 12.png" alt="" fill />
            </div>
            <h3 className="text-base font-bold font-inter">Kaetee JKT</h3>
          </div>
          <div className="flex items-center justify-center w-full h-[20px] gap-2">
            <div>
              <Image src={svgStarFill} alt="start fill icon" />
            </div>
            <div>
              <Image src={svgStarFill} alt="start fill icon" />
            </div>
            <div>
              <Image src={svgStarFill} alt="start fill icon" />
            </div>
            <div>
              <Image src={svgStarFill} alt="start fill icon" />
            </div>
            <div>
              <Image
                src={svgStarFill}
                alt="start fill icon"
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-[10px]">
            We contracted Calvary to supply and install all our timber
            requirements from the engineered wood flooring, living/dining room
            ceiling wood cladding, car porch ceiling cladding with Accoya wood
            and main gate Accoya wood panels.
          </p>
        </div>
      </div>

      <div className="px-[15px] h-full relative keen-slider__slide min-[600px]:px-0">
        <div className="relative h-full min-h-[450px] md:min-h-[550px] xl:h-[700px] after:absolute after:h-full after:w-full after:top-0 after:left-0 after:bg-black/50 after:rounded-[15px]">
          <Image
            src={imgTestimonial2}
            alt="google review"
            fill
            className="rounded-[15px] object-cover"
          />
        </div>
        <div className="absolute top-5 flex items-center justify-center w-full gap-1 text-[#eee] z-10">
          <div className="absolute top-0 left-3">
            <Image src={svgMothership} alt="mothership review" />
          </div>
          <div className="absolute top-0 -translate-x-1/2 left-1/2 h-[36px] flex items-center">
            <p className="text-[10px] text-[#fff]">
              Commitment to quality workmanship
            </p>
          </div>
        </div>
        <div className="px-[50px] py-[30px] absolute bottom-0 left-0 flex flex-col gap-2 items-center justify-center w-full text-[#eee] z-10">
          <div className="flex items-center justify-center w-full gap-2">
            <h3 className="text-base font-bold font-inter">
              Mothership Article
            </h3>
          </div>
          <p className="text-[10px]">
            August 17, 2022 - Calvary Carpentry, a Singapore-based carpentry
            firm. The company is praised for its commitment to quality
            workmanship, customer service, and sustainability, with a focus on
            using eco-friendly materials and processes to ...
          </p>
        </div>
      </div>

      <div className="relative h-full px-[15px] keen-slider__slide min-[600px]:px-0">
        <div className="h-full min-h-[450px] md:min-h-[550px] xl:h-[700px] block relative after:absolute after:h-full after:w-full after:top-0 after:left-0 after:bg-black/50 after:rounded-[15px]">
          <Image
            src={imgTestimonial3}
            alt="google review"
            fill
            className="rounded-[15px] object-cover"
          />
        </div>
        <div className="absolute w-full left-5 top-5">
          <div className="relative left-0">
            <Image src={svgInstagram} alt="mothership review" />
          </div>
          <div className="absolute top-0 -translate-x-1/2 left-1/2 h-[36px] flex items-center">
            <p className="text-[10px] text-[#fff]">
              Positive : Well organised & Responsive
            </p>
          </div>
        </div>
        <div className="px-[50px] py-[30px] text-[#fff] text-center absolute gap-3 bottom-0 left-0 flex flex-col justify-center w-full">
          <div className="flex items-center justify-center w-full gap-2">
            <div>
              <Image
                src="/testimonials/image 12.png"
                alt=""
                width="24"
                height="24"
              />
            </div>
            <h3 className="text-base font-bold font-inter">shawnnswan</h3>
          </div>
          <p className="text-[10px]">
            Contacted Calvary Carpentry to work out the engineered timber
            floorings for bedrooms. Vanessa and team were well organised &
            responsive, from providing stained floor samples & ensuring good
            workmanship throughout renovation.
          </p>
        </div>
      </div>
    </div>
  );
}
