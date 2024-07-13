import React from "react";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { writeNewPost } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];
const WritePost = () => {
  const [postBody, setPostBody] = React.useState({
    title: "",
    summary: "",
    content: "",
  });
  const [postImage, setPostImage] = React.useState(null);
  const [imgPreview, setImgPreview] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostBody((prev) => ({ ...prev, [name]: value }));
  };
  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setPostImage(imageFile);
    const imageUri = URL.createObjectURL(imageFile);
    setImgPreview(imageUri);
  };
  const createNewPost = async (e) => {
    const toastId = toast.loading("Publishing your post...");
    setLoading(true);
    try {
      e.preventDefault();
      if (!postBody.title)
        throw { message: "Please provide a title for your post." };
      if (!postBody.summary)
        throw { message: "Please provide a summary for your post." };
      if (!postBody.content)
        throw { message: "Please provide a content for your post." };
      if (!postImage)
        throw { message: "Please provide a banner image for your post." };
      const formData = new FormData();
      formData.set("title", postBody.title);
      formData.set("summary", postBody.summary);
      formData.set("content", postBody.content);
      formData.set("image", postImage);
      await writeNewPost(formData);
      toast.success("Post published successfully.");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      toast.dismiss(toastId);
      setLoading(false);
    }
  };
  return (
    <section className="mb-14">
      <form className="flex flex-col gap-6" onSubmit={createNewPost}>
        <h1 className="text-center font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 mt-5">
          WRITE NEW POST
        </h1>
        <p className="text-center text-slate-600 py-0 text-lg">
          Start sharing your ideas, stories, and expertise with our community.
        </p>
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Post Title
          </label>
          <input
            type="text"
            id="title"
            className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:ring-emerald-500 disabled:opacity-50 disabled:pointer-events-none outline-none focus:ring-1"
            placeholder="Write your post title here..."
            name="title"
            value={postBody.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="summary" className="block text-sm font-medium mb-2">
            Post Summary
          </label>
          <input
            type="text"
            id="summary"
            className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:ring-emerald-500 disabled:opacity-50 disabled:pointer-events-none outline-none focus:ring-1"
            placeholder="write your post summary shortly here..."
            name="summary"
            value={postBody.summary}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full min-h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 pt-4 "
          >
            Upload your post banner image
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 ">PNG, JPG or GIF</p>
            </div>
            {imgPreview && (
              <img
                src={imgPreview}
                alt="preview image"
                className="rounded-md w-full"
              />
            )}
          </label>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="content" className="font-semibold">
            Post Content
          </label>
          <ReactQuill
            id="content"
            name="content"
            modules={modules}
            formats={formats}
            value={postBody.content}
            onChange={(value) =>
              setPostBody((prev) => ({ ...prev, content: value }))
            }
          />
        </div>
        <button
          type="submit"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 disabled:opacity-50 disabled:pointer-events-none justify-center hover:opacity-80"
          disabled={loading}
        >
          {loading ? "Loading..." : "Publish your post"}
        </button>
      </form>
    </section>
  );
};

export default WritePost;
