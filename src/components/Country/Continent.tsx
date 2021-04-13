import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../../graphql/Query";
import { CountryList } from "./CountryList";
import { Page, GlassCard, StyledInput } from "./styles";

interface ContinentProps {}

export const Continent: React.FC<ContinentProps> = () => {
  const [continentSearched, setContinentSearched] = useState("");

  const [getCountries, { loading, error, data }] = useLazyQuery(GET_COUNTRIES, {
    variables: { code: continentSearched?.toUpperCase() },
  });

  if (data) {
    console.log(data);
  }

  return (
    <Page>
      <StyledInput
        type="text"
        placeholder="Enter continent code..."
        onChange={(event) => {
          setContinentSearched(event.target.value);
          getCountries();
        }}
      />

      {error && <GlassCard> Error found</GlassCard>}
      {loading && <GlassCard>Loading...</GlassCard>}
      {data && (
        <div>
          {data.continent ? (
            <GlassCard>
              <CountryList continent={data.continent} />
            </GlassCard>
          ) : (
            <GlassCard>
              No Continent Found the code {continentSearched}
            </GlassCard>
          )}
        </div>
      )}
    </Page>
  );
};
