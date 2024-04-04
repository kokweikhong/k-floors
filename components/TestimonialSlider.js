"use client";

import testimonials from "../data/testimonials.json";
import Image from "next/image";
import Link from "next/link";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ImageGridLayout from "./ImageGridLayout";

const Testimonial = ({ testimonial }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="px-[15px] w-full">
        <ImageGridLayout
          images={[
            testimonial.images.one,
            testimonial.images.two,
            testimonial.images.three,
            testimonial.images.four,
          ]}
        />
      </div>
      <div className="grid grid-cols-[50px_100px_100px] grid-rows-2 text-center px-[30px]">
        <div className="flex flex-col items-center w-full h-full row-span-2">
          <Image
            src={testimonial.icon.src}
            alt={testimonial.icon.alt}
            width="70"
            height="70"
            className="w-[30px] h-[30px] m-auto"
          />
        </div>
        <h3 className="col-span-2 col-start-2 text-base font-bold font-inter">
          {testimonial.title}
        </h3>
        <Link
          href={testimonial.readmore}
          className="col-span-2 col-start-2 row-start-2 text-[#488791] text-[10px] underline uppercase font-semibold"
        >
          read more
        </Link>
      </div>
      <p className="px-[30px] text-[10px]">{testimonial.desc}</p>
    </div>
  );
};

export default function TestimonialSlider() {
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
      <Slider {...settings}>
        {testimonials.about.map((testimonial, index) => {
          return <Testimonial key={index} testimonial={testimonial} />;
        })}
      </Slider>
    </div>
  );
}
