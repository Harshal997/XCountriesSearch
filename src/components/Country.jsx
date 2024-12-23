import React from "react";
import '../App.css'
const Country = ({ name, flag }) => {
  return (
    <div
      style={{
        width: 150,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        borderStyle: 'solid',
        borderRadius: 10,
      }}
      className="countryCard"
    >
      <img src={flag} alt={name} height={100} width={100} />
      <p>{name}</p>
    </div>
  );
};

export default Country;
