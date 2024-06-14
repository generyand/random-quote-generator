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
      <h1 className="text-2xl lg:text-4xl font-bold  text-center bg-gradient-to-r to-pink-600 from-orange-800 text-transparent bg-clip-text ">
        Random Famous Quotes
      </h1>
      <p className="mb-8 text-center bg-gradient-to-r to-pink-600 from-orange-800 text-transparent bg-clip-text ">
        Discover random wisdom from various authors and genres. Enjoy a new
        perspective with each quote!
      </p>

      <div className="card | mb-12 p-8 shadow-xl rounded-md min-w-full">
        <div className="text">
          <p className="text-xl text-balance mb-4">
            {quote
              ? `"${quote}"`
              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque mollitia asperiores optio possimus voluptatum rerum ipsa distinctio! Harum dicta voluptatibus deserunt adipisci numquam ex ipsum!"}
          </p>
          <p className=" text-end text-xl">— {author ? author : "Anonymous"}</p>
        </div>
      </div>

      <button
        className="rounded-md active:bg-orange-300 hover:bg-orange-500 bg-orange-400 px-4 py-2"
        onClick={getQuote}
      >
        Get Quote
      </button>
    </div>
  );
}
