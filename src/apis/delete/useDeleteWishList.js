import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios";

export default function useDeleteWishList() {
  const queryClient = useQueryClient();
  const { mutate, data, isLoading, isSuccess, error } = useMutation({
    mutationKey: ["deleteWishList"],
    mutationFn: async (data) => {
      const res = await axiosInstance.delete(`/api/wishlist/delete`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["wishList"],
      });
    },
  });

  return {
    deleteWishList: mutate,
    data,
    isLoading,
    error,
    isSuccess,
  };
}
