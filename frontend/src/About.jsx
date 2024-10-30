import React from "react";
const About = () => {
  return (
    <div className="p-3 flex h-[31rem] justify-center items-center">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-4xl minnesota bg-clip-text text-transparent font-bold flex items-center gap-3">
          ABOUT US
        </h2>
        <p className="text-lg text-center">
          This is a small social media app developed using React and Tailwindcss
        </p>
        <p role="button" className="text-lg text-blue-800 underline">
          Subscribe US
        </p>
      </div>
    </div>
  );
};

export default About;
