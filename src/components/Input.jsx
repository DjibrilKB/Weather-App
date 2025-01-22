import axios from "axios";
import React, { useState } from "react";

export default function Input() {
  const [value, setValue] = useState("");
  const baseUrl = `https://api.weatherapi.com/v1/current.json?key=e814d9fea4d64d48805132106252201&q=${value}`;
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  const getData = () => {
    return axios.get(baseUrl);
  };

  const handleSubmitResearch = (e) => {
    e.preventDefault();
    setIsLoading(true);
    getData()
      .then((res) => console.log(res.data))
      .catch((err) => console.log("Failed to load Data", err))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <form
          onSubmit={(e) => {
            handleSubmitResearch(e);
          }}
        >
          <label>Entrez votre ville ou pays de recherche</label>
          <input
            type="text"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button type="submit">Lancer la recherche</button>
        </form>
      )}
    </>
  );
}
