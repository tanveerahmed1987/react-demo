import { ContinentWrapper } from "./styles";

interface Country {
  name: String;
  emoji: String;
}

interface CountryListProps {
  continent: {
    code: String;
    name: String;
    countries: Country[];
  };
}

export const CountryList: React.FC<CountryListProps> = ({ continent }) => {
  return (
    <ContinentWrapper>
      <div className="name">{continent.name}</div>
      <ul className="list">
        {continent.countries.map((country, index) => (
          <li key={index}>
            {country.emoji} - {country.name}
          </li>
        ))}
      </ul>
    </ContinentWrapper>
  );
};
