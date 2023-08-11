import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios";

export default function usePostLoginCustomer() {
  const { mutate, data, isLoading, error, isSuccess } = useMutation({
    mutationKey: ["loginCustomer"],
    mutationFn: async (data) => {
      const res = await axiosInstance.post("/api/login-customer", data);
      return res.data;
    },
  });

  return {
    loginCustomer: mutate,
    isLoading,
    isSuccess,
    error,
    data,
  };
}
