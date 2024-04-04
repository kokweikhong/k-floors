"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import svgMalaysia from "../../public/icons/Malaysia.svg";
import svgSingapore from "../../public/icons/Singapore.svg";

import svgMail from "../../public/icons/mail.svg";
import svgPhone from "../../public/icons/phone.svg";

import EmailHasSubmitted from "@/components/EmailHasSubmitted";
import FailedToSubmitRequestEmail from "@/components/FailedToSubmitRequestEmail";
import SendingEmail from "@/components/SendingEmail";
import Script from "next/script";

export default function ContactPage() {
  const [isFailToSubmit, setIsFailToSubmit] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSendingRequest, setIsSendingRequest] = useState(false);
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    setIsSendingRequest(true);
    try {
      const res = await fetch("/api/contactus-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(res.status);
      reset();
      setIsSubmit(true);
    } catch (e) {
      setIsFailToSubmit(true);
    }
  };
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
  }, [isFailToSubmit, isSubmit]);

  if (isSendingRequest) return <SendingEmail />;
  if (isSubmit) return <EmailHasSubmitted />;
  if (isFailToSubmit) return <FailedToSubmitRequestEmail />;
  return (
    <main>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-11429172076"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'AW-11429172076');
        `}
      </Script>

      {/* national logos */}
      <section className="mt-[50px] container mx-auto px-[15px]">
        <h2 className="text-[40px] font-semibold text-center">Contact Us</h2>
        <div className="flex items-center justify-center gap-2 pt-[30px] border-t border-t-[#D9D9D9]">
          <div className="w-[56px] h-[56px]">
            <Image
              src={svgSingapore}
              alt="Singapore"
              className="w-full h-full"
            />
          </div>
          <div className="w-[56px] h-[56px]">
            <Image src={svgMalaysia} alt="Malaysia" className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* google maps and contact details */}
      <section className="container mx-auto px-[15px] mt-[50px]">
        {/* Singapore Marina Square */}
        <div className="mt-[30px]">
          <div className="w-full h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.805163107347!2d103.855623210814!3d1.2912450986910595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19c6efbdfc6b%3A0x8e8b9d96b9e349ff!2sCalvary%20Carpentry%20-%20Kandinsky%20Showroom!5e0!3m2!1sen!2ssg!4v1700121835088!5m2!1sen!2ssg"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="text-[20px] font-normal font-inter flex flex-col gap-[15px] justify-center mt-[30px]">
            <h3 className="text-[20px] font-inter font-medium uppercase text-[#999]">
              Singapore Showroom
            </h3>
            <p>#03-207 Marina Square, Singapore 039594</p>
            <div className="flex items-center justify-start gap-2">
              <div className="w-[24px] h-[24px]">
                <Image
                  src={svgMail}
                  alt="mail icon"
                  className="w-full h-full"
                />
              </div>
              <span className="underline">sales@k-floors.com</span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <div className="w-[24px] h-[24px]">
                <Image
                  src={svgPhone}
                  alt="phone icon"
                  className="w-full h-full"
                />
              </div>
              <span className="underline">+65 6910 6069</span>
            </div>
          </div>
        </div>

        {/* Singapore */}
        <div className="mt-[30px]">
          <div className="w-full h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.511099681675!2d103.80181281538809!3d1.4667205615958037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da14605351fdf9%3A0x15649a8976605ec0!2sCalvary%20Carpentry%20Pte%20Ltd!5e0!3m2!1sen!2smy!4v1679024139528!5m2!1sen!2smy"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="text-[20px] font-normal font-inter flex flex-col gap-[15px] justify-center mt-[30px]">
            <h3 className="text-[20px] font-inter font-medium uppercase text-[#999]">
              Singapore HQ
            </h3>
            <p>54 Senoko Road, Singapore 758118, Floor 1</p>
            <div className="flex items-center justify-start gap-2">
              <div className="w-[24px] h-[24px]">
                <Image
                  src={svgMail}
                  alt="mail icon"
                  className="w-full h-full"
                />
              </div>
              <span className="underline">sales@calvarycarpentry.com</span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <div className="w-[24px] h-[24px]">
                <Image
                  src={svgPhone}
                  alt="phone icon"
                  className="w-full h-full"
                />
              </div>
              <span className="underline">+65 8776 7837</span>
            </div>
          </div>
        </div>

        {/* Malaysia */}
        <div className="mt-[50px]">
          <div className="w-full h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.403538123166!2d103.57510120133183!3d1.5008124589633791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da751a567bd4c1%3A0xe5cbe503912b0902!2sSetia%20Business%20Park%2C%2081500%20Johor%20Bahru%2C%20Johor!5e0!3m2!1sen!2smy!4v1679024456662!5m2!1sen!2smy"
              allowFullScreen
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="text-[20px] font-normal font-inter flex flex-col gap-[15px] justify-center mt-[30px]">
            <h3 className="text-[20px] font-inter font-medium uppercase text-[#999]">
              Malaysia
            </h3>
            <p>
              No. 26, Jalan Laman Setia 7/6, Taman Laman Setia,81550 Gelang
              Patah, Johor, Malaysia.
            </p>
            <div className="flex items-center justify-start gap-2">
              <div className="w-[24px] h-[24px]">
                <Image
                  src={svgMail}
                  alt="mail icon"
                  className="w-full h-full"
                />
              </div>
              <span className="underline">Msia@calvarycarpentry.com</span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <div className="w-[24px] h-[24px]">
                <Image
                  src={svgPhone}
                  alt="phone icon"
                  className="w-full h-full"
                />
              </div>
              <span className="underline">+60 16-778 5788</span>
            </div>
          </div>
        </div>
      </section>

      {/* contact form */}
      <section className="container mx-auto px-[15px] mt-[50px]">
        <h2>Contact Form</h2>
        <div className="mt-[30px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-[20px] font-medium flex flex-col justify-center gap-4"
          >
            <div className="flex flex-col justify-center gap-1">
              <label>Name:</label>
              <input
                {...register("name", { required: true })}
                aria-invalid={errors.name ? "true" : "false"}
                className="w-full bg-[#EEE] p-2"
              />
              {errors.name?.type === "required" && (
                <p role="alert">Name is required</p>
              )}
            </div>

            <div className="flex flex-col justify-center gap-1">
              <label>Email Address:</label>
              <input
                {...register("mail")}
                placeholder="Optional"
                type="email"
                className="w-full bg-[#EEE] p-2"
              />
            </div>

            <div className="flex flex-col justify-center gap-1">
              <label>Phone:</label>
              <input
                {...register("phone", { required: true })}
                aria-invalid={errors.phone ? "true" : "false"}
                className="w-full bg-[#EEE] p-2"
              />
              {errors.phone?.type === "required" && (
                <p role="alert">Phone is required</p>
              )}
            </div>

            <div className="flex flex-col justify-center gap-1">
              <label>Remarks:</label>
              <textarea
                {...register("remarks")}
                placeholder="Optional"
                rows={5}
                className="w-full bg-[#EEE] p-2"
              />
            </div>
            <div className="self-center">
              <input
                type="submit"
                value="Submit enquiry"
                className="cursor-pointer uppercase text-[13px] font-semibold bg-[#488791] text-[#fff] px-[30px] py-[13px] rounded-[40px]"
              />
            </div>
          </form>
        </div>
      </section>

      <section className="mt-[50px]">
        <span className="h-[70px] w-full bg-primary block"></span>
      </section>
    </main>
  );
}
