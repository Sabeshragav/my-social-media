import React, { useContext } from "react";
import Posts from "./Posts";
import DataContext from "./context/DataContext";

const Feed = () => {
  const { getSearchResults } = useContext(DataContext);
  return (
    <div className="text-white overflow-auto h-[31rem] space-y-10">
      {getSearchResults.map((post) => (
        <Posts key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
