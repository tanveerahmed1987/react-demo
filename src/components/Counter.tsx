import React from "react";
import { observer } from "mobx-react";
import store from "../store/CounterStore";
import { CounterWrapper, StyledText } from "./styles";

const Counter: React.FC = () => {
  return (
    <CounterWrapper>
      <button className="button button1" onClick={() => store.increment()}>
        Increment
      </button>

      <StyledText>{store.count}</StyledText>

      <button className="button button3" onClick={() => store.decrement()}>
        Decrement
      </button>
    </CounterWrapper>
  );
};

export default observer(Counter);
