import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleBeer = () => {
  const [beer, setBeer] = useState(null);
  const params = useParams();
  let axiosGet = "https://ih-beers-api2.herokuapp.com/beers/random";
  if (params.id) {
    axiosGet = "https://ih-beers-api2.herokuapp.com/beers/" + params.id;
  }

  useEffect(() => {
    async function getBeer() {
      const response = await axios.get(axiosGet);
      setBeer(response.data);
    }
    getBeer();
  }, []);

  if (!beer) {
    return <div className="loading">Loading....</div>;
  }

  return (
    <section className="single-beer">
      <img src={beer.image_url} alt="" />
      <div>
        <h1>{beer.name}</h1>
        <p>{beer.attenuation_level}</p>
      </div>
      <div>
        <h2>{beer.tagline}</h2>
        <p>{beer.first_brewed}</p>
      </div>
      <p className="description">{beer.description}</p>
      <p className="contributor">{beer.contributed_by}</p>
    </section>
  );
};

export default SingleBeer;
