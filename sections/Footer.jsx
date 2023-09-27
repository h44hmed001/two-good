"use client";
import Input from "@/components/Input";
import { nittyGritties, socials } from "@/utilis/constants";
import gsap from "gsap";
import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    gsap.to(".cls-1", {
      scrollTrigger: {
        trigger: "svg",

        start: "top bottom-=80",
      },
      opacity: 1,
      stagger: 0.2,
    });
  }, []);
  return (
    <div className="w-full footer ">
      <Input placeholder="Enter your email address for good" />
      <div className="w-full mt-[4vh] flex lg:min-h-screen lg:items-center justify-between">
        <div className="flex flex-col max-lg:flex-1 gap-3">
          <h1 className="uppercase lg:text-[1vw] text-[2.3vw]  text-slate-500 ">
            Connect With Us
          </h1>
          <div className="flex flex-col text-[0.8vw]">
            {socials.map((social, i) => (
              <span
                className="hover:text-slate-500 cursor-pointer lg:text-[1vw] text-[2vw]  transition-all ease-linear duration-100"
                key={i}
              >
                {social}
              </span>
            ))}
          </div>
        </div>
        <svg
          width="216"
          height="215"
          viewBox="0 0 216 215"
          fill="none"
          className="max-lg:hidden"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: "visible" }}
        >
          <path
            className="cls-1  "
            d="M51.7757 0C38.0521 0 24.8906 5.43423 15.1866 15.1072C5.48261 24.7802 0.0309982 37.8997 0.0309982 51.5794C0.0309982 65.2591 5.48261 78.3785 15.1866 88.0515C24.8906 97.7245 38.0521 103.159 51.7757 103.159C65.4992 103.159 78.6607 97.7245 88.3647 88.0515C98.0687 78.3785 103.52 65.2591 103.52 51.5794C103.52 37.8997 98.0687 24.7802 88.3647 15.1072C78.6607 5.43423 65.4992 0 51.7757 0Z"
            fill="black"
            data-svg-origin="51.775497406721115 51.579498291015625"
            style={{ transformOrigin: "0px 0px; opacity: 0" }}
            transform="matrix(1,0,0,1,0,0)"
          ></path>
          <path
            d="M163.911 0C150.187 0 137.026 5.43423 127.322 15.1072C117.618 24.7802 112.166 37.8997 112.166 51.5794C112.166 65.2591 117.618 78.3785 127.322 88.0515C137.026 97.7245 150.187 103.159 163.911 103.159C177.634 103.159 190.796 97.7245 200.5 88.0515C210.204 78.3785 215.655 65.2591 215.655 51.5794C215.655 37.8997 210.204 24.7802 200.5 15.1072C190.796 5.43423 177.634 0 163.911 0Z"
            fill="black"
            className="cls-1"
            data-svg-origin="163.9104995727539 51.579498291015625"
            style={{ transformOrigin: "0px 0px; opacity: 0" }}
            transform="matrix(1,0,0,1,0,0)"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            className="cls-1"
            d="M0 129.002L17.3035 111.753L51.795 146.135L86.2649 111.775L103.568 129.023L69.0982 163.383L103.562 197.737L86.2586 214.985L51.7947 180.631L17.3099 215.006L0.00634766 197.758L34.4914 163.383L0 129.002Z"
            fill="black"
            data-svg-origin="51.784000396728516 163.37949752807617"
            style={{ transformOrigin: "0px 0px; opacity: 0" }}
            transform="matrix(1,0,0,1,0,0)"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            className="cls-1"
            d="M112.128 128.988L129.431 111.739L163.923 146.121L198.393 111.761L215.696 129.009L181.226 163.369L215.69 197.722L198.386 214.971L163.923 180.617L129.438 214.992L112.134 197.744L146.619 163.369L112.128 128.988Z"
            fill="black"
            data-svg-origin="163.9119987487793 163.3655014038086"
            style={{ transformOrigin: "0px 0px; opacity: 0" }}
            transform="matrix(1,0,0,1,0,0)"
          ></path>
        </svg>
        <div className="flex lg:text-[1vw] flex-col max-lg:flex-1 items-start gap-3">
          <h3 className="uppercase text-[2.3vw] lg:text-[1vw]   text-slate-500">
            The Nitty Gritties
          </h3>
          <div className="flex flex-col   leading-tight">
            {nittyGritties.map((item, i) => (
              <span
                className="hover:text-slate-500 cursor-pointer lg:text-[1vw] text-[2vw] transition-all ease-linear duration-100"
                key={i}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
