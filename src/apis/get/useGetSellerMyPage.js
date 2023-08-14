import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios";

export default function useGetSellerMyPage(userId) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["sellerMyPage"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/api/users/${userId}/mypage-seller`);
      return res.data;
    },
  });

  return {
    sellerMyPage: data || null,
    isLoading,
    error,
  };
}
