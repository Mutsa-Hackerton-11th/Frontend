import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios";

export default function useGetBestSellers() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["bestSellers"],
    queryFn: async () => {
      const res = await axiosInstance.get("/api/products/best-sellers");
      return res.data;
    },
  });

  return {
    bestSellers: data || null,
    isLoading,
    error,
  };
}
