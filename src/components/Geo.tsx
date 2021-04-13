import React from "react";
import styled from "styled-components";
import { Continent } from "./Country/Continent";
import { Countries } from "./Country/Countries";

const GeoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-gap: 2px; */
`;

const Geo: React.FC = () => {
  return (
    <GeoWrapper>
      <div>
        <Continent />
      </div>
      <div>
        <Countries />
      </div>
    </GeoWrapper>
  );
};

export default Geo;
