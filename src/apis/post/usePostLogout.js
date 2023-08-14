import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios";

export default function usePostLogout() {
  const { mutate, data, isLoading, error, isSuccess } = useMutation({
    mutationKey: ["logOut"],
    mutationFn: async (data) => {
      const res = await axiosInstance.post(`/api/logout`, data);
      return res.data;
    },
  });

  return {
    logOut: mutate,
    isLoading,
    isSuccess,
    error,
    data,
  };
}
