import React from "react";
import { motion } from "framer-motion";

const TransitionScreen = () => {
  return (
    <div className="fixed inset-0 bg-yellow-400">
      <motion.div
        className="h-full w-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-foreground"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Em breve
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default TransitionScreen;
