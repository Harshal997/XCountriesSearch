import React, { useEffect, useState } from "react";
import Country from "./Country";
import { getCountries } from "../api";
import { Input } from "./Input";

export const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [countriesInitial, setCountriesInitial] = useState([]);

  const fetchCountries = async () => {
    const countries = await getCountries();
    setCountries(countries);
    setCountriesInitial(countries);
  };

  useEffect(() => {
    fetchCountries();
  }, []);
  return (
    <div>
      <Input countriesInitial={countriesInitial} setCountries={setCountries} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          flexWrap: "wrap",
          padding: 20,
        }}
      >
        {countries &&
          countries.length > 0 &&
          countries.map((country, index) => (
            <Country key={index} name={country.name.common} flag={country.flags.png} />
          ))}
      </div>
    </div>
  );
};
