"use client"
import { ContainerScroll } from "./components/ContainerScrollMain";
import Bg from '../assets/bg.png';
import Image from 'next/image';
import { Spotlight } from "./components/Spotlight";
import { Example } from "./components/Contact";
import { SlideTabsExample } from "./components/Header";
import { SmoothScrollHero } from "./components/SmoothScrollHero";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HoverEffect } from './components/HoverEffect'

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  const transitionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={transitionVariants}
    >
      <SlideTabsExample />
      <Spotlight />
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={  
            <>
              <h1 className="text-4xl font-mont">
                Unleash the power of <br />
                <span className="text-4xl font-mont md:text-[6rem] font-bold mt-1 leading-none">
                  Front-end Development
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={Bg}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
        <div className="flex flex-col justify-center items-center gap-4">
          <span className="block w-[15px] h-[15px] bg-neutral-600 rounded-[10px]"></span>
          <span className="block w-[15px] h-[15px] bg-neutral-600 rounded-[10px]"></span>
          <span className="block w-[15px] h-[15px] bg-neutral-600 rounded-[10px]"></span>
        </div>
        <HoverEffect />
        <SmoothScrollHero />
      </div>
      <Example />
    </motion.div>
  );
}
