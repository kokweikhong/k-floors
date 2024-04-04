"use client";

import projects from "../data/projects.json";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = ({ project }) => {
  return (
    <div className="px-[15px]">
      <div className="grid grid-cols-2 grid-rows-4 gap-2 h-[70vh] w-auto mx-auto">
        <div className="row-span-2 row-start-1">
          <Image
            src={project.images.one.src}
            alt={project.images.one.alt}
            width="500"
            height="500"
            className="object-cover w-full h-full rounded-tl-[15px]"
          />
        </div>
        <div className="col-start-2 row-start-1">
          <Image
            src={project.images.two.src}
            alt={project.images.two.alt}
            width="500"
            height="500"
            className="object-cover w-full h-full rounded-tr-[15px]"
          />
        </div>
        <div className="col-start-2 row-start-2">
          <Image
            src={project.images.three.src}
            alt={project.images.three.alt}
            width="500"
            height="500"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="row-span-2 row-start-3 col-span-full">
          <Image
            src={project.images.four.src}
            alt={project.images.four.alt}
            width="500"
            height="500"
            className="object-cover w-full h-full rounded-b-[15px]"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 mt-2 text-center">
        <h3 className="text-base font-bold font-inter">{project.name}</h3>
        <div className="text-[10px] flex flex-col items-center">
          <span>{project.material}</span>
          <span>{project.contractor}</span>
          <span className="relative before:h-[4px] before:w-[4px] before:rounded before:bg-[#000] before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-2">
            {project.application}
          </span>
        </div>
      </div>
    </div>
  );
};

export default function ProjectSlider() {
  const settings = {
    className: "project-slider",
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "300px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <div>
      <h2 className="px-[15px] text-[26px] font-inter font-bold mb-[30px]">
        Project Showcase
      </h2>
      <Slider {...settings}>
        {projects.map((project, index) => {
          return <Project key={index} project={project} />;
        })}
      </Slider>
    </div>
  );
}
