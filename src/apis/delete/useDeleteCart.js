import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios";

export default function useDeleteCart() {
  const queryClient = useQueryClient();
  const { mutate, data, isLoading, error, isSuccess } = useMutation({
    mutationKey: ["deleteCart"],
    mutationFn: async (data) => {
      const res = await axiosInstance.post("/api/cart/delete", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["cart"],
      });
    },
  });

  return {
    deleteCart: mutate,
    isLoading,
    isSuccess,
    error,
    data,
  };
}
