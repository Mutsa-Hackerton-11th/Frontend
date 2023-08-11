import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios";

export default function useGetProductDetails(pid) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["productDetails"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/api/products/${pid}`);
      return res.data;
    },
  });

  return {
    productDetails: data || null,
    isLoading,
    error,
  };
}
