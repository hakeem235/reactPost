import React from "react";
import NewPost from "../postForm/PostForm";
import "./postList.css";
import "bootstrap/dist/css/bootstrap.min.css";

const PostList = () => {
  return (
    <>
      <div className="mb-3">
        <NewPost />
      </div>
    </>
  );
};

export default PostList;
