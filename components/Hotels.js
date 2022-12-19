import React, { useState } from "react";
import Cards from "./Cards";
import axios from "axios";
const Hotels = ({ result }) => {
  return (
    <div className="flex md:flex-row md:flex-wrap flex-col justify-between py-5 md:px-10 lg:px-20 px-5">
      {result &&
        result.map((items) => {
          return (
            <Cards
              key={items.id}
              img={items.images[0]}
              title={items.name}
              price={items.price.rate}
              location={items.address}
            />
          );
        })}
    </div>
  );
};

export default Hotels;
