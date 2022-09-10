import Image from "next/image";
import React, { useState } from "react";
import { useEffect } from "react";
import { filterData } from "../public/data";

function Filter() {
  //   const [categories, setCategories] = useState();
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "f8da552677msh3cc69df4e6e27e2p13da2ajsnaafab4748640",
  //       "X-RapidAPI-Host": "airbnb19.p.rapidapi.com",
  //     },
  //   };

  //   const getResults = async () => {
  //     const api = await fetch(
  //       "https://airbnb19.p.rapidapi.com/api/v1/getCategory",
  //       options
  //     );
  //     const data = await api.json();
  //     setCategories(data.data);
  //     console.log(categories);
  //   };

  //   useEffect(() => {
  //     getResults();
  //   });

  return (
    <div className="hidden md:flex  md:px-20 px-5 md:pt-10 pt-5 justify-between">
      <div className=" flex overflow-hidden justify-between md:w-11/12 w-full items-center">
        {filterData &&
          filterData.map((items) => {
            return (
              <div
                key={items.id}
                className="mr-10 flex flex-col items-center opacity-60 hover:opacity-100 cursor-pointer"
              >
                <div className="flex items-center ">
                  <Image
                    layout="fixed"
                    width={24}
                    height={24}
                    src={items.image}
                    alt="Sunset in the mountains"
                  />
                </div>

                <p className="text-xs font-medium pt-2 whitespace-nowrap">
                  {items.title}
                </p>
              </div>
            );
          })}
      </div>
      <button className=" items-center  cursor-pointer bg-white border-2 p-3">
        Filter
      </button>
    </div>
  );
}

export default Filter;
