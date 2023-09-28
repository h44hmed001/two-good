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
          category="HOME"
          productImage1="https://cdn.sanity.io/images/w8f1ak3c/production/f43af4d1c96e6232fcc4743fc383f08aac0d3658-2900x2900.png/Tea-Towel-Two-Good-Co.png?w=320&h=320&auto=format"
          productImage2="https://cdn.sanity.io/images/w8f1ak3c/production/cb56cd5aa6722fc293f654013276b73581c4e25e-1408x1407.png/Two%20Kisses%20Candle%20Two%20Good%20Co.png?rect=1,0,1407,1407&w=320&h=320&auto=format"
          bgColour={"bg-[#c1aaa3]"}
          imgURL={
            "https://cdn.sanity.io/images/w8f1ak3c/production/ee1c2e8894a4c47c4f4ce71b8973589f8a5045b2-902x1500.png/Rectangle%203.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format"
          }
        />
        <Card
          bgColour={"bg-[#f2dccb]"}
          category="PANTRY"
          productImage1="https://cdn.sanity.io/images/w8f1ak3c/production/c9ad30643e765931dfad0ddcefcfdaf88abc8789-1408x1407.png/Two%20Good%20Granola%20Two%20Good%20Co.png?rect=1,0,1407,1407&w=320&h=320&auto=format"
          productImage2="https://cdn.sanity.io/images/w8f1ak3c/production/8c6345e689f2b4db8ef6103a2741513a306bec35-2545x2431.png/Spicy-Tomato-Jam-Two-Good-Co.png?rect=2,0,2542,2431&w=320&h=306&auto=format"
          imgURL="https://cdn.sanity.io/images/w8f1ak3c/production/bb84b7106e978c37f5aa92c8d5781751b2e9d9f2-900x1500.png/Rectangle%202.png?w=640&h=1067&auto=format"
        />
        <Card
          bgColour={"bg-white"}
          category={"BATH"}
          productImage1="https://cdn.sanity.io/images/w8f1ak3c/production/63474079ab0c7723b75bd63b24d8bbc652349640-1408x1408.png/Cleanse%20&%20Nourish%20Hand%20Wash%20Two%20Good%20Co.png?w=320&h=320&auto=format"
          productImage2="https://cdn.sanity.io/images/w8f1ak3c/production/99866b12faf44f7490e6037dc197947334ce0a72-1408x1408.png/Nourish%20&%20Soothe%20Hand%20Lotion%20Two%20Good%20Co.png?w=320&h=320&auto=format"
          imgURL="https://cdn.sanity.io/images/w8f1ak3c/production/d3151106849ff2494d66916cf554c68a0603444d-902x1500.png/Rectangle%20220.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format"
        />
      </div>
    </div>
  );
};

export default Cards;
