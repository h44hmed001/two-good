import Card from "@/components/Card";
import React from "react";

const OurImpact = () => {
  return (
    <div className="flex w-full  max-lg:flex-col-reverse justify-between">
      <div
        id="card"
        className="lg:w-[32%] w-full opacity-0 overflow-hidden   h-full"
      >
        <div className="flex flex-col max-w-lg lg:max-w-sm gap-8">
          <h3 className="font-[futura-bold] text-[4.5vw] lg:text-[1.5vw] ">
            OUR IMPACT.
          </h3>
          <p>The thing is, we don't save anyone.</p>
          <p>
            What we do is provide a safe space for women to change the course of
            their own lives.
          </p>
          <p>
            After many years of living in crisis, abuse and complex trauma,
            restoring self-worth is foundational for independence. We believe
            that through experiences that promote love and respect, we can spark
            and nurture a sense of self-worth for those on the path of healing.
          </p>
        </div>
      </div>
      <div className="flex lg:w-[68%] gap-8">
        <div id="card" className="w-[90%]  overflow-hidden   h-full">
          <img
            src="https://cdn.sanity.io/images/w8f1ak3c/production/943f8f43b76b4e030f41deddca1edd44170fee39-5504x8256.jpg/Christina-Maria-Jes-Lindsay-9143.jpg?fp-x=0.5&fp-y=0.5&w=640&h=947&fit=crop&crop=focalpoint&auto=format"
            className="w-full object-cover scale-110 h-full"
          />
        </div>
        <div id="card" className="w-[90%]   overflow-hidden   h-full">
          <img
            src="https://cdn.sanity.io/images/w8f1ak3c/production/84da7b8b510e006ce0ca22769d93bb6c044945f6-5504x8256.jpg/Patricia-Work-Work-Good-Stories-Two-Good-Co.jpg?rect=0,56,5504,8144&w=640&h=947&fit=min&auto=format"
            className="w-full object-cover scale-110 h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default OurImpact;
