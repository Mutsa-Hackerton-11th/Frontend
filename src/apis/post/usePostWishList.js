import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios";

export default function usePostWishList() {
  const queryClient = useQueryClient();
  const { mutate, data, isLoading, error, isSuccess } = useMutation({
    mutationKey: ["addWishList"],
    mutationFn: async (data) => {
      const res = await axiosInstance.post("/api/wishlist", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["wishList"],
      });
    },
  });

  return {
    addWishList: mutate,
    isLoading,
    isSuccess,
    error,
    data,
  };
}
