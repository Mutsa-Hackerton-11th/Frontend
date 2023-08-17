import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios";

export default function useGetBrandProducts(company_name) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["brandProducts", company_name],
    queryFn: async () => {
      const res = await axiosInstance.get(`/api/brands/${company_name}`);
      console.log(res.data);
      return res.data;
    },
  });

  return {
    brandProducts: data || null,
    isLoading,
    error,
  };
}
