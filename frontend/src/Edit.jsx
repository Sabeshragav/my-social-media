import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "./context/DataContext";

const Edit = () => {
  const { handleEdit, setEditTitle, setEditBody, getEditTitle, getEditBody } =
    useContext(DataContext);
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
          <button className="btn mt-5" type="submit">
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
