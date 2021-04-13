import React from "react";
import { inject, observer } from "mobx-react";
import CounterStore from "../store/CounterStore";
import styled from "styled-components";

const CounterWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const StyledButton = styled.button`
  background-color: #8888dd;
  width: 100px;
  height: 35px;
  border-radius: 5px;
  border: none;
  outline: none;
`;

const StyledText = styled.div`
  display: inline-block;
  font-family: Roboto-Bold;
  font-size: 34px;
  color: #37474f;
  padding: 20px;
`;

const Counter: React.FC = inject("store")(
  observer(() => {
    return (
      <CounterWrapper>
        <StyledButton onClick={() => CounterStore.increment()}>
          Increment
        </StyledButton>

        <StyledText>{CounterStore.count}</StyledText>

        <StyledButton onClick={() => CounterStore.decrement()}>
          Decrement
        </StyledButton>
      </CounterWrapper>
    );
  })
);

export default Counter;
