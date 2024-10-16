"use client"
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const SlideTabsExample = () => {
  return (
    <div className="bg-neutral-950 border-white border-4 py-6">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

    return (
        <div className="w-full block border-white border-4">
            <ul
                onMouseLeave={() => {
                    setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                    }));
                }}
                className="relative mx-auto flex w-fit rounded-full bg-neutral-800 p-1"
                >
                <Tab setPosition={setPosition}>Home</Tab>
                <Tab setPosition={setPosition}>Projects</Tab>
                <Tab setPosition={setPosition}>About</Tab>
                <Tab setPosition={setPosition}>Stack</Tab>
                <Tab setPosition={setPosition}>Contact</Tab>
                
                <Cursor position={position} />
            </ul>
        </div>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative font-mont z-10 block cursor-pointer px-3 py-1.5 text-xs text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-white md:h-12"
    />
  );
};
