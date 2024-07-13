import React from "react";
import { Link } from "react-router-dom";

const extractDate = (date) => {
  const publishDate = new Date(date);
  return publishDate.toLocaleString();
};
const Post = ({ _id, title, summary, image, author, createdAt }) => {
  return (
    <div className="sm:flex cursor-default items-start">
      <Link to={`/${author.userName}/${_id}`} className="max-w-[340px]">
        <img
          className="size-full rounded-sm object-cover"
          src={`http://localhost:4000/${image}`}
          alt="Image Description"
        />
      </Link>
      <div className="flex flex-1 flex-wrap">
        <div className="px-4 flex flex-col h-full">
          <Link
            className="text-lg font-bold text-gray-800 line-clamp-2 leading-6 mb-1 text-wrap"
            to={`/${author.userName}/${_id}`}
          >
            {title}
          </Link>
          <p className="mt-1 text-gray-500 line-clamp-4 mb-4">{summary} </p>
          <div className="mt-5 sm:mt-auto">
            <p className="text-xs text-gray-500 ">
              <Link to={`/${author.userName}`}> @{author.userName}</Link> -{" "}
              {extractDate(createdAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
