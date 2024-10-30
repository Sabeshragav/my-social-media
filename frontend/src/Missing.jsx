import React from "react";
import { Link } from "react-router-dom";
import { HiEmojiSad } from "react-icons/hi";
const Missing = () => {
  return (
    <div className="p-3 flex h-[31rem] justify-center items-center">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-4xl font-bold flex items-center gap-3">
          Page Not Found <HiEmojiSad />
        </h2>
        <p className="text-lg">Well that's disappointing</p>
        <Link to={"/"}>
          <p className="text-lg text-blue-800 underline">Visit our homepage</p>
        </Link>
      </div>
    </div>
  );
};

export default Missing;
