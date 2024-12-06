import { Register } from "@/app/types/auth";
import axios from "axios";

const axiosInstance = axios.create({
	baseURL: process.env.EXPO_PUBLIC_BASE_URL
});

export const registerUser = async (data: Register) => {
	return await axiosInstance.post("register", data);
};
