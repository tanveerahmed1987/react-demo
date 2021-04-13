import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_COUNTRY } from "../../graphql/Query";
import { Country } from "./Country";
import { Page, GlassCard, StyledInput } from "./styles";

interface CountriesProps {}

export const Countries: React.FC<CountriesProps> = () => {
  const [citySearched, setCitySearched] = useState("");

  const [getCountry, { loading, error, data }] = useLazyQuery(GET_COUNTRY, {
    variables: { code: citySearched?.toUpperCase() },
  });

  if (data) {
    console.log(data);
  }

  return (
    <Page>
      <StyledInput
        type="text"
        placeholder="Enter country code..."
        onChange={(event) => {
          setCitySearched(event.target.value);
          getCountry();
        }}
      />

      {error && <GlassCard> Error found</GlassCard>}
      {loading && <GlassCard>Loading...</GlassCard>}
      {data && (
        <div>
          {data.country ? (
            <GlassCard>
              <Country country={data.country} />
            </GlassCard>
          ) : (
            <GlassCard>No Country Found the code {citySearched}</GlassCard>
          )}
        </div>
      )}
    </Page>
  );
};
