import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10_000, // staleTime -> berapa lama data dianggap MASIH FRESH (masih dipercaya)
      gcTime: 5 * 60_000, // cacheTime / gcTime (gc = garbage collection) -> berapa lama data cache disimpan di memori
      refetchOnWindowFocus: true,
      retry: 1,
    },
  },
});
