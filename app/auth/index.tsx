import { useSession } from "@/cxt";
import { z } from "zod";
import { Link, router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { useColorScheme } from "nativewind";
import { useLoginMutation } from "../services/mutations/loginUsers";
import AntDesign from "@expo/vector-icons/AntDesign";

export type LoginCredentials = {
  identifier: string;
  password: string;
};

export type Login = {
  identifier: string;
  password: string;
};

// Define Zod schema for form validation
const authSchema = z.object({
  identifier: z.string().min(2, { message: "Please enter username" }),
  password: z.string().min(2, { message: "Please enter password" }),
});

const formSchema = authSchema;

export default function SignIn() {
  const { signIn } = useSession();
  const colorScheme = useColorScheme();
  const loginMutation = useLoginMutation();
  const [showPassword, setShowPassword] = useState(true);
  const togglePassword = () => setShowPassword(!showPassword);

  const errorText = "Invalid username or password";

  const { control, handleSubmit, formState } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const { isValid } = formState;

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { identifier, password } = values;
    const loginData: LoginCredentials = { identifier, password };
    loginMutation.mutate(loginData);
  }

  const errorMessage =
    loginMutation.error?.response?.data?.error?.message ===
    "Invalid identifier or password"
      ? errorText.replace(/"/g, "")
      : loginMutation.error?.response?.data?.error?.message;

  return (
    <SafeAreaView className="justify-start flex-1">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
        className="flex-1"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="flex flex-1 p-6">
            {/* App Icon */}
            <Image
              source={require("../../assets/images/icon.png")}
              className="w-[70px] h-[70px] my-8 mx-auto"
            />

            {/* App Heading */}
            <Text className="mb-3 text-4xl font-semibold text-center">
              Tangle!
            </Text>
            <Text className="mb-3 text-3xl font-semibold text-center">
              Redefining Social Connections
            </Text>
            <Text className="mb-14 text-center text-md text-slate-500">
              Discover, share, and connect with a vibrant community. Tangle
              makes socializing more engaging and fun!
            </Text>

            {/* Username Input */}
            <Text className="text-left font-semibold mb-1 text-lg">
              Username
            </Text>
            <Controller
              name="identifier"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  autoCapitalize="none"
                  className="w-full p-4 mb-4 border rounded-xl border-slate-400"
                  placeholder="Enter username or email"
                />
              )}
            />

            {/* Password Input */}
            <Text className="text-left font-semibold mb-1 text-lg">
              Password
            </Text>
            <View>
              <Controller
                name="password"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    secureTextEntry={showPassword}
                    autoCapitalize="none"
                    className="w-full p-4 mb-2 border rounded-xl border-slate-400"
                    placeholder="Enter your password"
                  />
                )}
              />
              <TouchableOpacity
                onPress={togglePassword}
                className="absolute right-[12px] top-[12px]"
              >
                <Feather
                  name={showPassword ? "eye" : "eye-off"}
                  size={20}
                  color={colorScheme === "dark" ? "#64748b" : "#000"}
                />
              </TouchableOpacity>
            </View>

            {/* Forgot Password Link */}
            <Link asChild href={"./auth/password"}>
              <TouchableOpacity>
                <Text className="text-right mb-2 text-slate-800">
                  Forgot Password
                </Text>
              </TouchableOpacity>
            </Link>

            {/* Submit Button */}
            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              disabled={loginMutation.isPending || !isValid}
              className={`flex flex-row items-center justify-center w-full p-5 rounded-xl ${
                isValid ? "bg-slate-900" : "bg-gray-400"
              }`}
            >
              {loginMutation.isPending ? (
                <>
                  <AntDesign
                    name="loading2"
                    size={20}
                    color="white"
                    className="mr-4 animate-spin"
                  />
                  <Text className="text-white">Loading...</Text>
                </>
              ) : (
                <Text className="text-lg text-white">Sign In</Text>
              )}
            </TouchableOpacity>

            {/* Error Message */}
            {errorMessage && (
              <Text className="text-red-600 text-center mt-1">
                {errorMessage}
              </Text>
            )}

            {/* Divider */}
            <View>
              <Text className="text-center text-xl my-2">or</Text>
            </View>

            {/* Google Sign-In Button */}
            <TouchableOpacity
              onPress={() => {
                signIn();
                router.replace("/");
              }}
              className="flex mb-10 flex-row items-center justify-center w-full p-4 bg-white border shadow-2xl gap-x-4 shadow-purple-200 rounded-xl border-slate-100"
            >
              <Image
                source={require("../../assets/images/google.png")}
                className="w-[20px] h-[20px]"
              />
              <Text>Sign In with Google</Text>
            </TouchableOpacity>
            <Text className="text-center">
              Don't have an Account?{" "}
              <Link asChild href={"/auth/register"}>
                <TouchableOpacity>
                  <Text className="text-purple-600">Register</Text>
                </TouchableOpacity>
              </Link>
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
