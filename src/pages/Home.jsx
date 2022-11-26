import React, { useState } from "react";
import { Link } from "react-router-dom";

import allBeersImg from "./../assets/beers.png";
import randomBeerImg from "./../assets/random-beer.png";
import newBeerImg from "./../assets/new-beer.png";

const Home = () => {
  return (
    <section className="homepage">
      <Link to="/beers">
        <article>
          <img src={allBeersImg} alt="All beers" />
          <div className="infos">
            <h2>All beers</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              vero debitis sed eveniet excepturi quia aspernatur at illum. Fuga,
              odio voluptatum. Eaque asperiores tenetur doloremque perferendis
              inventore dicta quidem. Labore!
            </p>
          </div>
        </article>
      </Link>
      <Link to="/random-beer">
        <article>
          <img src={randomBeerImg} alt="Random beer" />
          <div className="infos">
            <h2>Random beer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              vero debitis sed eveniet excepturi quia aspernatur at illum. Fuga,
              odio voluptatum. Eaque asperiores tenetur doloremque perferendis
              inventore dicta quidem. Labore!
            </p>
          </div>
        </article>
      </Link>
      <Link to="/beers/new-beer">
        <article>
          <img src={newBeerImg} alt="New beer" />
          <div className="infos">
            <h2>New beer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              vero debitis sed eveniet excepturi quia aspernatur at illum. Fuga,
              odio voluptatum. Eaque asperiores tenetur doloremque perferendis
              inventore dicta quidem. Labore!
            </p>
          </div>
        </article>
      </Link>
    </section>
  );
};

export default Home;
