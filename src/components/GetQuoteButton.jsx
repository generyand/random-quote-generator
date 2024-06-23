import React from "react";

function GetQuoteButton({ getQuote }) {
  console.log("GetQuoteButton Rendered!");

  return (
    <button
      className="px-4 py-2 font-semibold bg-orange-500 rounded-md shadow-xl active:bg-orange-300 hover:bg-orange-400"
      onClick={getQuote}
    >
      Get Quote
    </button>
  );
}

export default GetQuoteButton;
