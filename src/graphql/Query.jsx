import { gql } from "@apollo/client";

export const GET_COUNTRY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      code
      name
      emoji
      currency
      capital
      continent {
        name
      }
      languages {
        code
        name
      }
    }
  }
`;

export const GET_COUNTRIES = gql`
  query GetCountries($code: ID!) {
    continent(code: $code) {
      code
      name
      countries {
        name
        emoji
      }
    }
  }
`;
