import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TimeWrapper = styled.div`
  font-family: Roboto-Bold;
  font-size: 84px;
  color: #37474f;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

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
