import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios";

export default function useGetNewSellers() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["newSellers"],
    queryFn: async () => {
      const res = await axiosInstance.get("/api/products/new-sellers");
      return res.data;
    },
  });

  return {
    newSellers: data || null,
    isLoading,
    error,
  };
}
