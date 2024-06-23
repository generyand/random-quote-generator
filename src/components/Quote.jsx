import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import AnimatedQuote from "./AnimatedQuote";
import GetQuoteButton from "./GetQuoteButton";

function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuote = useCallback(() => {
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

  console.log(quote);

  return (
    <>
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
      <GetQuoteButton getQuote={getQuote} />
    </>
  );
}

export default Quote;
