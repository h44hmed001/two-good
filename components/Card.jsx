import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Card = ({ imgURL }) => {
  const cardRef = useRef(null);
  useEffect(() => {
    gsap.to("#card", {
      stagger: 0.3,
      opacity: 1,
      scrollTrigger: {
        trigger: "#card",
        start: "top center ",
      },
    });
  }, []);
  return (
    <div
      ref={cardRef}
      id="card"
      className="lg:w-[32%] bg-red-200 w-full opacity-0 overflow-hidden   h-full"
    >
      <img src={imgURL} className="w-full object-cover scale-110 h-full" />
    </div>
  );
};

export default Card;
