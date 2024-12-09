import React from "react";

export const Input = ({ countriesInitial, setCountries }) => {
  const handleChange = (e) => {
    setCountries(countriesInitial.filter((country) => country.name.toLowerCase().includes(e.target.value.toLowerCase())));
  };

  return (
    <div
      style={{
        backgroundColor: "rgba(80,80,80,0.4)",
        padding: "1em 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        onChange={handleChange}
        style={{ width: "36em", padding: "0.7em" }}
        type="text"
      />
    </div>
  );
};
