import React, { useEffect, useState, useRef } from "react";
import Nation from "./Nation";
import { BsSearch } from "react-icons/bs";

const Countries = ({ lightMode }) => {
  const [search, setSearch] = useState("");
  const regions = [
    {
      name: "Africa",
    },
    {
      name: "Americas",
    },
    {
      name: "Asia",
    },
    {
      name: "Europe",
    },
    {
      name: "Oceania",
    },
    {
      name: "Antarctic",
    },
  ];

  useEffect(() => {
    document.title = "All Countries";
  }, []);

 const getCountries = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setCountries(data);
    if (data.status === 404) {
      setCountries([]);
      return;
    }
  };

  useEffect(() => {
    try {
      getCountries();
    } catch (error) {}
  }, []);
  
 const searchRef = useRef();

  const searchCountry = () => {
    const searchValue = searchRef.current.value;
    if (searchValue.trim()) {
      const fetchSearch = async () => {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${searchValue}`
        );
        const data = await response.json();
        setCountries(data);
      };

      try {
        fetchSearch();
      } catch (error) {}
    } else {
      getCountries();
    }
  };

  const noCountry = countries.status || countries.message;

  const filter = async (region) => {
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const data = await res.json();
    setCountries(data);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchCountry();
  };
  const filterByRegion = (e) => {
    e.preventDefault();
    filter();
  };

  return (
    <div className="container">
      <div className="form">
        <div className={lightMode ? "search" : "search darkmode"}>
          <form onSubmit={handleSearch} className="form-control">
            <BsSearch className="search-icon" />
            <input
              type="text"
              name="search"
              placeholder="Search for a country..."
              ref={searchRef}
              onChange={searchCountry}
              className={lightMode ? "input" : "input darkmode"}
            />
          </form>
        </div>
        <div>
          <form onSubmit={filterByRegion}>
            <select
              defaultValue=""
              name="countries"
              className={lightMode ? "filter" : "filter darkmode"}
              onChange={(e) => filter(e.target.value)}
            >
              <option hidden value="">
                Filter by Region
              </option>
              <option>{regions[0].name}</option>
              <option>{regions[1].name}</option>
              <option>{regions[2].name}</option>
              <option>{regions[3].name}</option>
              <option>{regions[4].name}</option>
              <option>{regions[5].name}</option>
            </select>
          </form>
        </div>
      </div>
      {!noCountry ? (
        <div className="grid">
          {countries.map((country, index) => (
            <Nation key={index} {...country} mode={lightMode} />
          ))}
        </div>
      ) : (
        <h3 className="error">Country does not exist...</h3>
      )}
    </div>
  );
};

export default Countries;
