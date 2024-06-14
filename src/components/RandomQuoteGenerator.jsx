import axios from "axios";
import React, { useMemo } from "react";
import { useState, useEffect } from "react";
import regexSplitString from "../utils/regexSplitString";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedQuote from "./AnimatedQuote";

export default function RandomQuoteGenerator() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuote = () => {
    axios
      .get("https://api.quotable.io/quotes/random?tags=famous-quotes")
      .then((response) => {
        setQuote(response.data[0].content);
        setAuthor(response.data[0].author);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useMemo(() => {
    getQuote();
  }, []);


  return (
    <div className="text-white mt-[15vh] max-w-2xl flex flex-col items-center mx-4">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl font-bold text-center text-transparent lg:text-4xl bg-gradient-to-r to-pink-600 from-orange-800 bg-clip-text "
      >
        Random Famous Quotes
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 text-center text-transparent bg-gradient-to-r to-pink-600 from-orange-800 bg-clip-text "
      >
        Discover random wisdom from various authors and genres. Enjoy a new
        perspective with each quote!
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="card | mb-12 p-8 shadow-xl rounded-md min-w-full"
      >
        <div className="text">
          {/* Quote */}
          <p className="mb-4 text-xl">
            {quote ? <AnimatedQuote quote={quote} /> : "..."}
          </p>

          {/* Author */}
          <p className="text-xl text-end">— {author ? author : "Author"}</p>
        </div>
      </motion.div>

      <button
        className="px-4 py-2 bg-orange-400 rounded-md active:bg-orange-300 hover:bg-orange-500"
        onClick={getQuote}
      >
        Get Quote
      </button>
    </div>
  );
}
