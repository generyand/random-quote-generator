import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    getQuote();
  }, []);
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
          <p className="mb-4 text-xl">
            {quote
              ? `"${quote}"`
              : "..."}
          </p>
<<<<<<< HEAD
          <p className="text-xl  text-end">— {author ? author : "Anonymous"}</p>
=======
          <p className=" text-end text-xl">— {author ? author : "..."}</p>
>>>>>>> 5ef764019e773ce90bffa97bdb8890e419bca081
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
