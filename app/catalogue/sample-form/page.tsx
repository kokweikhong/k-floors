"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { ProductContext } from "@/context/product";
import SendingEmail from "@/components/SendingEmail";
import EmailHasSubmitted from "@/components/EmailHasSubmitted";
import FailedToSubmitRequestEmail from "@/components/FailedToSubmitRequestEmail";
import { IProductCategory } from "@/types/productCategory";
import { IProduct } from "@/types/product";

const NotProductIsSelected = () => {
  return (
    <section className="container mx-auto px-[15px] mt-[50px]">
      <div className="flex flex-col items-center justify-center text-[20px] h-screen">
        <p className="font-medium">
          You have not selected any product sample to submit
        </p>
        <p className="font-medium">
          Please visit{" "}
          <Link
            href="/product"
            className="font-bold underline uppercase text-primary"
          >
            our product page
          </Link>{" "}
          to select your desired samples.
        </p>
      </div>
    </section>
  );
};

export interface ISampleForm {
  address1: string;
  address2: string;
  city: string;
  company: string;
  delivery: string;
  email: string;
  mailing: string;
  name: string;
  phone: string;
  postcode: string;
  remarks?: string;
  data: ISelectedData[];
}

export interface ISelectedData {
  category: IProductCategory;
  applications: string[];
  items: IProduct[];
}

