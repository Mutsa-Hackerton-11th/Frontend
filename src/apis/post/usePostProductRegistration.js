import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios";

export default function usePostProductRegistration(userId) {
  const { mutate, data, isLoading, error, isSuccess } = useMutation({
    mutationKey: ["productRegistration"],
    mutationFn: async (data) => {
      const res = await axiosInstance.post(
        `/api/users/${userId}/product-registration`,
        data
      );
      return res.data;
    },
  });

  return {
    postRegistration: mutate,
    isLoading,
    isSuccess,
    error,
    data,
  };
}
