import axios from "axios";

const restcountriesUrl = "https://restcountries.eu";

const getAllCountries = async () => {
  return await axios.get(`${restcountriesUrl}//rest/v2/all`);
};

export { getAllCountries };
