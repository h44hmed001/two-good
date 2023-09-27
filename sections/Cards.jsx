"use client";
import Card from "@/components/Card";
import gsap from "gsap";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import { About } from ".";
gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  return (
    <div className="min-h-screen ">
      <div className="flex font-[helvetica-now] text-[1.5vw] lg:text-[0.7vw] items-center justify-between">
        <span>BUY GOOD</span>
        <span>DO GOOD</span>
      </div>
      <div className="w-full border-b  border-black " />
      <div className="justify-between max-lg:gap-3 mt-[1vh] flex lg:flex-row flex-col  w-full">
        <Card
          imgURL={
            "https://cdn.sanity.io/images/w8f1ak3c/production/ee1c2e8894a4c47c4f4ce71b8973589f8a5045b2-902x1500.png/Rectangle%203.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format"
          }
        />
        <Card imgURL="https://cdn.sanity.io/images/w8f1ak3c/production/bb84b7106e978c37f5aa92c8d5781751b2e9d9f2-900x1500.png/Rectangle%202.png?w=640&h=1067&auto=format" />
        <Card imgURL="https://cdn.sanity.io/images/w8f1ak3c/production/d3151106849ff2494d66916cf554c68a0603444d-902x1500.png/Rectangle%20220.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format" />
      </div>
    </div>
  );
};

export default Cards;
