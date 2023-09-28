"use client";
import React, { useEffect, useRef, useState } from "react";
import { featuredProducts } from "@/utilis/constants";
import ProductCard from "@/components/ProductCard";
import gsap from "gsap";
import { motion } from "framer-motion";

const Products = () => {
  const [cursorDetails, setCursorDetails] = useState({
    active: false,
    color: "bg-red-200",
  });

  const cardRef = useRef(null);
  return (
    <div className="w-full flex  ">
      <div className="grid grid-cols-2">
        {featuredProducts.map((product, i) => (
          <ProductCard
            cursorDetails={cursorDetails}
            key={i}
            setCursorDetails={setCursorDetails}
            {...product}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
