import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
gsap.registerPlugin(ScrollTrigger);

const Card = ({ imgURL, bgColour, category, productImage1, productImage2 }) => {
  const cardRef = useRef(null);
  const [cardHover, setCardHover] = useState(false);
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
      className="lg:w-[32%] w-full  opacity-0 relative overflow-hidden   h-full"
    >
      <img src={imgURL} className="w-full object-cover  scale-110 h-full" />
      <div className="flex justify-center">
        <div
          onMouseEnter={() => setCardHover(true)}
          onMouseLeave={() => setCardHover(false)}
          data-scroll
          data-scroll-speed="-0.08"
          className={`xl:w-[60%] max-sm:w-[90%]  w-[50%] lg:w-[75%]  hover:max-md:h-[200px] hover:max-lg:h-[270px] hover:h-[250px] h-[50px] p-3 rounded-3xl expandable z-[999] absolute top-[50%] ${bgColour} `}
        >
          <div className="flex  items-center font-[helvetica-now] justify-between">
            <div className="h-[10px] w-[10px] rounded-full bg-black" />
            <span>SHOP</span>
            <p className="font-semibold">{category}</p>

            <KeyboardArrowRightOutlinedIcon />
          </div>
          {/* Bottom Items */}

          <div
            className={`uppercase leading-tight text-[1.6vw] lg:text-[0.8vw] font-[helvetica-now] ${
              cardHover
                ? "flex delay-300 items-center justify-center"
                : "hidden"
            } `}
          >
            <div className="flex flex-col items-center">
              <img src={productImage1} />
              <span className="leading-tight text-center">
                Two Good X Emily Imeson Tea Towel
              </span>
            </div>
            <div className="flex flex-col text-center items-center">
              <img src={productImage2} />
              <span>Two Kisses Candle</span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
