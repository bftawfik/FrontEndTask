import classes from "./CountryCard.module.scss";

const CountryCard = ({
  country: { flag, name, population, region, capital },
}) => {
  return (
    <div className={classes.CountryCard}>
      <div className={classes.imgContainer}>
        <img src={flag} alt={name} />
      </div>
      <div className={classes.dataContainer}>
        <h2>{name}</h2>
        <div className={classes.dataRow}>
          <h4>Population:</h4>
          <p>{population}</p>
        </div>
        <div className={classes.dataRow}>
          <h4>Region:</h4>
          <p>{region}</p>
        </div>
        <div className={classes.dataRow}>
          <h4>Capital:</h4>
          <p>{capital}</p>
        </div>
      </div>
    </div>
  );
};
export default CountryCard;
