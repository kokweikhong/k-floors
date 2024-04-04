import React from "react";
import Image from "next/image";
import Link from "next/link";

const ArrowLeft = () => {
  return (
    <div className="flex items-center h-[12px] w-[12px] md:h-[23px] md:w-[23px]">
      <Image
        src="/icons/arrow-left.svg"
        alt="arrow left icon"
        width="12"
        height="12"
        className="w-full h-full"
      />
    </div>
  );
};

const Breadcrumb: React.FC<{
  props: {
    links?: {
      url: string;
      object: any;
    }[];
  };
}> = ({ props }) => {
  return (
    <div className="w-full max-w-full px-[15px] border-b border-b-[#D9D9D9] py-[20px]">
      <ul className="flex gap-[5px] items-stretch min-h-[20px]">
        <li className="flex items-center">
          <Link href="/" className="w-[12px] h-[12px] md:h-[18px] md:w-[18px]">
            <Image
              src="/icons/home.svg"
              alt="home icon"
              width="12"
              height="12"
              className="w-full h-full"
            />
          </Link>
        </li>
        {props?.links?.map((link, index) => {
          return [
            <li key={index} className="flex items-center">
              <ArrowLeft />
            </li>,
            <li key={`navlinks-${index}`} className="flex items-center">
              <Link
                href={link.url}
                className="text-[12px] md:text-[15px] font-semibold leading-[15px]"
              >
                {link.object}
              </Link>
            </li>,
          ];
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
