import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import DataContext from "./context/DataContext";

const Nav = () => {
  const { setSearch } = useContext(DataContext);
  return (
    <nav className="flex flex-col gap-2 sm:gap-0 sm:flex-row mt-1 rounded-lg p-3 sm:p-1 items-center sm:justify-between bg-gray-400">
      <div>
        <SearchBar setSearch={setSearch} />
      </div>
      <div>
        <ul className="flex text-xl gap-4 p-2 font-medium">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/post"}>Post</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
