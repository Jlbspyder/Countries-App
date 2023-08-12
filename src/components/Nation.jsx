import React from "react";
import { Link } from "react-router-dom";

const Nation = ({ flags, name, population, region, capital, mode }) => {
  return (
    <Link to={`/${name.common}`}>
      <div className={mode ? "wrapper" : "wrapper darkmode"}>
        <div className="flag">
          <img src={flags.svg} alt="" className="pix" />
        </div>
        <div className="country">
          <h3>{name.common}</h3>
          <div className="country-info">
            <h4>
              <span>Population:</span> {population.toLocaleString()}
            </h4>
            <h4>
              <span>Region:</span> {region}
            </h4>
            <h4>
              <span>Capital:</span> {capital}
            </h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Nation;
