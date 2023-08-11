import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios";

export default function useGetBrandProducts(id) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["brandProducts"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/api/brands/${id}`);
      return res.data;
    },
  });

  return {
    bestSellers: data || null,
    isLoading,
    error,
  };
}
