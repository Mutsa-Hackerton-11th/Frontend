import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios";

export default function usePostLoginSeller() {
  const { mutate, data, isLoading, error, isSuccess } = useMutation({
    mutationKey: ["loginSeller"],
    mutationFn: async (data) => {
      const res = await axiosInstance.post(`/api/login-seller`, data);
      return res.data;
    },
  });

  return {
    loginSeller: mutate,
    isLoading,
    isSuccess,
    error,
    data,
  };
}
