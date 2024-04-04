"use client";

import Image from "next/image";
import Link from "next/link";

import { ProductContext } from "@/context/product";
import { useContext } from "react";

export default function CataloguePage() {
  const { categories, products, removeSelected, removeCategory } =
    useContext(ProductContext);
  return (
    <main>
      <section className="mt-[50px]">
        <div className="w-full text-center">
          <h2 className="mb-7 text-[40px] font-semibold">Catalogue</h2>
          <h3 className="uppercase text-primary text-base font-normal py-8 border-y border-y-[#D9D9D9]">
            get your free sample here
          </h3>
          <div className="flex items-center justify-center gap-6 mt-7">
            <div>
              <Image
                src="/icons/Bizsafe.svg"
                alt="biz safe"
                width="65"
                height="65"
              />
            </div>
            <div>
              <Image
                src="/icons/Delivery.svg"
                alt="free delivery"
                width="65"
                height="65"
              />
            </div>
            <div>
              <Image
                src="/icons/Self Collection.svg"
                alt="self collection"
                width="65"
                height="65"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="text-primary mt-[50px] container mx-auto px-[15px]">
        {categories.length === 0 ? (
          <div>
            <p className="text-center">
              Your catalogue is empty, add some product to request for free
              sample!
            </p>
          </div>
        ) : (
          categories.map((category, index) => {
            return (
              category.isSelected && (
                <div
                  key={index}
                  className="relative grid grid-cols-2 gap-[15px] border-t border-t-[#D9D9D9] pt-[30px]"
                >
                  <div className="flex col-span-full gap-[15px]">
                    {/* category thumbnail */}
                    <div className="max-w-[150px] max-h-[150px]">
                      <Image
                        src={`/product/category_images/${category.productId}/${category.image.thumbnail}`}
                        alt=""
                        width="500"
                        height="500"
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* sku and name */}
                    <div className="flex flex-col gap-2">
                      {/* sku */}
                      <div className="flex flex-col">
                        <h4 className="uppercase text-[#767676] text-[16px] font-normal">
                          sku
                        </h4>
                        <h3 className="uppercase font-inter font-normal text-[16px]">
                          {category.productId}
                        </h3>
                      </div>

                      {/* name */}
                      <div className="flex flex-col">
                        <h4 className="uppercase font-normal text-[16px] text-[#767676]">
                          name
                        </h4>
                        <h3 className="font-inter uppercase text-[16px] text-[#000] font-normal">
                          {category.name}
                        </h3>
                      </div>
                    </div>

                    {/* pattern and grain svg */}
                    <div className="flex flex-wrap items-start self-start justify-end gap-3 grow md:flex-nowrap">
                      <div className="w-full max-w-[60px] flex flex-col items-center">
                        <div className="w-[42px] h-[42px]">
                          <Image
                            src={`/product patterns/${category.image.pattern.name} - Primary.svg`}
                            alt=""
                            width="48"
                            height="48"
                            className="w-full h-full"
                          />
                        </div>
                        <p className="text-center text-[12px]">
                          {category.image.pattern.name}
                        </p>
                      </div>
                      <div className="w-full h-full max-w-[60px] flex flex-col items-center">
                        <div className="w-[42px] h-[42px]">
                          <Image
                            src={`/product grains/${category.image.grain.name} - Primary.svg`}
                            alt=""
                            width="48"
                            height="48"
                            className="w-full h-full"
                          />
                        </div>
                        <p className="text-center text-[12px]">
                          {category.image.grain.name}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* material */}
                  <div>
                    <h4 className="uppercase font-normal text-[16px] text-[#767676]">
                      material
                    </h4>
                    <h3 className="uppercase font-inter font-normal text-[16px]">
                      {category.species}
                    </h3>
                  </div>
                  {/* thickness */}
                  <div>
                    <h4 className="uppercase font-normal text-[16px] text-[#767676]">
                      thickness
                    </h4>
                    <h3 className="uppercase font-inter font-normal text-[16px]">
                      {category.thickness}
                    </h3>
                  </div>
                  {/* dimension */}
                  <div>
                    <h4 className="uppercase font-normal text-[16px] text-[#767676]">
                      dimension
                    </h4>
                    {products.map((ele, idx) => {
                      return (
                        ele.productId === category.productId && (
                          <h3
                            key={idx}
                            className="uppercase font-inter font-normal text-[16px]"
                          >
                            {ele.dimension}
                          </h3>
                        )
                      );
                    })}
                  </div>

                  {/* grain */}
                  <div>
                    <h4 className="uppercase font-normal text-[16px] text-[#767676]">
                      grain
                    </h4>
                    <h3 className="uppercase font-inter font-normal text-[16px]">
                      {category.grain}
                    </h3>
                  </div>

                  <div className="py-4 col-span-full lg:absolute lg:bottom-0 lg:right-0">
                    <button
                      className="flex flex-col items-center justify-center mx-auto mb-4"
                      onClick={() => {
                        removeCategory(category.productId);
                      }}
                    >
                      <div>
                        <Image
                          src="/icons/Remove.svg"
                          alt="remove product icon"
                          width="42"
                          height="42"
                        />
                      </div>
                      <span className="text-[20px]">Remove</span>
                    </button>
                  </div>
                </div>
              )
            );
          })
        )}
      </section>

      <section className="mt-[50px] flex flex-col items-center gap-4 justify-center fixed bottom-0 z-10 bg-[#fff] left-0 w-full py-[30px] lg:static lg:py-0 lg:shadow-none shadow-[0_-4px_5px_rgba(0,0,0,0.25)]">
        <Link
          href="/catalogue/sample-form"
          className="bg-secondary uppercase text-[#fff] rounded-[40px] text-[13px] leading-[16px] tracking-[2px] px-[32px] py-[24px] font-semibold"
        >
          {`Request for free sample (${
            categories.filter((ele) => ele.isSelected).length
          })`}
        </Link>
        <div className="flex flex-col items-center justify-center gap-2">
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
