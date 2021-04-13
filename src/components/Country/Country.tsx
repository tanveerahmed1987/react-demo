import { CountryWrapper } from "./styles";

interface Continent {
  name: String;
}
interface Language {
  code: String;
  name: String;
}

interface CountryProp {
  country: {
    code: String;
    name: String;
    emoji: String;
    currency: String;
    languages: Language[];
    capital: String;
    continent: Continent;
  };
}

export const Country: React.FC<CountryProp> = ({ country }) => {
  return (
    <CountryWrapper>
      <div className="name">{country.name}</div>
      <div className="container">
        <div className="left">
          <div className="code">
            Code <strong>: {country.code}</strong>
          </div>
          <div className="currency">
            Currency <strong>: {country.currency}</strong>
          </div>
          <div className="capital">
            Capital <strong>: {country.capital}</strong>
          </div>
          <div className="continent">
            Continent <strong>: {country.continent.name}</strong>
          </div>
        </div>
        <div className="right">
          <div className="emoji">{country.emoji}</div>
          <div className="language">
            Languages
            <ul>
              {country.languages.map((language, index) => (
                <li key={index}>{language.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </CountryWrapper>
  );
};
