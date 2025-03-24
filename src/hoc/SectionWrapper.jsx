import { motion } from "framer-motion";
import React from "react";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <div id={idName} className="relative w-full">
        {/* Add star background */}
        <div className="absolute inset-0 bg-stars-pattern pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16">
          <Component />
        </div>
      </div>
    );
  };

export default SectionWrapper;
