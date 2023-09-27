"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import SplitType from "split-type";
const Hero = () => {
  const [customCursor, setCustomCursor] = useState(false);
  const container = useRef(null);
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    container.current.style.opacity = 1;
    let containerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });

    let containerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      containerX(clientX);
      containerY(clientY);
    });

    // return () => window.removeEventListener("mousemove", mousePositionSetter);
  }, []);
  const customCursorVars = {
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
    closed: {
      scale: 0,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
      x: "-50%",
      y: "-50%",
    },
  };
  useEffect(() => {
    setCustomCursor(false);
    const text = new SplitType("#heroText");
    const tl = gsap.timeline();
    tl.from(".word", {
      translateY: "200%",
      stagger: 0.2,
      opacity: 0,
    });
    tl.to(".video-container", {
      scale: 1,
      opacity: 1,
    });
  }, []);

  return (
    <div>
      <h1
        id="heroText"
        className="uppercase text-[15vw] md:text-[15.5vw]  xl:text-[16vw] tracking-tighter leading-[0.9] font-[futura-bold] "
      >
        Change the course
      </h1>
      <video
        onMouseEnter={() => setCustomCursor(true)}
        onMouseLeave={() => setCustomCursor(false)}
        className="mt-[1vh] opacity-0 scale-95 video-container relative  cursor-pointer"
        autoPlay
        loop
        muted
        src="/video.mp4"
      ></video>

      <motion.div
        ref={container}
        animate={customCursor ? "open" : "closed"}
        variants={customCursorVars}
        initial="inital"
        className={`font-[futura-bold] opacity-0 flex bottom-0 left-0 right-0 fixed  pointer-events-none bg-black w-[75px] h-[75px] md:h-[150px] md:w-[150px] text-center  items-center justify-center lg:text-[1vw] text-[2vw] rounded-full text-white  top-0 z-50`}
      >
        PLAY
      </motion.div>
    </div>
  );
};

export default Hero;
