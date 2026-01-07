import axios, { type AxiosRequestConfig } from "axios";
import type { QueryFunction } from "@tanstack/react-query";

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

  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
    config
  );

  return {
    posts: response.data,
    totalPosts: 100,
  };
};
