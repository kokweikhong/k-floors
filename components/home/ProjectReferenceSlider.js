"use client";

import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import project1 from "../../public/images/home/project-reference_KLCC.jpg";
import project2 from "../../public/images/home/project-reference_DYSON.jpg";
import project3 from "../../public/images/home/project-reference_MONOCOT.jpg";

const projects = [
  {
    img: { src: project1, alt: "" },
    title: "Channel @ KLCC",
    material: "Kandinsky (Kildare)",
  },
  {
    img: { src: project2, alt: "" },
    title: "Dyson @ St James Power Station",
    material: "Kandinsky (Zerno)",
  },
  {
    img: { src: project3, alt: "" },
    title: "Monocot Soleil",
    material: "Kandinsky (Pugachov & Bartek)",
  },
];

export default function ProjectReferenceSlider() {
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
    <section>
      {/* project reference */}
      <div className="py-[50px] bg-[#f3f3f3]">
        <div className="px-[15px] flex flex-col items-start">
          <h4 className="relative pr-[60px] text-primary text-[26px] font-bold lg:after:hidden lg:mx-auto after:content-[''] after:w-[35px] after:h-[2px] after:bg-primary after:absolute after:top-1/2 after:right-0">
            Asia
          </h4>
          <h2 className="text-[42px] font-extrabold lg:mx-auto">
            Project Reference
          </h2>
        </div>
        <div ref={sliderRef} className="keen-slider">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="px-[15px] min-[600px]:px-0 h-full relative keen-slider__slide"
              >
                <div className="relative !block w-full h-full min-h-[450px] md:min-h-[550px] xl:h-[700px]">
                  <Image
                    src={project.img.src}
                    alt={project.img.alt}
                    fill
                    className="rounded-[15px] object-cover"
                  />
                </div>
                <div className="absolute bottom-2 flex flex-col items-center justify-center w-full gap-1 text-[#eee] z-10">
                  <h3 className="text-base font-bold">{project.title}</h3>
                  <h4 className="text-[10px] font-normal">
                    {project.material}
                  </h4>
                </div>
              </div>
            );
          })}
          {/* <div className="keen-slider__slide number-slide1">1</div>
      <div className="keen-slider__slide number-slide2">2</div>
      <div className="keen-slider__slide number-slide3">3</div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div> */}
        </div>
      </div>
    </section>
  );
}
