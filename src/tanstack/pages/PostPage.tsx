import { useGetPosts } from "../hooks/posts/useGetPosts";
import { useCreatePost } from "../hooks/posts/useCreatePost";

export default function PostPage() {
  const { posts, isFetching, error } = useGetPosts({ limit: 10, page: 1 });
  const createPost = useCreatePost();

  if (error) return <div style={{ color: "red" }}>{error.message}</div>;
  return (
    <div>
      <h1>Posts Page {isFetching && "(Refreshing)"}</h1>
      <button
        onClick={() =>
          createPost.mutate({
            title: "Post baru",
            body: "Contoh untuk mutation",
          })
        }
      >
        Create Post
      </button>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
