import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useColorScheme } from "nativewind";
import { useLocalSearchParams } from "expo-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "../services/mutations/registerUser";

export type LoginCredentials = {
	password: string;
	username: string;
};

export const passwordSchema = z.object({
	password: z.string().min(8, "Password must be at least 8 characters.").max(12, "Password must not exceed 12 characters.")
	// .regex(/^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/, "Password must have at least one uppercase letter and one special character.")
});

const formSchema = passwordSchema;

const Password = () => {
	const loginMutation = useLoginMutation();
	const local = useLocalSearchParams();
	const [showPassword, setShowPassword] = useState(true);
	const togglePassword = () => {
		setShowPassword(!showPassword);
	};
	const { control, handleSubmit, formState } = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			password: "",
			email: ""
		}
	});

	const { errors, isValid } = formState;

	function getUsernameFromEmail(email) {
		if (typeof email !== "string") {
			throw new Error("Invalid email address");
		}
		const atIndex = email.indexOf("@");
		if (atIndex === -1) {
			throw new Error("Not a valid email format");
		}
		return email.substring(0, atIndex);
	}

	function onSubmit(values: z.infer<typeof formSchema>) {
		const { password } = values;
		const loginData: LoginCredentials = {
			username: getUsernameFromEmail(local.email),
			password: password,
			email: local.email
		};
		console.log("loginData+" + JSON.stringify(loginData));
		loginMutation.mutate(loginData);
	}
	const colorScheme = useColorScheme(); // Get the current color scheme (light/dark)

	return (
		<SafeAreaView className="items-center justify-start flex-1 p-6">
			<View className="flex items-center justify-center">
				<Image source={require("../../assets/images/icon.png")} className="w-[70px] h-[70px] my-8" />

				<Text className="mb-3 text-4xl font-semibold text-center">Choose your Password</Text>
				<Text className="mb-8 text-center text-md text-slate-500">Input your password for access your account</Text>
			</View>
			<View className="relative w-full">
				<Controller
					name="password"
					control={control}
					render={({ field: { onChange, value } }) => (
						<TextInput
							value={value}
							onChangeText={(text) => {
								onChange(text);
							}}
							secureTextEntry={showPassword}
							autoCapitalize="none"
							className="w-full p-4 mb-4 border rounded-xl border-slate-400"
							placeholder="Enter your password"
							secureTextEntry={showPassword}
						/>
					)}
				/>
				{errors.password && <Text className="mb-2 text-red-500">{errors.password.message}</Text>}
				<TouchableOpacity onPress={togglePassword} className="absolute right-[12px] top-[12px]">
					<Feather name={showPassword ? "eye" : "eye-off"} size={20} color={colorScheme === "dark" ? "#64748b" : "#000"} />
				</TouchableOpacity>
			</View>
			<TouchableOpacity onPress={handleSubmit(onSubmit)} className="flex items-center justify-center w-full p-5 bg-slate-900 rounded-xl">
				<Text className="text-lg text-white">Submit</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default Password;
