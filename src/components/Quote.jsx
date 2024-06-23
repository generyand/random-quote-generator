import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedQuote from "./AnimatedQuote";
import GetQuoteButton from "./GetQuoteButton";

function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  let authDisplayDelay = 0;
  let prevCharDelay = 0;

  for (let i = 0; i <= quote.length + 5; i++) {
    authDisplayDelay += i * 0.02 - prevCharDelay;
    prevCharDelay = authDisplayDelay;
  }

  const getQuote = useCallback(() => {
    setQuote("");
    setAuthor("");

    axios
      .get("https://api.quotable.io/quotes/random?tags=famous-quotes")
      .then((response) => {
        setQuote(response.data[0].content);
        setAuthor(response.data[0].author);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [quote, author]);

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="flex flex-col w-full text-white min-h-[360px]  justify-between sm:min-h-[300px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="card | mb-12 p-8 shadow-xl rounded-md min-w-full"
      >
        <div className="text">
          {/* Quote */}
          <p className="mb-4 text-xl">
            <AnimatePresence>
              {quote && <AnimatedQuote quote={quote} />}
            </AnimatePresence>
          </p>

          {/* Author */}
          <AnimatePresence>
            {author && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: authDisplayDelay }}
                className="text-xl text-end"
              >
                — {author}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      <GetQuoteButton getQuote={getQuote} />
    </div>
  );
}

export default Quote;
