import React from "react";
import { motion } from "framer-motion";
function Header() {

  return (
    <div >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl font-bold text-center text-transparent lg:text-4xl bg-gradient-to-r to-pink-600 from-orange-800 bg-clip-text "
      >
        Random Famous Quotes
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 text-center text-transparent bg-gradient-to-r to-pink-600 from-orange-800 bg-clip-text "
      >
        Discover random wisdom from various authors and genres. Enjoy a new
        perspective with each quote!
      </motion.p>
    </div>
  );
}

export default Header;
