import React, { useState } from "react";

export default function Input() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl =
    "https://api.weatherapi.com/v1/current.json?key=e814d9fea4d64d48805132106252201&q=Paris";
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
}
