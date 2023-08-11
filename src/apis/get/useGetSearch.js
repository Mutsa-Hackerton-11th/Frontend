import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios";

export default function useGetSearch() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["search"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/api/search`);
      return res.data;
    },
  });

  return {
    search: data || null,
    isLoading,
    error,
  };
}
