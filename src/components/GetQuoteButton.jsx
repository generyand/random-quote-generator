import React from "react";

function GetQuoteButton({ getQuote }) {
  console.log("GetQuoteButton Rendered!");

  return (
    <button
      className="px-4 py-2 bg-orange-400 rounded-md active:bg-orange-300 hover:bg-orange-500"
      onClick={getQuote}
    >
      Get Quote
    </button>
  );
}

export default GetQuoteButton;
