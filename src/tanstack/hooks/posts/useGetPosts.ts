import { useQuery } from "@tanstack/react-query";
import { postsOptions } from "../../queries/posts";
import type { Post } from "../../api/posts/getPosts";

type UseGetPostsReturn = {
  posts: Post[];
  totalPosts: number;
  isFetching: boolean;
  error: Error | null;
  refetch: () => void;
};

export const useGetPosts = (params?: {
  limit?: number;
  page?: number;
}): UseGetPostsReturn => {
  const query = useQuery(postsOptions(params));
  return {
    posts: query.data?.posts ?? [],
    totalPosts: query.data?.totalPosts ?? 0,
    isFetching: query.isFetching,
    error: query.error,
    refetch: query.refetch,
  };
};
