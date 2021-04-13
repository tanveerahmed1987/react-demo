import React, { useState, useEffect } from "react";
import { TimeWrapper } from "./styles";

export const Timer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState({ time: new Date() });

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentTime({ time: new Date() }),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <TimeWrapper>{currentTime.time.toLocaleTimeString()}</TimeWrapper>;
};
