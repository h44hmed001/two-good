import React from "react";

const Input = ({ placeholder }) => {
  return (
    <div className="w-full bg-none    ">
      <input
        placeholder={placeholder}
        className="w-full outline-none uppercase bg-transparent font-[futura-bold] text-[2.5vw] placeholder:text-black border-b border-slate-300 "
      />
    </div>
  );
};

export default Input;
