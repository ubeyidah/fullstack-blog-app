import React, { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { getPost } from "../../utils/api";
import { useAuthContext } from "../../context/AuthContext";
const extractDate = (date) => {
  const publishDate = new Date(date);
  return publishDate.toLocaleString();
};
const PostDetail = () => {
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const { user } = useAuthContext();
  const isOwnerOfThisPost = user?._id === post?.author._id ? true : false;
  console.log(isOwnerOfThisPost);
  const { id } = useParams();

  React.useEffect(() => {
    const loadPost = async () => {
      try {
        const data = await getPost(id);
        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadPost();
  }, [id]);
  if (loading) {
    return <h1 className="py-10">Loading</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <section className="py-6">
      <Link to="/">
        <button
          type="button"
          className="inline-flex flex-shrink-0 justify-center items-center size-10 rounded-full text-gray-500 hover:bg-slate-100  focus:z-10 focus:outline-none focus:ring-2 focus:ring-emerald-300-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
      </Link>
      <div className="border-b border-slate-300 my-3"></div>
      <h1 className="font-bold text-2xl my-3 w-full">{post.title}</h1>
      <p className="text-slate-600 mb-4">{post.summary}</p>

      <div>
        <img
          className="size-full rounded-md object-cover "
          src={`http://localhost:4000/${post.image}`}
          alt="Image Description"
        />
      </div>
      <div className="border-b py-3 px-3 flex-wrap gap-3 flex items-center justify-between">
        <div className="flex gap-2">
          <button
            id="hs-dropdown-with-header"
            type="button"
            className="hs-dropdown-toggle w-10 h-10 text-lg text-white rounded-md  bg-gradient-to-bl from-red-200 to-red-600 font-bold uppercase  focus:ring-2"
          >
            {post.author.userName[0]}
          </button>
          <div>
            <p className="leading-4 text-sm text-slate-600">
              @{post.author.userName}
            </p>
            <p>{post.author.email}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="bg-slate-50 px-4 border flex items-center justify-center border-slate-200 shadow-sm text-slate-500 py-1 rounded-full">
            {extractDate(post.createdAt)}
          </div>
          {isOwnerOfThisPost && (
            <Link to="/">
              <button
                type="button"
                className="inline-flex flex-shrink-0 justify-center items-center size-10 rounded-full text-gray-500 hover:bg-slate-200 bg-slate-50  focus:z-10 focus:outline-none focus:ring-2 focus:ring-emerald-300-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </button>
            </Link>
          )}
        </div>
      </div>
      <div
        className="content my-8"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </section>
  );
};

export default PostDetail;
