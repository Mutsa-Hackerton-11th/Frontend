import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios";

export default function usePostCart() {
  const queryClient = useQueryClient();
  const { mutate, data, isLoading, error, isSuccess } = useMutation({
    mutationKey: ["addCart"],
    mutationFn: async (data) => {
      const res = await axiosInstance.post("/api/cart", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["getCart"],
      });
    },
  });

  return {
    addCart: mutate,
    isLoading,
    isSuccess,
    error,
    data,
  };
}
