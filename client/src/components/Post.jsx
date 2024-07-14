import React from "react";
import { Link } from "react-router-dom";
import { extractDate } from "../utils/utils";

const Post = ({ _id, title, summary, image, author, createdAt }) => {
  return (
    <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
      <Link to={`/${author.userName}/${_id}`}>
        <img
          className="w-full rounded-sm object-cover"
          src={`http://localhost:4000/${image}`}
          alt="Image Description"
        />
      </Link>
      <div className="">
        <div className=" flex flex-col h-full">
          <Link
            className="text-lg font-bold text-gray-800 line-clamp-2 leading-6 mb-1 text-wrap"
            to={`/${author.userName}/${_id}`}
          >
            {title}
          </Link>
          <p className="mt-1 text-gray-500 line-clamp-4 mb-4 max-sm:mb-2">
            {summary}{" "}
          </p>
          <div className="mt-5 max-sm:mt-0 sm:mt-auto">
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
