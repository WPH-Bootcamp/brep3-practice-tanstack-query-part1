import { apiClient } from "../axios";
import type { QueryFunction } from "@tanstack/react-query";
import { type AxiosRequestConfig } from "axios";

export type Post = {
  id: number;
  title: string;
  body: string;
};

export type GetPostsResponse = {
  posts: Post[];
  totalPosts: number;
};

export type PostsQueryKey = [
  "posts",
  {
    limit: number;
    page: number;
  }
];

export const getPosts: QueryFunction<GetPostsResponse, PostsQueryKey> = async ({
  queryKey,
  signal,
}) => {
  const [, { limit, page }] = queryKey;
  const config: AxiosRequestConfig = {
    params: {
      _limit: limit,
      _page: page,
    },
    signal,
  };

  const response = await apiClient.get<Post[]>("/posts", config);

  return {
    posts: response.data,
    totalPosts: Number(response.headers["x-total-count"]),
  };
};
