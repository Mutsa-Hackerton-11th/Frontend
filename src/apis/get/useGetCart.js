import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios";

export default function useGetCart() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["getCart"],
    queryFn: async () => {
      const res = await axiosInstance.get("/api/cart");
      return res.data;
    },
  });

  return {
    getCart: data || null,
    isLoading,
    error,
  };
}
