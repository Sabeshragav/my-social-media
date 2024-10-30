import React, { useContext } from "react";
import DataContext from "./context/DataContext";

const NewPost = () => {
  const { handleAddPost, setTitle, setBody, getTitle, getBody } =
    useContext(DataContext);
  return (
    <div className="p-3 h-[31rem]">
      <form action="" onSubmit={(e) => handleAddPost(e)}>
        <div className="flex flex-col gap-5">
          <label className="text-2xl text-white" htmlFor="title">
            Title :
          </label>
          <input
            className="rounded-lg p-3 text-lg"
            type="text"
            id="title"
            placeholder="Enter title"
            value={getTitle}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="text-2xl text-white" htmlFor="body">
            Body :
          </label>
          <input
            className="h-36 rounded-lg p-3 text-lg"
            type="text"
            id="body"
            placeholder="Enter Body"
            value={getBody}
            onChange={(e) => setBody(e.target.value)}
          />
          <button className="btn mt-5" type="submit">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
