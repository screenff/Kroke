import React, { useState } from "react";
import SplashScreen from "./SplashScreen";
import TransitionScreen from "./TransitionScreen";

const Home = () => {
  const [showTransition, setShowTransition] = useState(false);

  const handleTimerComplete = () => {
    setShowTransition(true);
  };

  return (
    <div className="min-h-screen">
      {!showTransition ? (
        <SplashScreen onTimerComplete={handleTimerComplete} />
      ) : (
        <TransitionScreen />
      )}
    </div>
  );
};

export default Home;
