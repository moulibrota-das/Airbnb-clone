import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import Hotels from "../components/Hotels";

function Search({ finalPropertyData }) {
  const router = useRouter();
  const [locationData, setLocationData] = useState();
  const [propertyData, setPropertyData] = useState();
  const { location, startDate, endDate } = router.query;

  const getLocationResults = async () => {
    const locationUrl = `https://hotels4.p.rapidapi.com/locations/v2/search?query=${location}&locale=en_US&currency=USD`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f8da552677msh3cc69df4e6e27e2p13da2ajsnaafab4748640",
        "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
      },
    };

    const api = await fetch(locationUrl, options);
    const data = await api.json();
    try {
      const finalData = await data.suggestions[0].entities[0].destinationId;
      setLocationData(finalData);
    } catch (error) {
      console.log(error);
    }

    console.log("get location done");
  };

  const getPropertyResults = async (id) => {
    console.log("get property start");
    console.log(locationData);
    const locationUrl = `https://hotels4.p.rapidapi.com/properties/list?destinationId=${locationData}&pageNumber=1&pageSize=25&checkIn=2022-09-11&checkOut=2022-09-14&adults1=1&sortOrder=PRICE&locale=en_US&currency=USD`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f8da552677msh3cc69df4e6e27e2p13da2ajsnaafab4748640",
        "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
      },
    };

    const api = await fetch(locationUrl, options);
    const data = await api.json();
    await setPropertyData(data.data.body.searchResults.results);
    await console.log("get property done");
  };

  useEffect(() => {
    getLocationResults();
  }, [location]);

  useEffect(() => {
    locationData && getPropertyResults(locationData);
  }, [locationData]);
  return (
    <div>
      <Header />
      <Hotels data={finalPropertyData} />
      <Footer />
    </div>
  );
}

export default Search;
