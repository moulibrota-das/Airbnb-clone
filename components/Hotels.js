import React from "react";
import Cards from "./Cards";
const Hotels = ({ data }) => {
  return (
    <div className="flex md:flex-row md:flex-wrap flex-col justify-between py-5 md:px-10 lg:px-20 px-5">
      {data &&
        data.map((items) => {
          return (
            <Cards
              key={items.id}
              img={items.optimizedThumbUrls.srpDesktop}
              title={items.name}
              price={items.ratePlan.price.current}
              location={items.address.streetAddress}
            />
          );
        })}
    </div>
  );
};

export default Hotels;
