import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "./context/DataContext";
import { IoMdSync } from "react-icons/io";

const Edit = () => {
  const {
    handleEdit,
    setEditTitle,
    setEditBody,
    getEditTitle,
    getEditBody,
    postLoading,
  } = useContext(DataContext);
  const id = useParams().id;

  return (
    <div className="p-3 h-[31rem]">
      <form action="" onSubmit={(e) => handleEdit(e, id)}>
        <div className="flex flex-col gap-5">
          <label className="text-2xl text-white" htmlFor="title">
            Title :
          </label>
          <input
            required
            className="rounded-lg p-3 text-lg"
            type="text"
            id="title"
            placeholder="Enter title"
            value={getEditTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <label className="text-2xl text-white" htmlFor="body">
            Body :
          </label>
          <input
            required
            className="h-36 rounded-lg p-3 text-lg"
            type="text"
            id="body"
            placeholder="Enter Body"
            value={getEditBody}
            onChange={(e) => setEditBody(e.target.value)}
          />
          {!postLoading ? (
            <button className="btn mt-5" type="submit">
              Edit
            </button>
          ) : (
            <button className="btn mt-5 flex justify-center items-center gap-2">
              Editing Please Wait
              <IoMdSync className="h-8 w-8 animate-spin" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Edit;
