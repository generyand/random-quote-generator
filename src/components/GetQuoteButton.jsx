import React from "react";

function GetQuoteButton({ getQuote }) {
  console.log("GetQuoteButton Rendered!");

  return (
    <button
      className="px-4 py-2 font-semibold text-white transition rounded-md shadow-xl bg-gradient-to-l from-orange-500 to-pink-600 active:scale-105 "
      onClick={getQuote}
    >
      Get Quote
    </button>
  );
}

export default GetQuoteButton;
