import React from "react";

const NoPosts = () => {
  return (
    <div className="p-3 flex h-[31rem] justify-center items-center">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-4xl minnesota bg-clip-text text-transparent font-bold flex items-center gap-3">
          NO POSTS TO DISPLAY
        </h2>
      </div>
    </div>
  );
};

export default NoPosts;
