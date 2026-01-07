import { useQuery } from "@tanstack/react-query";
import { postsOptions } from "../../queries/posts";
import type { Post } from "../../api/posts/getPosts";

type UseGetPostsReturn = {
  posts: Post[];
  totalPosts: number;
  isFetching: boolean;
  error: Error | null;
};

export const useGetPosts = (params?: {
  limit?: number;
  page?: number;
}): UseGetPostsReturn => {
  const { data, isFetching, error } = useQuery(postsOptions(params));
  return {
    posts: data?.posts ?? [],
    totalPosts: data?.totalPosts ?? 0,
    isFetching,
    error,
  };
};
