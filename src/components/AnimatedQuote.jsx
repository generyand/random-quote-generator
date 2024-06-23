import regexSplitString from "../utils/regexSplitString";
import { motion } from "framer-motion";

export default function AnimatedQuote({ quote }) {
  let quoteChars = [];

  quoteChars = regexSplitString(quote);
  quoteChars.unshift('"');
  quoteChars.push('"');

  console.log("AnimatedQuote Rendered!");

  return (
    <>
      {quoteChars.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: index * 0.02 }}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
}
