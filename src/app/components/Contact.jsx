"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Example = () => {
  return (
    <div className="flex items-center justify-center bg-neutral-950 px-8 py-24 text-white">
      <BlockInTextCard
        className="font-mont"
        tag="/ Support"
        text={
          < >
            <strong className="font-mont">Have questions?</strong> Wed love to help! Contact support
            for any issue you may face.
          </>
        }
        examples={[
          "Does your product work for SMBs?",
          "Can I pause my membership without losing my data?",
          "How does seat based pricing work?",
          "What's the meaning of life?",
        ]}
      />
    </div>
  );
};

const BlockInTextCard = ({ tag, text, examples }) => {
  return (
    <div className="w-full max-w-xl space-y-6">
      <div>
        <p className="mb-1.5 text-sm font-mont font-light uppercase">{tag}</p>
        <hr className="border-white" />
      </div>
      <p className="max-w-lg text-xl font-mont leading-relaxed">{text}</p>
      <div>
        <Typewrite examples={examples} />
        <hr className="border-neutral-950" />
      </div>
      <button className="px-4 rounded-full py-2 text-sm font-mont transition-colors bg-white text-neutral-900 hover:bg-white hover:text-neutral-950">
        Contact Support
      </button>
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
    <p className="mb-2.5 text-sm font-light uppercase">
      <span className="inline-block size-2 bg-white" />
      <span className="ml-3 font-mont">
        EXAMPLE:{" "}
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