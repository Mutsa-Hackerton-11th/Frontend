import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios";

export default function useGetCustomerMyPage(userId) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["customerMyPage"],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/api/users/${userId}/mypage-customer`
      );
      return res.data;
    },
  });

  return {
    customerMyPage: data || null,
    isLoading,
    error,
  };
}
