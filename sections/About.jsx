import React from "react";

const About = () => {
  return (
    <div className="flex max-lg:flex-col gap-6 mt-12 w-full mx-auto ">
      <div className="flex-1 font-[futura-bold] ">
        <h1 className="text-[3.5vw] max-lg:text-center leading-none ">
          WE BELIEVE IN PEOPLE, UNTIL THEY BELIEVE IN THEMSELVES AGAIN.
        </h1>
      </div>
      <div className="flex-1 flex  justify-center ">
        <div className="flex max-md:text-[3.4vw] text-[2vw] max-lg:text-center  lg:text-[1.05vw] gap-8  flex-col font-[helvetica-now] leading-tight lg:max-w-md">
          <p>
            Everything we do is designed to rebuild self worth and independence,
            in order to break free from the cycle of disadvantage.
          </p>
          <p>
            With every purchase you make with us, you're helping to change the
            course of someone's life; you're walking alongside vulnerable women
            as they find their way home again.
          </p>
          <span className="font-[abc-mono] text-[2.5vw] lg:text-[0.8vw]">
            SHOP TO SUPPORT
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
