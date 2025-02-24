import React, { useEffect } from "react";
import { motion } from "framer-motion";

interface SplashScreenProps {
  onTimerComplete?: () => void;
}

const SplashScreen = ({ onTimerComplete = () => {} }: SplashScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onTimerComplete();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onTimerComplete]);

  return (
    <div className="fixed inset-0 bg-background">
      <motion.div
        className="h-full w-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Bem-vindo
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
