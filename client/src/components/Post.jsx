import React from "react";
import { Link } from "react-router-dom";

const extractDate = (date) => {
  const publishDate = new Date(date);
  return publishDate.toLocaleString();
};
const Post = ({ _id, title, summary, image, author, createdAt }) => {
  return (
    <Link className="sm:flex cursor-default items-start">
      <div className="max-w-[340px]">
        <img
          className="size-full rounded-sm object-cover"
          src={`http://localhost:4000/${image}`}
          alt="Image Description"
        />
      </div>
      <div className="flex flex-1 flex-wrap">
        <div className="px-4 flex flex-col h-full">
          <h3 className="text-lg font-bold text-gray-800 line-clamp-2 leading-6 mb-1">
            {title}
          </h3>
          <p className="mt-1 text-gray-500 line-clamp-4 mb-4">{summary} </p>
          <div className="mt-5 sm:mt-auto">
            <p className="text-xs text-gray-500 ">
              @{author.userName} - {extractDate(createdAt)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;
