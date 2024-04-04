"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "@/context/product";
import Breadcrumb from "@/components/Breadcrumb";
import { NextPage } from "next";

import logoKandinskyLiteWhiteHoz from "../../../public/kandinsky lite_logo2.svg";
import logoKandinskyWhite from "../../../public/kandinsky_logo_white.svg";

import LightboxGallery from "@/components/LightboxGallery";

import svgOpenLightbox from "../../../public/icons/arrows_open_lightbox.svg";
import { IProduct } from "@/types/product";
import { IProductCategory } from "@/types/productCategory";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !right-0 z-10`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !left-0 z-10`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const ProductDetail: React.FC<{
  label: string;
  value: string;
  isBold?: boolean;
}> = ({ label, value, isBold }) => {
  return (
    <>
      <h5 className="text-[#767676] uppercase text-[16px] leading-[20px]">
        {label}
      </h5>
      <h3
        className={`${
          isBold
            ? "font-semibold text-[32px] leading-[39px]"
            : "font-normal text-[24px] leading-[32px]"
        } uppercase font-inter`}
      >
        {value}
      </h3>
    </>
  );
};

export default function IndividualProductPage({ params }) {
  const imageBaseURL = "/product/category_images";
  const { categories, products, initProducts, removeCategory, addCategory } =
    useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>();
  const [category, setCategory] = useState<IProductCategory>();
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (products.length < 1) {
      initProducts();
    }
  }, [initProducts, products.length]);

  useEffect(() => {
    const findCategory = categories.find((ele) => ele.index === params.id);
    if (findCategory !== undefined) {
      setCategory(findCategory);
      const filtered = products.filter(
        (ele) => ele.productId === findCategory.productId
      );
      setFilteredProducts(filtered);
    }
  }, [params.id, category]);

  const handleAddCatalogue = () => {
    if (category.isSelected) {
      removeCategory(category.productId);
      setCategory({ ...category, isSelected: false });
    } else if (!category.isSelected) {
      addCategory(category.productId);
      setCategory({ ...category, isSelected: true });
    }
  };

  const handleGetFreeSample = () => {
    if (!category.isSelected) {
      addCategory(category.productId);
      setCategory(category);
    }
    router.push("/catalogue");
  };

  if (filteredProducts?.length < 1 || category === undefined)
    return <div>Loading...</div>;

  const settings = {
    className: "product-slider",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <main>
      <section className="w-full">
        <div className="relative">
          <Slider {...settings}>
            {category?.image.filenames.map((img, index) => {
              return (
                <div key={index} className="h-[500px]">
                  <Image
                    src={`${imageBaseURL}/${category.productId}/${img}`}
                    alt=""
                    width="500"
                    height="500"
                    className="object-cover w-full h-full"
                  />
                </div>
              );
            })}
          </Slider>
          <button
            onClick={() => setOpen(true)}
            className="w-[40px] h-[40px] absolute bottom-3 right-3 cursor-pointer z-20"
          >
            <Image
              src={svgOpenLightbox}
              alt="arrows to open lightbox icon"
              className="w-full h-full"
            />
          </button>
        </div>
        <LightboxGallery
          images={category.image.filenames.map((img) => {
            return {
              src: `${imageBaseURL}/${category.productId}/${img}`,
              height: 500,
              width: 500,
            };
          })}
          open={open}
          setOpen={setOpen}
        />
      </section>

      {/* breadcrumb */}
      <section className="container mx-auto">
        <Breadcrumb
          props={{
            links: [
              {
                url: "/product",
                object: (
                  <div className="h-[10px] w-[125px] md:h-[12px] md:w-[145px]">
                    <Image
                      src={
                        category?.category === "KL"
                          ? "/icons/Kandinsky Lite - vertical.svg"
                          : "/icons/kandinsky - vertical.svg"
                      }
                      alt="kandinsky lite logo"
                      width="125"
                      height="10"
                      className="w-full h-full"
                    />
                  </div>
                ),
              },
              {
                url: `/product/${category.index}`,
                object: (
                  <span className="text-[12px] md:text-[15px] font-semibold align-middle">
                    {`${category.productId}`}
                  </span>
                ),
              },
            ],
          }}
        />
      </section>

      <section className="container mx-auto mt-[50px] px-[15px] text-primary">
        <div className="grid grid-cols-3 gap-6 relative md:pb-[160px] lg:pb-0">
          <div className="grid grid-cols-2 gap-[20px] col-span-full md:col-span-2">
            {/* name */}
            <div className="col-span-full">
              <ProductDetail label="name" value={category.name} isBold />
            </div>

            {/* sku */}
            <div className="uppercase col-span-full max-w-[400px]">
              <ProductDetail
                label="sku"
                value={`${filteredProducts?.map(
                  (ele, idx) => `${idx > 0 ? " | " : ""}${ele.sku}`
                )}`}
                isBold
              />
            </div>

            {/* click to view pdf */}
            <div className="flex items-end cursor-pointer col-span-full">
              <Link
                href={`/product showcase/${category.pdfShowcase}`}
                download
                rel="noopener noreferrer"
                className="underline text-[#1128F8] text-[24px] leading-[15px] self-center md:text-[1.3rem] lg:text-[1.7rem]"
              >
                Click to view
              </Link>
              <div className="ml-2 w-[28px] h-[28px]">
                <Image
                  src="/icons/PDF.svg"
                  alt="pdf project showcase"
                  width="56"
                  height="56"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* product description */}
            <div className="col-span-full">
              <p className="text-[24px] leading-[33px]">
                {category.description}
              </p>
            </div>

            {/* material */}
            <div>
              <ProductDetail label="Material" value={category.species} />
            </div>

            {/* thickness */}
            <div>
              <ProductDetail label="thickness" value={category.thickness} />
            </div>

            {/* dimensions */}
            <div>
              <h5 className="text-[#767676] uppercase text-[16px] leading-[20px]">
                dimension
              </h5>
              {filteredProducts?.map((ele, idx) => (
                <h3
                  key={idx}
                  className={`font-normal text-[24px] leading-[32px] uppercase font-inter ${
                    filteredProducts?.length > 1 &&
                    "bg-primary text-white rounded-[15px] p-2 mt-2"
                  }`}
                >
                  {ele.dimension}
                </h3>
              ))}
            </div>

            {/* grain */}
            <div>
              <ProductDetail label="grain" value={category.grain} />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="absolute top-0 right-0 flex flex-col justify-end gap-2 text-center md:flex-row md:static md:justify-center">
              <div className="flex flex-col items-center justify-start">
                <div>
                  <Image
                    src={`/product patterns/${category.image.pattern.name} - Primary.svg`}
                    alt=""
                    width="38"
                    height="38"
                    className="md:w-[70px] md:h-[70px] lg:md:w-[90px] lg:h-[90px]"
                  />
                </div>
                <p className="text-[12px] md:text-[14px] lg:text-[18px]">
                  {category.image.pattern.name}
                </p>
              </div>
              <div className="flex flex-col items-center justify-start">
                <div>
                  <Image
                    src={`/product grains/${category.image.grain.name} - Primary.svg`}
                    alt=""
                    width="38"
                    height="38"
                    className="md:w-[70px] md:h-[70px] lg:md:w-[90px] lg:h-[90px]"
                  />
                </div>
                <p className="text-[12px] md:text-[14px] lg:text-[18px]">
                  {category.image.grain.name}
                </p>
              </div>
            </div>

            {/* add to catalogue and get your free sample */}
            <div className="fixed bottom-0 left-0 md:absolute md:bottom-0 md:left-0 lg:static flex flex-col justify-center gap-2 w-full bg-[#fff] z-20 py-6 ">
              <button
                onClick={handleAddCatalogue}
                className="flex items-center justify-center text-center"
              >
                <div>
                  {category.isSelected ? (
                    <Image
                      src="/icons/Star Activated.svg"
                      alt=""
                      width="52"
                      height="52"
                    />
                  ) : (
                    <Image
                      src="/icons/Star Idle.svg"
                      alt=""
                      width="52"
                      height="52"
                    />
                  )}
                </div>
                <span className="text-[#000] font-semibold">
                  Add to Catalogue
                </span>
              </button>
              {/* <div className="h-full text-center"> */}
              <button
                onClick={handleGetFreeSample}
                className="uppercase rounded-[40px] bg-primary text-[#fff] text-[14px] px-[18px] py-[14px] mx-auto shadow-xl"
              >
                get your free sample now
              </button>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mt-[50px]">
        <div className="flex items-center justify-center w-full p-3 bg-primary h-[70px]">
          <Image
            src={
              category.category === "KL"
                ? logoKandinskyLiteWhiteHoz
                : logoKandinskyWhite
            }
            alt="kandinsky lite logo"
            className="max-w-[200px] h-auto"
          />
        </div>
      </section>
    </main>
  );
}
