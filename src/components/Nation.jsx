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
          <h4>{name.common}</h4>
          <ul className="country-info">
            <li>
              <span>Population:</span> {population.toLocaleString()}
            </li>
            <li>
              <span>Region:</span> {region}
            </li>
            <li>
              <span>Capital:</span> {capital}
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default Nation;
