import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../../api/posts/createPost";
import { postsKeys } from "../../queries/posts";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: postsKeys.all,
        refetchType: "active",
      });
    },
  });
};
