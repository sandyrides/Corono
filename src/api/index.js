import React from "react";
import axios from "axios";

const url = "https://covid19.mathdro.id/api";
const urlDaily = "https://covid19.mathdro.id/api/daily";
const urlCountries = "https://covid19.mathdro.id/api/countries";

export const fetchData = async (country) => {
  let ifCountryUrl = url;
  if (country && country != "global") {
    ifCountryUrl = "https://covid19.mathdro.id/api/countries/" + country;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(ifCountryUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(urlDaily);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (error) {}
};

export const fetchCountries = async () => {
  const {
    data: { countries },
  } = await axios.get(urlCountries);

  return countries.map((country) => country.name);
};
