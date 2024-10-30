import React, { useContext } from "react";
import Feed from "./Feed";
import NoPosts from "./NoPosts";
import DataContext from "./context/DataContext";

const Home = () => {
  const { getSearchResults } = useContext(DataContext);
  return <main>{getSearchResults.length ? <Feed /> : <NoPosts />}</main>;
};

export default Home;
