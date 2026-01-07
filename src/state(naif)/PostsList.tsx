import { useEffect, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

interface PostList {
  title: string;
}

const PostList = () => {
  const [posts, setPosts] = useState<PostList[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    async function fetchPost() {
      try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
          throw new Error("Kek nya ada yang salah dehh...");
        }

        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error: unknown) {
        setError(
          error instanceof Error ? error.message : "Failed to fetch data..."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, []);

  if (loading) return <div>loading....</div>;
  if (error) return <div>Eror nich : {error}</div>;

  console.log(posts);
  return (
    <div>
      <h1>PostList</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
