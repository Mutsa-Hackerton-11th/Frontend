import { useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios";

export default function useGetCategoryProducts(category) {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["categoryProducts", category],
    queryFn: async () => {
      const res = await axiosInstance.get(`/api/products/${category}`);
      return res.data;
    },
  });

  return {
    categoryProducts: data || null,
    isLoading,
    error,
  };
}
