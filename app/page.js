"use client";
import { About, Cards, Hero, OurImpact, Products } from "@/sections";
import Footer from "@/sections/Footer";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main
      id="main"
      className="lg:px-8 px-5 flex flex-col gap-5 md:gap-8 min-h-screen w-full "
    >
      <section className="  mt-[23vh]">
        <Hero />
      </section>
      <section className="w-full mt-[1vh] h-full">
        <Cards />
      </section>
      <About />
      <section className="w-full mt-[10vh] h-full">
        <Products />
      </section>
      <section className="w-full mt-[3vh] lg:mt-[10vh] h-full">
        <OurImpact />
      </section>
      <section className="w-full mt-[3vh] lg:mt-[10vh] h-full">
        <Footer />
      </section>
    </main>
  );
}
