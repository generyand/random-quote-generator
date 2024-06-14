import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import regexSplitString from "./utils/regexSplitString";
import { AnimatePresence, motion } from "framer-motion";

export default function RandomQuoteGenerator() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const quoteChars = regexSplitString(quote);
  const authorChars = regexSplitString(author);

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

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

  // useEffect(() => {
  //   getQuote();
  // }, []);
  console.log(quoteChars);
  return (
    <div className="text-white mt-[15vh] max-w-2xl flex flex-col items-center mx-4">
      <h1 className="text-2xl font-bold text-center text-transparent lg:text-4xl bg-gradient-to-r to-pink-600 from-orange-800 bg-clip-text ">
        Random Famous Quotes
      </h1>
      <p className="mb-8 text-center text-transparent bg-gradient-to-r to-pink-600 from-orange-800 bg-clip-text ">
        Discover random wisdom from various authors and genres. Enjoy a new
        perspective with each quote!
      </p>

      <div className="card | mb-12 p-8 shadow-xl rounded-md min-w-full">
        <div className="text">
          {/* Quote */}
          <AnimatePresence>
            <p className="mb-4 text-xl">
              {quoteChars.map((char, index) => (
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.1, delay: index * 0.02 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  key={index}
                >
                  {char}
                </motion.span>
              ))}
            </p>
          </AnimatePresence>
          <p className="text-xl text-end">— {author ? author : "..."}</p>
        </div>
      </div>

      <button
        className="px-4 py-2 bg-orange-400 rounded-md active:bg-orange-300 hover:bg-orange-500"
        onClick={getQuote}
      >
        Get Quote
      </button>
    </div>
  );
}
