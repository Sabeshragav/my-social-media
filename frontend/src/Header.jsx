import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdBatteryCharging, IoMdBatteryFull } from "react-icons/io";
import DataContext from "./context/DataContext";

const Header = ({ title }) => {
  const { getBatteryState } = useContext(DataContext);
  return (
    <header className="p-2 bg-gray-700 flex items-center justify-between rounded-b-lg text-white">
      <Link to={"/"}>
        <h1 className="text-5xl font-bold gunmetal p-3 text-transparent bg-clip-text">
          {title}
        </h1>
      </Link>
      <div className="flex items-center space-x-0.5 mr-2">
        {getBatteryState.charging && (
          <IoMdBatteryCharging className="h-5 w-5" />
        )}
        {!getBatteryState.charging && <IoMdBatteryFull className="h-5 w-5" />}
        <span className="text-xl">
          {(getBatteryState.level * 100).toFixed()}%
        </span>
      </div>
    </header>
  );
};

export default Header;
