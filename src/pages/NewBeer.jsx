import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewBeer = () => {
  const [beers, setBeers] = useState([]);

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewerTips, setBrewerTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        {
          name,
          tagline,
          description,
          first_brewed: firstBrewed,
          brewer_tips: brewerTips,
          attenuation_level: attenuationLevel,
          contributed_by: contributedBy,
        }
      );

      // Redirect to newlye created beer
      const allBeers = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      const newlyCreatedBeer = allBeers.data[allBeers.data.length - 1]; // I'm pretty sure there's a better way to do that...
      setBeers((currentState) => [...currentState, data]);
      navigate(`/beers/${newlyCreatedBeer._id}`);
    } catch (error) {
      setErrorMessage("Please fill all fields");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
      console.error(error);
    }
  };

  const handleNameChange = ({ target: { value } }) => {
    setName(value);
  };

  const handleTaglineChange = ({ target: { value } }) => {
    setTagline(value);
  };

  const handleDescriptionChange = ({ target: { value } }) => {
    setDescription(value);
  };
  const handleFirstBrewedChange = ({ target: { value } }) => {
    setFirstBrewed(value);
  };
  const handleBrewerTipsChange = ({ target: { value } }) => {
    setBrewerTips(value);
  };
  const handleAttenuationLevelChange = ({ target: { value } }) => {
    setAttenuationLevel(value);
  };

  const handleContributedByChange = ({ target: { value } }) => {
    setContributedBy(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          id="tagline"
          value={tagline}
          onChange={handleTaglineChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <div>
        <label htmlFor="firstBrewed">First brewed</label>
        <input
          type="text"
          id="firstBrewed"
          value={firstBrewed}
          onChange={handleFirstBrewedChange}
        />
      </div>
      <div>
        <label htmlFor="brewerTips">Brewers Tips</label>
        <input
          type="text"
          id="brewerTips"
          value={brewerTips}
          onChange={handleBrewerTipsChange}
        />
      </div>
      <div>
        <label htmlFor="attenuationLevel">Attenuation level</label>
        <input
          type="number"
          id="attenuationLevel"
          value={attenuationLevel}
          onChange={handleAttenuationLevelChange}
        />
      </div>
      <div>
        <label htmlFor="contributedBy">Contributed by</label>
        <input
          type="text"
          id="contributedBy"
          value={contributedBy}
          onChange={handleContributedByChange}
        />
      </div>

      {errorMessage && <p className="error">{errorMessage}</p>}

      <button>ADD NEW</button>
    </form>
  );
};

export default NewBeer;
