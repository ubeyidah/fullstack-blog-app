import React from "react";
import Post from "../../components/Post";
import { getPosts } from "../../utils/api";
import Skeleton from "../../components/Skeleton";

const Posts = () => {
  const [posts, setPosts] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);
  if (loading) {
    return (
      <section className="py-10">
        <div className="grid grid-cols-1 gap-8">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Skeleton key={num} />
          ))}
        </div>
      </section>
    );
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <section className="py-10">
      <div className="grid grid-cols-1 gap-8">
        {posts.map((post) => (
          <Post key={post._id} {...post} />
        ))}
      </div>
    </section>
  );
};

export default Posts;
