import { apiClient } from "../axios";

export type CreatePostPayload = {
  title: string;
  body: string;
};

export async function createPost(payload: CreatePostPayload) {
  const response = await apiClient.post("/posts", payload);
  return response.data;
}
