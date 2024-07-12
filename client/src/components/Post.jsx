import React from "react";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <Link className="sm:flex cursor-default items-start">
      <div className="max-w-[340px]">
        <img
          className="size-full rounded-sm object-cover"
          src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
          alt="Image Description"
        />
      </div>
      <div className="flex flex-1 flex-wrap">
        <div className="px-4 flex flex-col h-full">
          <h3 className="text-lg font-bold text-gray-800 line-clamp-2 leading-6 mb-1">
            This title and its features make the blog app appealing to job
            seekers, professionals looking to advance their careers, and anyone
            interested in career development, highlighting guidance, support,
            and professional growth.
          </h3>
          <p className="mt-1 text-gray-500 line-clamp-4 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolor
            inventore cumque excepturi deserunt. Adipisci perferendis dolor quas
            dolorum quidem. Deserunt quae quam consectetur. Beatae modi illum
            amet nam perferendis adipisci ab! Animi reiciendis nesciunt illo
            nobis alias dignissimos commodi.
          </p>
          <div className="mt-5 sm:mt-auto">
            <p className="text-xs text-gray-500 ">
              <Link>@mozila</Link> 02/12/2022
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;
