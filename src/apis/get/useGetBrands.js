import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios";

export default function useGetBrands() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["brands"],
    queryFn: async () => {
      const res = await axiosInstance.get("/api/brands");
      return res.data;
    },
  });

  return {
    brands: data || null,
    isLoading,
    error,
  };
}
