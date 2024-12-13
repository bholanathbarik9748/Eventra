import { apiClient } from "@/src/utils/Api";
import { loginBody } from "../Types/Types";

export const loginUser = async (data: loginBody): Promise<any> => {
  try {
    const response = await apiClient.post("/login", data);
    return response?.data;
  } catch (error) {
    throw error;
  }
};
