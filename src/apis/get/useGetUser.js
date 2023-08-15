import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios";

export default function useGetUser() {
  //   const { data, isLoading, error } = useQuery({
  //     queryKey: ["user"],
  //     queryFn: async () => {
  //       const res = await axiosInstance.get("/api/user");
  //       return res.data;
  //     },
  //   });

  return {
    user: {
      isUser: true,
    },
  };
}
