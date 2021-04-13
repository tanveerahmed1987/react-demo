import React, { useContext } from "react";
import CounterStore from "../store/CounterStore";
import styled from "styled-components";
import { counterStoreContext } from "../store/CounterStore";

const CounterWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const StyledText = styled.div`
  display: inline-block;
  font-family: Roboto-Bold;
  font-size: 34px;
  color: #37474f;
  padding: 20px;
`;

const Counter: React.FC = () => {
  const { count } = useContext(counterStoreContext);

  return (
    <CounterWrapper>
      <button
        className="button button1"
        onClick={() => CounterStore.increment()}
      >
        Increment
      </button>

      <StyledText>{count}</StyledText>

      <button
        className="button button3"
        onClick={() => CounterStore.decrement()}
      >
        Decrement
      </button>
    </CounterWrapper>
  );
};

export default Counter;
