"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ProductContext } from "@/context/product";

const NavLink: React.FC<{ href: string; text: string }> = ({ href, text }) => {
  return (
    <li className="text-[12px] font-medium">
      <Link
        href={href}
        className="block text-2xl text-[#fff] no-underline mb-[30px] lg:text-lg lg:py-[2px] lg:m-auto"
      >
        {text}
      </Link>
    </li>
  );
};

const Header: React.FC = () => {
  const [isBurgerMenuClose, setIsBurgerMenuClose] = useState(false);
  const [isMenuOverlay, setIsMenuOverlay] = useState(false);
  const [isHeaderHide, setIsHeaderHide] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(300);
  const pathname = usePathname();
  const { categories } = useContext(ProductContext);

  useEffect(() => {
    setIsBurgerMenuClose(false);
    setIsMenuOverlay(false);
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
      });
      if (pathname === "/") {
        setIsHeaderHide(true);

        window.addEventListener("scroll", controlNavbar);

        // cleanup function
        return () => {
          window.removeEventListener("scroll", controlNavbar);
        };
      } else {
        setIsHeaderHide(false);
      }
    }
  }, [pathname]);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < lastScrollY) {
        // if scroll down hide the navbar
        setIsHeaderHide(true);
      } else {
        // if scroll up show the navbar
        setIsHeaderHide(false);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  function handleMenuToggle() {
    setIsBurgerMenuClose((current) => !current);
    setIsMenuOverlay((current) => !current);
  }
  return (
    <header
      className={`${
        isHeaderHide ? "hidden" : "block"
      } sticky top-0 w-full bg-[#000] z-50 h-[65px]`}
    >
      <nav className="container relative flex w-full h-full p-5 mx-auto">
        <div className="my-auto mr-auto">
          <Link href="/" shallow>
            <Image
              src="/kandinsky_logo_white.svg"
              alt="kandinsky logo"
              width="150"
              height="15"
            />
          </Link>
        </div>

        <div
          id="burger-menu"
          className={`${
            isBurgerMenuClose ? "" : "close"
          } relative cursor-pointer h-6 w-6 self-center ml-auto overflow-visible z-[2] lg:hidden`}
          onClick={handleMenuToggle}
        >
          <span
            className={`${
              isBurgerMenuClose
                ? "w-[27px] bg-[#fff] transform -rotate-45 before:bg-[#fff] before:w-[27px] before:transform before:rotate-90 before:top-0 after:bg-[#fff] after:transform after:rotate-90 after:w-0 after:!opacity-0 after:top-0 after:left-0"
                : ""
            } bg-[#fff] h-[3px] ease-in-out duration-300 transition opacity-100 w-6 right-0 top-1/2 absolute 
        after:content-[''] after:bg-[#fff] after:block after:h-[3px] after:opacity-100 after:absolute after:ease-in-out after:duration-300 after:transition after:w-[25px] after:right-0 after:top-[10px] 
        before:content-[''] before:bg-[#fff] before:block before:h-[3px] before:opacity-100 before:absolute before:ease-in-out before:duration-300 before:transition before:w-[25px] before:right-0 before:-top-[10px]`}
          ></span>
        </div>

        <div
          id="menu"
          className={`${
            isMenuOverlay
              ? "overlay visible opacity-100 pt-[100px] bg-[#000] bg-opacity-80"
              : "invisible opacity-0 pt-5"
          } z-[1] min-w-full min-h-full fixed top-0 left-0 h-0 text-center transition-all duration-300 ease-in-out
            lg:h-full lg:min-w-0 lg:p-0 lg:static lg:visible lg:opacity-100`}
        >
          <ul className="text-[#fff] lg:flex lg:flex-nowrap lg:gap-8">
            <NavLink href="/" text="Home" />
            <NavLink href="/product" text="Product" />
            <NavLink
              href="/catalogue"
              text={`Catalogue (${
                categories.filter((ele) => ele.isSelected).length
              })`}
            />
            <NavLink href="/about" text="About Us" />
            <NavLink href="/contact" text="Contact Us" />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
