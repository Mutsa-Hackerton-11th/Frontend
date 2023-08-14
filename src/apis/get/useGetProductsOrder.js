import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios";

export default function useGetProductsOrder() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["productsOrder"],
    queryFn: async () => {
      const res = await axiosInstance.get("/api/products/order");
      return res.data;
    },
  });

  return {
    productsOrder: data || null,
    isLoading,
    error,
  };
}
