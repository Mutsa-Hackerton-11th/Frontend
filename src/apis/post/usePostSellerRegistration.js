import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios";

export default function usePostSellerRegistration(userId) {
  const { mutate, data, isLoading, error, isSuccess } = useMutation({
    mutationKey: ["sellerRegistration"],
    mutationFn: async (data) => {
      const res = await axiosInstance.post(
        `/api/users/${userId}/seller-registration`,
        data
      );
      return res.data;
    },
  });

  return {
    sellerRegistration: mutate,
    isLoading,
    isSuccess,
    error,
    data,
  };
}
