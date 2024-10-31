import React, { useContext } from "react";
import DataContext from "./context/DataContext";
import { IoMdSync } from "react-icons/io";

const NewPost = () => {
  const { handleAddPost, setTitle, setBody, getTitle, getBody, postLoading } =
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
          {!postLoading ? (
            <button className="btn mt-5" type="submit">
              Post
            </button>
          ) : (
            <div className="btn mt-5 flex justify-center items-center gap-2">
              Posting Please Wait
              <IoMdSync className="h-8 w-8 animate-spin" />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default NewPost;
