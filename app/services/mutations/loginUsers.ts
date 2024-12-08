import { useSession } from "@/cxt";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const LOGIN_URL = process.env.EXPO_PUBLIC_LOGIN_URL;

export const useLoginMutation = () => {
  const { signIn } = useSession();
  return useMutation({
    mutationFn: (loginData) => {
      return axios.post(LOGIN_URL, loginData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: (response) => {
      signIn(response);
    },
    onError: (error) => {
      console.log("failed" + JSON.stringify(error.response));
    },
  });
};
