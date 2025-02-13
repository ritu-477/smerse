"use client"
import { HEADER_LIST } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import CustomButton from "./CustomButton";


const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    if (open && window.innerWidth < 1024) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className={`flex justify-between flex-col w-full z-[99] fixed top-0 ${scrolling ? 'bg-black transition-all duration-300 ease-linear delay-100' : 'bg-light-black'}`}>
      <div className="container flex justify-between w-full mx-auto lg:py-4 md:py-3 py-[5px] items-center relative">
        <button onClick={() => setOpen(!open)} className={`hidden h-4 md:max-w-[39px] md:h-8 max-w-5 w-full justify-between items-center max-xl:absolute max-xl:right-4 max-md:right-4 relative z-[70] max-xl:flex flex-col overflow-hidden ${open ? "sm:pt-[13px] pt-2":"lg:pt-0"}`}>
          <span className={`w-5 transition-all duration-300 md:min-h-[5px] md:min-w-[44px] h-[2px] !rounded-full bg-white relative after:w-full after:h-full after:absolute after:top-0 after:left-0 ${open ? "rotate-45 md:!-mb-1 after:rotate-90 after:!rounded-sm after:bg-white !bg-white" : ""}`}></span>
          <span className={`w-5 transition-all duration-300 md:min-h-[5px] md:min-w-[44px] h-[2px] !rounded-full bg-white ${open ? "hidden" : ""}`}></span>
          <span className={`w-5 transition-all duration-300 md:min-h-[5px] md:min-w-[44px] h-[2px] !rounded-full bg-white after:!bg-white ${open ? "-translate-x-12 !bg-white" : ""}`}></span>
        </button>
        <Link href="/">
          <Image className="lg:!max-w-[68px] md:max-w-14 sm:max-w-12 max-w-10 h-auto w-full" src="/assets/images/webp/header-logo.webp" width={68} height={68} alt="logo" />
        </Link>
        <div className={`flex xl:gap-5 xl:pl-10 lg:pl-5 items-center max-xl:px-4 relative w-full max-xl:bg-black mx-auto gap-4 !text-black xl:max-h-max max-xl:fixed max-xl:top-0 max-xl:h-full max-lg:w-full max-xl:flex-col max-xl:bg-hero-pattern bg-cover bg-top max-xl:duration-300 justify-center max-xl:items-center z-[60] ${open ? "max-xl:left-0" : "max-xl:left-full"}`}>
          {HEADER_LIST.map((item, index) => (
            <Link onClick={() => setOpen(!open)} key={index} href={item.link} className="relative lg:text-sm text-xl text-white transition-all duration-300 !tracking-wide ease-linear group">{item.title}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all rounded-xl duration-300 ease-linear group-hover:w-full"></span>
            </Link>
          ))}
          <div className="md:hidden max-md:block">
          <CustomButton styleClass="text-nowrap" title="Mint Now" />
          </div>
        </div>
        <div className="md:block max-md:hidden max-xl:mr-20">
        <CustomButton styleClass="text-nowrap" title="Mint Now" />
        </div>
      </div>
    </div>
  );
};

export default Header;
