import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Country = ({ lightMode }) => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getCountry = async () => {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const data = await res.json();
      setCountry(data);
    };
    getCountry();
  }, [name]);

  useEffect(() => {
    document.title = `Countries | ${name}`;
  }, [name]);

  return (
    <div className="container">
      <Link to="/" className={lightMode ? "btn" : "btn darkmode"}>
        &larr; Back
      </Link>
      {country.map((item, index) => (
        <div key={index} className="info-page">
          <img src={item.flags.svg} alt={item.flags.alt} className="picture" />
          <div className="info-page__title">
            <div className="info-page__content">
              <h1>{item.name.common}</h1>
              <div className="info-list">
                <ul className="left-list">
                  <li>
                    <span>Native Name:</span> {item.name.official}
                  </li>
                  <li>
                    <span>Population:</span> {item.population.toLocaleString()}
                  </li>
                  <li>
                    <span>Region: </span> {item.region}
                  </li>
                  <li>
                    <span>Sub Region: </span> {item.subregion}
                  </li>
                  <li>
                    <span>Capital:</span> {item.capital}{" "}
                  </li>
                </ul>
                <ul className="right-list">
                  <li>
                    <span>Top Level Domain:</span> {item.tld.map(elem => elem)}
                  </li>
                  <li>
                    <span>Currencies: </span> 
                    {Object.entries(item && item?.currencies).map(([key, value], index, arr) => (
                      <span className="lang" key={index}>
                        {key} {index !== arr.length - 1 ? ", " : "."}
                      </span>
                    ))} 
                  </li>
                  <li>
                    <span>Languages: </span> 
                     {Object.entries(item && item?.languages).map(([_, value], index, arr) => (
                      <span className="lang" key={index}>
                        {value}{index !== arr.length - 1 ? ", " : "."}
                      </span>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
            <br />
            {item.borders && (
              <div className="border-country">
                <h4 className="border">
                  <span>Border Countries: </span>
                </h4>
                <ul
                  className={lightMode ? "border-list" : "border-list darkmode"}
                >
                  {item.borders.map((border, index) => (
                    <li key={index}>{border}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Country;