export default function SampleFormPage() {
  const {
    products,
    removeSelected,
    addSelected,
    resetSelected,
    removeCategory,
    categories,
  } = useContext(ProductContext);
  const [sumSelected, setSumSelected] = useState<number>(0);
  const [isFailToSubmit, setIsFailToSubmit] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSendingRequest, setIsSendingRequest] = useState(false);
  const [formData, setFormData] = useState<ISampleForm>({
    address1: "",
    address2: "",
    city: "",
    company: "",
    delivery: "",
    email: "",
    mailing: "",
    name: "",
    phone: "",
    postcode: "",
    remarks: "",
    data: categories
      .filter((e) => e.isSelected)
      .map((e) => ({ items: [], applications: [], category: e })),
  });
  const router = useRouter();
  const applications: string[] = ["ceiling", "wall", "floor"];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISampleForm>({
    defaultValues: formData,
  });

  const onSubmit = async (data: ISampleForm) => {
    console.log(products.filter((e) => e.isSelected).length);

    const arragedData = {
      ...data,
      data: data.data.map((e) => {
        return {
          ...e,
          items: products.filter(
            (p) => p.isSelected && p.productId === e.category?.productId
          ),
        };
      }),
    };

    console.log(data);
    console.log(arragedData);
    setIsSendingRequest(true);
    try {
      const res = await fetch("/api/sample-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(arragedData),
      });
      console.log(res);
      reset();
      resetSelected();
      setIsSubmit(true);
    } catch (e) {
      setIsFailToSubmit(true);
    }
  };

  useEffect(() => {
    setSumSelected(
      categories.reduce((a, b) => {
        return b.isSelected ? (a += 1) : a;
      }, 0)
    );
    // const newData: ISelectedData[] = categories
    //   .filter((e) => e.isSelected)
    //   .map((e) => ({ items: [], applications: [], category: e }));
    // console.log(newData);
    // setFormData((prev) => ({ ...prev, data: newData }));
    // reset(formData);
  }, [categories]);

  useEffect(() => {
    setIsSendingRequest(false);
    let isRedirect: boolean;
    if (isSubmit) {
      isRedirect = true;
    }

    setTimeout(() => {
      setIsFailToSubmit(false);
      setIsSubmit(false);
      setIsSendingRequest(false);
      if (isRedirect) {
        router.push("/");
      }
    }, 5000);
  }, [isFailToSubmit, isSubmit, router]);

  function handleProductChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      addSelected(e.target.value);
    } else if (!e.target.checked) {
      removeSelected(e.target.value);
    }
  }

  if (isSendingRequest) return <SendingEmail />;
  if (isSubmit) return <EmailHasSubmitted />;
  if (isFailToSubmit) return <FailedToSubmitRequestEmail />;
  if (sumSelected < 1) return <NotProductIsSelected />;

  return (
    <main>
      <section className="container mx-auto px-[15px] mt-[50px]">
        <h2 className="text-[40px] text-center font-semibold font-inter">
          Sample Form
        </h2>
      </section>

      <section className="mt-[50px] container mx-auto px-[15px]">
        <div className="flex items-center justify-center gap-6 py-7 border-y border-y-[#D9D9D9]">
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
      </section>

      {/* sample form */}
      <section className="mt-[50px] container mx-auto px-[15px] max-w-[600px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-6"
        >
          {formData?.data.map((item, index) => {
            return (
              <div
                className="border-b border-b-[#979797] flex w-full"
                key={index}
              >
                <div className="relative flex flex-col w-full gap-2 pb-8 mt-5 pr-14">
                  <div>
                    <h4 className="text-base font-normal uppercase text-[#999]">
                      you are requesting for
                    </h4>
                    <h2 className="text-base font-normal">{`(${index + 1}) ${
                      item.category.name
                    }`}</h2>
                  </div>

                  {/* applications */}
                  <div>
                    <h3 className="uppercase text-base font-normal text-[#979797]">
                      Area of Application (Optional)
                    </h3>

                    <div>
                      {errors.data?.at(index)?.applications && (
                        <p role="alert">
                          Please select at least 1 application.
                        </p>
                      )}
                      {applications.map((app, idx) => {
                        return (
                          <div
                            key={idx}
                            className="relative flex items-center gap-3"
                          >
                            <label className="flex gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                value={app}
                                {...register(
                                  `data.${index}.applications` as const,
                                  {
                                    required: true,
                                  }
                                )}
                                className="bg-[#eee] text-[20px] font-medium p-2 rounded"
                              />
                              <span className="text-base font-medium capitalize">
                                {app}
                              </span>
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/* end applications */}

                  {/* dimensions */}
                  <div>
                    <h3 className="uppercase text-base font-normal text-[#979797]">
                      Dimension
                    </h3>
                    <div>
                      {errors.data?.at(index)?.items && (
                        <p role="alert">Please select at least 1 product.</p>
                      )}
                      {products.map((product, idx) => {
                        return (
                          product.productId === item.category.productId && (
                            <div
                              key={idx}
                              className="relative flex items-center gap-3"
                            >
                              <label className="cursor-pointer flex gap-2">
                                <input
                                  type="checkbox"
                                  value={product.sku}
                                  checked={product.isSelected || false}
                                  {...register(`data.${index}.items` as const, {
                                    required: true,
                                  })}
                                  onChange={(e) => handleProductChange(e)}
                                  className="bg-[#eee] text-[20px] font-medium p-2 rounded"
                                />
                                <span className="text-base font-medium capitalize">
                                  {product.dimension}
                                </span>
                              </label>
                            </div>
                          )
                        );
                      })}
                    </div>
                  </div>
                  {/* end dimensions */}

                  {/* cancel button */}
                  <div className="absolute top-0 right-0">
                    <button
                      type="button"
                      onClick={() => {
                        removeCategory(item.category.productId);
                      }}
                      className="w-[20px] h-[20px]"
                    >
                      <Image
                        src="/icons/cancel.svg"
                        alt="cancel icon"
                        width="28"
                        height="28"
                        className="w-full h-full"
                      />
                    </button>
                  </div>
                  {/* end cancel button */}
                </div>
              </div>
            );
          })}

          <div className="flex flex-col w-full gap-[25px]">
            {/* name */}
            <div className="flex flex-col gap-2">
              <label className="text-[20px] font-medium text-[#767676]">
                Name:
              </label>
              <input
                {...register("name", { required: true })}
                className="bg-[#eee] text-[20px] font-medium p-2"
              />
              {errors.name && <p role="alert">Name is required.</p>}
            </div>

            {/* company */}
            <div className="flex flex-col gap-2">
              <label className="text-[20px] font-medium text-[#767676]">
                Company:
              </label>
              <input
                {...register("company", { required: true })}
                className="bg-[#eee] text-[20px] font-medium p-2"
              />
              {errors.company && <p role="alert">Company is required.</p>}
            </div>

            {/* email address */}
            <div className="flex flex-col gap-2">
              <label className="text-[20px] font-medium text-[#767676]">
                Email Address:
              </label>
              <input
                type="email"
                {...register("email")}
                className="bg-[#eee] text-[20px] font-medium p-2"
              />
            </div>

            {/* phone */}
            <div className="flex flex-col gap-2">
              <label className="text-[20px] font-medium text-[#767676]">
                Phone:
              </label>
              <input
                {...register("phone", { required: true })}
                className="bg-[#eee] text-[20px] font-medium p-2"
              />
              {errors.phone && <p role="alert">Phone is required.</p>}
            </div>

            {/* remarks */}
            <div className="flex flex-col gap-2">
              <label className="text-[20px] font-medium text-[#767676]">
                Remarks:
              </label>
              <input
                {...register("remarks")}
                className="bg-[#eee] text-[20px] font-medium p-2"
              />
            </div>

            {/* maillig address */}
            <div className="flex flex-col">
              <label className="text-[20px] font-medium mb-[8px] text-[#767676]">
                Mailing Address:
              </label>
              <select
                {...register("mailing", {
                  required: "Mailing address is required.",
                  pattern: {
                    value: /^Singapore$|^Malaysia$/,
                    message: "Invalid mailing address",
                  },
                })}
                className="bg-[#eee] text-[20px] font-medium p-2"
              >
                <option value="" disabled>
                  Singapore / Malaysia
                </option>
                <option value="Singapore">Singapore</option>
                <option value="Malaysia">Malaysia</option>
              </select>
              {errors.mailing && <p role="alert">Mailing is requred</p>}

              <select
                {...register("delivery", {
                  required: "Delivery or Pick up?",
                  pattern: {
                    value: /^delivery$|^pickup$/,
                    message: "Delivery or Pick up?",
                  },
                })}
                defaultValue=""
                className="text-[20px] font-medium p-2 bg-[#fff] w-3/4"
              >
                <option value="" disabled>
                  Delivery / Pick up
                </option>
                <option value="delivery">Delivery</option>
                <option value="pickup">Pick up</option>
              </select>
              {errors.delivery && (
                <p role="alert">Delivery method is requred</p>
              )}
            </div>

            {/* address1 */}
            <div className="flex flex-col gap-2">
              <label className="text-[20px] font-medium text-[#767676]">
                Address Line 1
              </label>
              <input
                placeholder="Example: 54 Senoko Rd"
                {...register("address1", { required: true })}
                className="bg-[#eee] text-[20px] font-medium p-2"
              />
              {errors.address1 && (
                <p role="alert">Address Line 1 is required.</p>
              )}
            </div>

            {/* address2 */}
            <div className="flex flex-col gap-2">
              <label className="text-[20px] font-medium text-[#767676]">
                Address Line 2 (Optional)
              </label>
              <input
                placeholder="Example: Floor 1"
                {...register("address2")}
                className="bg-[#eee] text-[20px] font-medium p-2"
              />
            </div>

            {/* city */}
            <div className="flex flex-col gap-2">
              <label className="text-[20px] font-medium text-[#767676]">
                City
              </label>
              <input
                placeholder="Example: Singapore"
                {...register("city", { required: true })}
                className="bg-[#eee] text-[20px] font-medium p-2"
              />
              {errors.city && <p role="alert">City is required.</p>}
            </div>

            {/* Zip / Postcode */}
            <div className="flex flex-col gap-2">
              <label className="text-[20px] font-medium text-[#767676]">
                Zip / Postcode
              </label>
              <input
                placeholder="Example: 758118"
                {...register("postcode", { required: true })}
                className="bg-[#eee] text-[20px] font-medium p-2"
              />
              {errors.postcode && (
                <p role="alert">Zip or Postcode is required.</p>
              )}
            </div>
          </div>

          <div className="lg:hidden">
            <p className="text-[#979797]">To proceed, please place request.</p>
          </div>

          <div className="flex flex-col md:flex-row-reverse md:gap-10 md:justify-center md:items-center lg:flex-col gap-4 fixed lg:static bottom-0 bg-[#fff] z-10 w-full items-center py-[20px] shadow-[0px_-4px_5px_rgba(0,0,0,0.25)] lg:shadow-none">
            <input
              type="submit"
              value={`Place request (${
                products.filter((e) => e.isSelected).length
              })`}
              className="cursor-pointer rounded-[40px] px-[32px] py-[24px] bg-[#488791] text-[#fff] uppercase text-[13px] font-semibold tracking-[2px] shadow-[0px_15px_20px_rgba(0,0,0,0.2)]"
            />
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-[10px] leading-[12px]">or contact us at</p>
              <div className="flex gap-10">
                <Link
                  href="https://wa.me/6587767837"
                  className="w-[45px] h-[45px]"
                >
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
          </div>
        </form>
      </section>

      {/* color bar */}
      <section className="mt-[50px]">
        <span className="block h-[70px] w-full bg-primary"></span>
      </section>
    </main>
  );
}
