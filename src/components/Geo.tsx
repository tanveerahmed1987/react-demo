import React from "react";
import { TwoColumn } from "./styles";
import { Continent } from "./Country/Continent";
import { Countries } from "./Country/Countries";

const Geo: React.FC = () => {
  return (
    <TwoColumn>
      <Continent />
      <Countries />
    </TwoColumn>
  );
};

export default Geo;
