import axios from "axios";

export type Register = {
  username: string;
  password: string;
};

export type Login = {
  identifier: string;
  password: string;
};

const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_URL,
});

export const registerUser = async (data: Register) => {
  return await axiosInstance.post("register", data);
};

export const loginUser = async (data: Login) => {
  return await axiosInstance.post("login", data);
};
