"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import svgDoubleArrowUp from "../public/icons/double-arrow-up.svg";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    if (window !== undefined) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
        /* you can also use 'auto' behaviour
            in place of 'smooth' */
      });
    }
  };

  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("scroll", toggleVisible);
    }
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${
        visible ? "inline" : "hidden"
      } bg-[#fff] border border-[#000] fixed bottom-10 z-50 cursor-pointer p-2 right-3 animate-bounce shadow-2xl flex flex-col items-center justify-center`}
    >
      <div className="relative w-[35px] h-[35px]">
        <Image src={svgDoubleArrowUp} alt="double arrow up icon" fill />
      </div>
      <span className="text-[10px] text-center">Back to top</span>
    </button>
  );
}
