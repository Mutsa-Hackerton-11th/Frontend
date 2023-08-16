import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios";

export default function usePostSignUp() {
  const { mutate, data, isLoading, error, isSuccess } = useMutation({
    mutationKey: ["signUp"],
    mutationFn: async (data) => {
      console.log("userPostSignUp");
      console.log(data);
      const res = await axiosInstance.post(`/sellers/signup/`, data);
      return res.data;
    },
  });

  return {
    signUp: mutate,
    isLoading,
    isSuccess,
    error,
    data,
  };
}
