import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios";

export default function useDeleteSignOut() {
  const { mutate, data, isLoading, error, isSuccess } = useMutation({
    mutationKey: ["signOut"],
    mutationFn: async (data) => {
      const res = await axiosInstance.post(`/api/signout`, data);
      return res.data;
    },
  });

  return {
    signOut: mutate,
    isLoading,
    isSuccess,
    error,
    data,
  };
}
