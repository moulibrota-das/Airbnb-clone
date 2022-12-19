import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import Hotels from "../components/Hotels";
import axios from "axios";

function Search({ finalPropertyData }) {
  const router = useRouter();
  const [locationData, setLocationData] = useState();
  const [propertyData, setPropertyData] = useState();
  const { location, startDate, endDate } = router.query;

  console.log("startdate", Date.now());
  console.log("enddate", endDate);

  const getLocationResults = async () => {
    const options = {
      method: "GET",
      url: "https://airbnb13.p.rapidapi.com/search-location",
      params: {
        location: `${location}`,
        checkin: `${startDate}`,
        checkout: `${endDate}`,
        adults: "1",
        children: "0",
        infants: "0",
        page: "1",
      },
      headers: {
        "X-RapidAPI-Key": "f8da552677msh3cc69df4e6e27e2p13da2ajsnaafab4748640",
        "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("axios res", response);
        setLocationData(response.data.results);
        console.log("locaton data", locationData);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getLocationResults();
    console.log("location result", locationData);
  }, [location]);

  return (
    <div>
      <Header />
      <Hotels result={locationData} />
      <Footer />
    </div>
  );
}

export default Search;
