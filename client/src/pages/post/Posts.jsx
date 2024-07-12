import React from "react";
import Post from "../../components/Post";

const Posts = () => {
  return (
    <section className="py-10">
      <div className="grid grid-cols-1 gap-8">
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  );
};

export default Posts;
