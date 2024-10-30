import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ post }) => {
  return (
    <article className="border-b pb-9 p-5 space-y-2">
      <Link to={`/post/${post._id}`}>
        <h2 className="text-3xl font-bold">{post.title}</h2>
        <p className="text-base font-thin">{post.datetime}</p>
      </Link>
      <p className="text-xl font-normal">
        {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
      </p>
    </article>
  );
};

export default Posts;
