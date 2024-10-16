"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Example = () => {
  return (
    <div className="flex flex-col justify-center bg-neutral-950 px-8 py-24 text-white">
      <BlockInTextCard
        className="font-mont"
        tag="/ Suporte"
        text={
          < >
            <strong className="font-mont">Dúvidas?</strong> Será um prazer atender suas demandas. Envie uma mensagem e vamos conversar!
          </>
        }
        examples={[
          "Quanto custa uma landing page?",
          "Quanto custa um site?",
          "Em quanto tempo você consegue fazer uma aplicação?",
          "Você faz lojas virtuais?",
        ]}
      />
    </div>
  );
};

const BlockInTextCard = ({ tag, text, examples }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-2">
      <div className="flex flex-col">
        <p className="mb-1.5 text-sm font-mont text-white text-center uppercase">{tag}</p>
        <hr className="border-white" />
      </div>
      <p className="max-w-lg text-xl font-mont text-center leading-relaxed">{text}</p>
      <div className="flex flex-col items-center justify-center">
        <Typewrite examples={examples} />
        <hr className="border-neutral-950" />
      </div>
      <div className="flex flex-row gap-3 items-center justify-center">
          <Image src="/logo.jpeg" alt="Logo" className="rounded-full grayscale hover:grayscale-0" width={70} height={70} />
          <button className="px-4 rounded-full py-2 text-sm font-mont transition-colors bg-white text-neutral-900 hover:bg-white hover:text-neutral-950">
            Entre em contato
          </button>
      </div>

      <div class="bg-neutral-950 pt-20 w-full h-auto flex items-center justify-center gap-4 flex-wrap">
      <button class="w-10 h-10 flex items-center relative overflow-hidden justify-center rounded-full bg-white group transition-all duration-300">
      <svg class="fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 71 72" fill="none">
      <path
        d="M12.5762 56.8405L15.8608 44.6381C13.2118 39.8847 12.3702 34.3378 13.4904 29.0154C14.6106 23.693 17.6176 18.952 21.9594 15.6624C26.3012 12.3729 31.6867 10.7554 37.1276 11.1068C42.5685 11.4582 47.6999 13.755 51.5802 17.5756C55.4604 21.3962 57.8292 26.4844 58.2519 31.9065C58.6746 37.3286 57.1228 42.7208 53.8813 47.0938C50.6399 51.4668 45.9261 54.5271 40.605 55.7133C35.284 56.8994 29.7125 56.1318 24.9131 53.5513L12.5762 56.8405ZM25.508 48.985L26.2709 49.4365C29.7473 51.4918 33.8076 52.3423 37.8191 51.8555C41.8306 51.3687 45.5681 49.5719 48.4489 46.7452C51.3298 43.9185 53.1923 40.2206 53.7463 36.2279C54.3002 32.2351 53.5143 28.1717 51.5113 24.6709C49.5082 21.1701 46.4003 18.4285 42.6721 16.8734C38.9438 15.3184 34.8045 15.0372 30.8993 16.0736C26.994 17.11 23.5422 19.4059 21.0817 22.6035C18.6212 25.801 17.2903 29.7206 17.2963 33.7514C17.293 37.0937 18.2197 40.3712 19.9732 43.2192L20.4516 44.0061L18.6153 50.8167L25.508 48.985Z"
        fill="" />
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M44.0259 36.8847C43.5787 36.5249 43.0549 36.2716 42.4947 36.1442C41.9344 36.0168 41.3524 36.0186 40.793 36.1495C39.9524 36.4977 39.4093 37.8134 38.8661 38.4713C38.7516 38.629 38.5833 38.7396 38.3928 38.7823C38.2024 38.8251 38.0028 38.797 37.8316 38.7034C34.7543 37.5012 32.1748 35.2965 30.5122 32.4475C30.3704 32.2697 30.3033 32.044 30.325 31.8178C30.3467 31.5916 30.4555 31.3827 30.6286 31.235C31.2344 30.6368 31.6791 29.8959 31.9218 29.0809C31.9756 28.1818 31.7691 27.2863 31.3269 26.5011C30.985 25.4002 30.3344 24.42 29.4518 23.6762C28.9966 23.472 28.4919 23.4036 27.9985 23.4791C27.5052 23.5546 27.0443 23.7709 26.6715 24.1019C26.0242 24.6589 25.5104 25.3537 25.168 26.135C24.8256 26.9163 24.6632 27.7643 24.6929 28.6165C24.6949 29.0951 24.7557 29.5716 24.8739 30.0354C25.1742 31.1497 25.636 32.2144 26.2447 33.1956C26.6839 33.9473 27.163 34.6749 27.6801 35.3755C29.3607 37.6767 31.4732 39.6305 33.9003 41.1284C35.1183 41.8897 36.42 42.5086 37.7799 42.973C39.1924 43.6117 40.752 43.8568 42.2931 43.6824C43.1711 43.5499 44.003 43.2041 44.7156 42.6755C45.4281 42.1469 45.9995 41.4518 46.3795 40.6512C46.6028 40.1675 46.6705 39.6269 46.5735 39.1033C46.3407 38.0327 44.9053 37.4007 44.0259 36.8847Z"
        fill="" />
      </svg>
      <div class="absolute top-full left-0 w-full h-full rounded-full bg-green-400 z-0 transition-all duration-500 group-hover:top-0"></div>
      </button>

      <button class="w-10 h-10 flex items-center relative overflow-hidden justify-center rounded-full bg-white group transition-all duration-300">
      <svg class="fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-white"  xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72" fill="none">
      <path d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z" 
      fill=""/>
      </svg>
      <div class="absolute top-full left-0 w-full h-full rounded-full bg-[#006699] z-0 transition-all duration-500 group-hover:top-0"></div>
      </button>

      <button class="w-10 h-10 flex relative overflow-hidden items-center justify-center rounded-full bg-white group transition-all duration-500">
      <svg class="fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-white" 
      xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 54 41" fill="none">
      <path class=""
        d="M4.00654 40.1236H12.4893V19.5227L0.371094 10.4341V36.4881C0.371094 38.4997 2.00099 40.1236 4.00654 40.1236Z"
        fill="" />
      <path class=""
        d="M41.5732 40.1236H50.056C52.0676 40.1236 53.6914 38.4937 53.6914 36.4881V10.4341L41.5732 19.5227"
        fill="" />
      <path class=""
        d="M41.5732 3.7693V19.5229L53.6914 10.4343V5.58702C53.6914 1.09118 48.5594 -1.47181 44.9663 1.22448"
        fill="" />
      <path  class=""
       d="M12.4893 19.5227V3.76904L27.0311 14.6754L41.5729 3.76904V19.5227L27.0311 30.429"
        fill="" />
      <path class=""
        d="M0.371094 5.58702V10.4343L12.4893 19.5229V3.7693L9.09617 1.22448C5.49708 -1.47181 0.371094 1.09118 0.371094 5.58702Z"
        fill="" />
      </svg>
      <div class="absolute top-full left-0 w-full h-full rounded-full bg-red-500 z-0 transition-all duration-500 group-hover:top-0"></div>
      </button>
      
      <button class="w-10 h-10 flex items-center relative overflow-hidden justify-center rounded-full bg-white group transition-all duration-300">
      <svg class="fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-white" 
      xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 72 72" fill="none">
      <path
        d="M61.1026 23.7185C60.5048 21.471 58.7363 19.6981 56.4863 19.0904C52.4181 18 36.0951 18 36.0951 18C36.0951 18 19.7805 18 15.7039 19.0904C13.4622 19.6897 11.6937 21.4627 11.0876 23.7185C10 27.7971 10 36.3124 10 36.3124C10 36.3124 10 44.8276 11.0876 48.9063C11.6854 51.1537 13.4539 52.9267 15.7039 53.5343C19.7805 54.6247 36.0951 54.6247 36.0951 54.6247C36.0951 54.6247 52.4181 54.6247 56.4863 53.5343C58.728 52.935 60.4965 51.162 61.1026 48.9063C62.1902 44.8276 62.1902 36.3124 62.1902 36.3124C62.1902 36.3124 62.1902 27.7971 61.1026 23.7185Z"
        fill="" />
      <path class="fill-white transition-all duration-300 group-hover:fill-[#FF3000]"
       d="M30.8811 44.1617L44.4392 36.3124L30.8811 28.463V44.1617Z" fill="white" />
      </svg>
      <div class="absolute top-full left-0 w-full h-full rounded-full bg-[#FF3000] z-0 transition-all duration-500 group-hover:top-0"></div>
      </button>
      </div>
    </div>
  );
};

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;

const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 5500;

const Typewrite = ({ examples }) => {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex((pv) => (pv + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className="mb-2.5 text-sm text-center font-light uppercase">
      <span className="inline-block size-2 bg-white" />
      <span className="ml-3 font-mont">
        Exemplo:{" "}
        {examples[exampleIndex].split("").map((l, i) => (
          <motion.span
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: "easeInOut",
            }}
            key={`${exampleIndex}-${i}`}
            className="relative font-mont"
          >
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: i * LETTER_DELAY,
                duration: 0,
              }}
            >
              {l}
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-white"
            />
          </motion.span>
        ))}
      </span>
    </p>
  );
};