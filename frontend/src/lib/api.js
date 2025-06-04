import { axiosInstance } from "./axios";

export const signup = async () => {
  const response = await axiosInstance.post("/auth/signup", signupData);
  return response.data;
};
