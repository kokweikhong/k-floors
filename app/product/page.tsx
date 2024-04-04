"use client";

import Image from "next/image";
import Link from "next/link";

import heroImage from "../../public/images/home/Sustainability.jpeg";

import logoKandinskyWhite from "../../public/kandinsky_logo_white.svg";
import logoKandinskyLiteWhite from "../../public/kandinsky lite_logo1.svg";
import logoKandinskyLiteWhiteHoz from "../../public/kandinsky lite_logo2.svg";

import { categories } from "@/data/productCategory";
import { useState } from "react";

export default function ProductPage() {
  const imageBaseURL = "/product/category_images";
  const [categoryType, setCategoryType] = useState<"K" | "KL">("KL");
  function handleCategoryChange(t: "K" | "KL") {
    setCategoryType(t);
  }
  return (
    <main>
      {/* hero section */}
      <section className="h-screen w-full relative after:h-full after:w-full after:bg-black/40 after:absolute after:top-0 after:left-0 after:-z-[1]">
        <div className="w-full h-full absolute top-o left-0 -z-[1]">
          <Image
            src={heroImage}
            alt="sustainability product | nature forest"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-[#fff] max-w-[500px] flex flex-col items-center justify-center h-full text-center mx-auto px-[15px]">
          <h1 className="text-[64px] leading-[68px] font-bold lg:font-black uppercase">
            our product
          </h1>

          <span className="w-full h-[1px] bg-[#fff] my-8"></span>

          <p className="text-[18px] leading-[22px] lg:leading-[28px] lg:text-[24px] font-medium">
            Wooden timber with a cross-grain composition, making our boards
            highly resilient and adaptable to environmental changes. Our
            beautiful natural patterns and wide range of colours make our timber
            a versatile and ideal choice for any interior design project.
          </p>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-2">
          <button
            className={`flex items-center justify-center w-full px-[15px] cursor-pointer bg-white ${categoryType === "K" && "animate-bounce-slow"
              }`}
            onClick={() => handleCategoryChange("KL")}
          >
            <div className="max-w-[180px] w-full h-[35px] relative">
              <Image
                src={logoKandinskyLiteWhite}
                alt="kandinksy logo"
                fill
              // className="object-cover"
              // className="w-full h-full"
              />
            </div>
          </button>
          <div className="w-full bg-black">
            <button
              className={`bg-black text-[#fff] flex flex-col justify-center items-center w-full py-[15px] cursor-pointer ${categoryType === "KL" && "animate-bounce-slow"
                }`}
              onClick={() => handleCategoryChange("K")}
            >
              <div className="px-[15px] w-full flex flex-col items-center">
                <div className="relative h-[20px] w-full max-w-[180px] mb-1">
                  <Image
                    src={logoKandinskyWhite}
                    alt="kandinksy logo"
                    fill
                  // className="object-fill"
                  // className="w-full h-full"
                  />
                </div>
                <span className="uppercase w-full max-w-[180px] text-left">
                  premium timber
                </span>
              </div>
            </button>
          </div>
          <button
            className="w-full text-right py-4 px-6"
            onClick={() => handleCategoryChange("KL")}
          >
            <span
              className={`w-[15px] h-[15px] rounded-full text-right inline-block ${categoryType === "KL" ? "bg-[#5A5A5A]" : "bg-[#D9D9D9]"
                }`}
            ></span>
          </button>
          <button
            className="w-full h-full text-left py-4 px-6"
            onClick={() => handleCategoryChange("K")}
          >
            <span
              className={`w-[15px] h-[15px] rounded-full text-right inline-block ${categoryType === "K" ? "bg-[#5A5A5A]" : "bg-[#D9D9D9]"
                }`}
            ></span>
          </button>
        </div>
      </section>

      <section className="container mx-auto mt-[50px]">
        <div className="flex flex-col gap-4 text-center text-primary">
          <div className="flex items-center justify-center gap-2">
            <div className="w-[38px] h-[38px]">
              <Image
                src="/icons/FSC.svg"
                alt="FSC"
                width="52"
                height="52"
                className="w-full h-full"
              />
            </div>
            <div className="flex items-center w-[110px] h-[38px]">
              <div className="w-[38px] h-[38px]">
                <Image
                  src="/icons/EN.svg"
                  alt="EN"
                  width="52"
                  height="52"
                  className="w-full h-full"
                />
              </div>
              <h3 className="leading-[1] text-[12px]">
                EUROPEAN <br />
                STANDARDS
              </h3>
            </div>
            <div className="w-[38px] h-[38px]">
              <Image
                src="/icons/CE.svg"
                alt="CE"
                width="52"
                height="52"
                className="w-full h-full"
              />
            </div>
          </div>
          <h2 className="uppercase text-[32px] font-semibold leading-[39px]">
            sustainably and ethically sourced
          </h2>
        </div>
      </section>

      {/* product categories */}
      <section className="container mx-auto text-center mt-[50px] px-[15px]">
        <div className="grid grid-cols-2 gap-x-[20px] gap-y-[25px] md:grid-cols-3 xl:grid-cols-4">
          {categories.map((category, index) => {
            return (
              category.category === categoryType && (
                <div key={index} className="relative">
                  <div className="w-full h-[250px] md:h-[335px] relative">
                    <Link href={`/product/${category.index}`}>
                      <Image
                        src={`${imageBaseURL}/${category.productId}/${category.image.thumbnail}`}
                        alt=""
                        width="500"
                        height="500"
                        className="object-cover w-full h-full"
                      />
                    </Link>
                    <div className="z-10">
                      <Link
                        href={`/product/${category.index}`}
                        className="absolute bottom-0 left-0 w-full text-center uppercase text-[#fff] font-semibold text-[12px] p-2 cursor-pointer"
                      >
                        get free sample
                      </Link>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-[50px] m-2">
                    <div>
                      <div>
                        <Image
                          src={`/product patterns/${category.image.pattern.src}`}
                          alt=""
                          width="42"
                          height="42"
                          className="mx-auto"
                        />
                      </div>
                      <p
                        className={`${category.patternColor === "white"
                            ? "text-[#fff]"
                            : "text-[#000]"
                          } text-[12px] leading-[15px] break-all`}
                      >
                        {category.image.pattern.name}
                      </p>
                    </div>
                    <div>
                      <div>
                        <Image
                          src={`/product grains/${category.image.grain.src}`}
                          alt=""
                          width="42"
                          height="42"
                          className="mx-auto"
                        />
                      </div>
                      <p
                        className={`${category.patternColor === "white"
                            ? "text-[#fff]"
                            : "text-[#000]"
                          } text-[12px] leading-[15px] break-all`}
                      >
                        {category.image.grain.name}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-base">{category.name}</p>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </section>

      <section className="mt-[50px]">
        <div className="border-top border-t-[#D9D9D9] border py-2">
          <p className="text-center text-base leading-[19px] uppercase text-secondary">{`${categories.filter((e) => e.category === categoryType).length
            } of ${categories.filter((e) => e.category === categoryType).length
            } shown`}</p>
        </div>
        <div className="flex items-center justify-center w-full p-3 bg-primary h-[70px]">
          <Image
            src={categoryType === "KL" ? logoKandinskyLiteWhiteHoz : logoKandinskyWhite}
            alt="kandinsky lite logo"
            className="max-w-[200px] h-auto"
          />
        </div>
      </section>
    </main>
  );
}
