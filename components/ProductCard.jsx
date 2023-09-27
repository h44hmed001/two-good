"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

const ProductCard = ({
  imgURL,
  price,
  itemName,
  cursorColour,
  setCursorDetails,
  cursorDetails,
}) => {
  useEffect(() => {
    // Check if cursorDetails.colour is set and use it as the background color
    if (cursorDetails.colour) {
      cursor.current.style.backgroundColor = cursorDetails.colour;
    }
  }, [cursorDetails]);
  const cursorVars = {
    initial: {
      scale: 0,
      x: "-50%",
      y: "-50%",
    },
    open: {
      scale: 1,
      x: "-50%",
      y: "-50%",

      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      scale: 0,
      x: "-50%",
      y: "-50%",

      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };
  const cursor = useRef(null);
  useEffect(() => {
    const moveX = gsap.quickTo(cursor.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveY = gsap.quickTo(cursor.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      moveX(clientX);
      moveY(clientY);
    });
  }, []);
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.to("#productCard", {
      scrollTrigger: {
        start: "top center+=100",
        trigger: "#productCard",
      },
      stagger: 0.3,
      delay: 0.05,
      y: -100,
      opacity: 1,
    });
  }, []);
  return (
    <div
      onMouseEnter={() =>
        setCursorDetails({ active: true, colour: cursorColour })
      }
      onMouseLeave={() => setCursorDetails({ ...cursorColour, active: false })}
      className="flex-1 "
    >
      <div
        ref={cardRef}
        id="productCard"
        className="flex flex-col opacity-0 uppercase font-[helvetica-now] max-lg:text-[2.2vw] w-full items-center"
      >
        <img className="w-[80%]" src={imgURL} />
        <h4>{itemName}</h4>
        <span>{price}</span>
      </div>
      <motion.div
        variants={cursorVars}
        animate={cursorDetails.active ? "open" : "exit"}
        ref={cursor}
        id="customCursor"
        className={`rounded-full transition-colors ease-linear  mix-blend-multiply  pointer-events-none  h-[150px] fixed  top-0 left-0   w-[150px]`}
      ></motion.div>
    </div>
  );
};

export default ProductCard;
