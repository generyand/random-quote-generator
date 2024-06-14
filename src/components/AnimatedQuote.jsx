import React from "react";
import regexSplitString from "../utils/regexSplitString";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatedQuote({ quote }) {
  const [quoteChars, setQuoteChars] = useState([]);

  useEffect(() => {
    setQuoteChars(regexSplitString(quote));
  }, [quote]);

  // quoteChars.push('"');
  // quoteChars.unshift('"');
  alert(quoteChars.join(""));

  return (
    <>
      <AnimatePresence>
        {quoteChars.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: index * 0.01 }}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    </>
  );
}
