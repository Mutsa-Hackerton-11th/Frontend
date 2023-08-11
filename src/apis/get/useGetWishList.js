import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios";

export default function useGetWishList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["wishList"],
    queryFn: async () => {
      const res = await axiosInstance.get("/api/wishlist");
      return res.data;
    },
  });

  return {
    wishList: data || null,
    isLoading,
    error,
  };
}
