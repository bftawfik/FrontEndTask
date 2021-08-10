import { Link } from "react-router-dom";

import classes from "./CountryDetails.module.scss";

const CountryDetails = ({
  country: {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = {},
  allCountries = {},
}) => {
  return (
    <div className={classes.CountryDetails}>
      <div className={classes.imgContainer}>
        <img src={flag} alt={name} />
      </div>
      <div className={classes.dataContainer}>
        <h2 className={classes.name}>{name}</h2>
        <div className={classes.dataRow}>
          <div className={classes.dataCol}>
            <div className={classes.record}>
              <h4>Native Name:</h4>
              <p>{nativeName}</p>
            </div>
            <div className={classes.record}>
              <h4>Population:</h4>
              <p>{population}</p>
            </div>
            <div className={classes.record}>
              <h4>Region:</h4>
              <p>{region}</p>
            </div>
            <div className={classes.record}>
              <h4>Sub Region:</h4>
              <p>{subregion}</p>
            </div>
            <div className={classes.record}>
              <h4>Capital:</h4>
              <p>{capital}</p>
            </div>
          </div>
          <div className={classes.dataCol}>
            <div className={classes.record}>
              <h4>Top Level Domain:</h4>
              <p>{topLevelDomain && topLevelDomain.join(", ")}</p>
            </div>
            <div className={classes.record}>
              <h4>Currencies:</h4>
              <p>{currencies && currencies.map((c) => c.name).join(", ")}</p>
            </div>
            <div className={classes.record}>
              <h4>Languages:</h4>
              <p>{languages && languages.map((c) => c.name).join(", ")}</p>
            </div>
          </div>
        </div>

        <div className={classes.dataRow}>
          <h4>Border Countries:</h4>
          {borders && (
            <div className={classes.borders}>
              {borders.map((alpha3Code) => (
                <Link to={`/country/${alpha3Code}`} className="element">
                  {allCountries[alpha3Code].name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
