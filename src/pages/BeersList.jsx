import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BeersList = () => {
  const [beers, setBeers] = useState(null);
  const [search, setSearch] = useState("");

  const handleSearch = ({ target: { value } }) => {
    setSearch(value);
  };

  useEffect(() => {
    async function getResults() {
      const results = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/search?q=" + search
      );
      setBeers(results.data);
    }
    getResults();
  }, [search]);

  useEffect(() => {
    async function getBeers() {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(response.data);
    }
    getBeers();
  }, []);

  if (!beers) {
    return <div className="loading">Loading....</div>;
  }
  return (
    <section className="beers-list">
      <div className="search">
        <input
          type="text"
          id="query"
          placeholder="Search beers by name"
          value={search}
          onChange={handleSearch}
        />
      </div>
      {beers.map((beer) => {
        return (
          <Link to={`/beers/${beer._id}`} key={beer._id}>
            <article className="beer-card">
              <picture>
                <img src={beer.image_url} alt={beer.name} />
              </picture>
              <div>
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <p>Created by: {beer.contributed_by} </p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default BeersList;
