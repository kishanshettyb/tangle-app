import { useSession } from "@/cxt";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { router } from "expo-router";

const REGISTER_URL = process.env.EXPO_PUBLIC_REGISTER_URL;

export const useRegisterMutation = () => {
  const { signIn } = useSession();
  return useMutation({
    mutationFn: (loginData) => {
      return axios.post(REGISTER_URL as string, loginData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: (response) => {
      signIn(response);
    },
    onError: (error) => {
      console.log("Registration failed:", error.response?.data?.error?.message);
      if (
        error.response?.data?.error?.message ==
        "Email or Username are already taken"
      ) {
        router.push(
          `/auth/register?register_error=${error.response?.data?.error?.message}`
        );
      }
    },
  });
};
export default useRegisterMutation;
