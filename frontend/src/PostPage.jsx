import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Missing from "./Missing";
import DataContext from "./context/DataContext";

const PostPage = () => {
  const { getPosts, handleDelete, setEditTitle, setEditBody } =
    useContext(DataContext);
  const id = useParams().id;
  const post = getPosts.find((post) => post._id === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <div className="p-4 h-[31rem] overflow-auto text-white">
      <article>
        {post && (
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-bold">{post.title}</h2>
            <p className="font-thin">{post.datetime}</p>
            <p className="text-2xl font-normal">{post.body}</p>
            <div className="mt-10 flex gap-5">
              <button className="btn" onClick={(e) => handleDelete(e, id)}>
                Delete
              </button>
              <Link to={`/post/edit/${id}`} className="btn">
                Edit
              </Link>
            </div>
          </div>
        )}
        {!post && <Missing />}
      </article>
    </div>
  );
};

export default PostPage;
