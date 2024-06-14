import React from "react";
import { useEffect, useState, useMemo } from "react";
import Button from "./Button";
import QuoteCard from "./QuoteCard";
import axios from "axios";

export default function GetQuoteComponent() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = useMemo(() => {
    const getQuote = async () => {
      try {
        const response = await axios.get(
          "https://api.quotable.io/quotes/random?tags=famous-quotes"
        );
        setQuote(response.data[0].content);
        setAuthor(response.data[0].author);
      } catch (error) {
        return console.log(error);
      }
    };

    return getQuote;
  }, [quote])

  return (
    <>
      <QuoteCard quote={quote} author={author} />
      <Button fetchQuote={fetchQuote} />
    </>
  );
}
