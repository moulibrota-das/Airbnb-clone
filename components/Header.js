import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
import Button from "./Button";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const Submit = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString().substring(0, 10),
        endDate: endDate.toISOString().substring(0, 10),
      },
    });
    Cancel();
  };
  const Cancel = () => {
    setSearchInput("");
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-1 md:grid-cols-3 bg-white shadow py-3.5 px-5 md:px-10 lg:px-20">
      {/* left section  */}

      <div
        className="relative items-center h-8 cursor-pointer my-auto hidden md:inline-flex"
        onClick={() => router.push("/")}
      >
        <Image
          src={logo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt=""
        />
        <span className="self-center text-2xl ml-9 items-center font-bold whitespace-nowrap text-red-500 hidden lg:inline-flex">
          airbnb
        </span>
      </div>

      {/* middle section */}
      <form
        onSubmit={Submit}
        className="flex md:flex-row-reverse  items-center border shadow border-slate-300 rounded-full py-2 px-2 hover:shadow-md"
      >
        <SearchIcon className="h-8 md:bg-red-500 md:text-white rounded-full p-1.5 md:p-2 cursor-pointer" />
        <input
          id="searchTextField"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          type="text"
          className="flex-grow outline-none pl-5 bg-transparent "
          placeholder="Search your stay"
        />
      </form>

      {/* right section */}
      <div className=" hidden md:inline-flex items-center space-x-4 justify-end cursor-pointer">
        <p className="font-semibold text-sm ">Become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center space-x-2 border border-slate-300 p-2 rounded-full hover:shadow-md">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handleSelect}
          />
          <div className="flex space-x-1 ml-5">
            <Button text="Cancel" click={Cancel} />
            <Button text="Submit" color click={Submit} />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
