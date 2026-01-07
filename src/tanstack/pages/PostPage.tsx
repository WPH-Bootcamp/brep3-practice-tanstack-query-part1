import { useQueryClient } from "@tanstack/react-query";
import { useGetPosts } from "../hooks/posts/useGetPosts";
import { postsKeys } from "../queries/posts";

export default function PostPage() {
  const queryClient = useQueryClient();

  const { posts, isFetching } = useGetPosts({ limit: 10, page: 1 });
  return (
    <div>
      <h1>Posts Page {isFetching && "(Refreshing)"}</h1>
      <button
        onClick={() => {
          queryClient.invalidateQueries({ queryKey: postsKeys.all });
        }}
      >
        Invalidate Posts
      </button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
