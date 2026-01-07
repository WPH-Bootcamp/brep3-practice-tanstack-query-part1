import { queryOptions } from "@tanstack/react-query";
import { getPosts, type PostsQueryKey } from "../api/posts/getPosts";

export const postsKeys = {
  all: ["posts"] as const,
  list: (params: { limit: number; page: number }): PostsQueryKey => [
    "posts",
    params,
  ],
};

export const postsOptions = (
  params?: Partial<{ limit: number; page: number }>
) => {
  const { limit = 10, page = 1 } = params ?? {};
  return queryOptions({
    queryKey: postsKeys.list({ limit, page }),
    queryFn: getPosts,
  });
};
