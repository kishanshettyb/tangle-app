import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useColorScheme } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";

const Password = () => {
	const [text, setText] = useState("");
	const [showPassword, setShowPassword] = useState(true);
	const local = useLocalSearchParams();

	const togglePassword = () => {
		setShowPassword(!showPassword);
	};
	const colorScheme = useColorScheme(); // Get the current color scheme (light/dark)

	return (
		<SafeAreaView className="items-center justify-start flex-1 p-6">
			<View className="flex items-center justify-center">
				<Image source={require("../../assets/images/icon.png")} className="w-[70px] h-[70px] my-8" />

				<Text className="mb-3 text-4xl font-semibold text-center">Choose your Password</Text>
				<Text className="mb-8 text-center text-md text-slate-500">Input your password for access your account</Text>
			</View>
			<View className="relative w-full">
				<TextInput
					className="w-full p-4 mb-4 border rounded-xl border-slate-400"
					placeholder="Enter your password"
					onChangeText={(newText) => setText(newText)}
					defaultValue={text}
					secureTextEntry={showPassword}
				/>
				<TouchableOpacity onPress={togglePassword} className="absolute right-[12px] top-[12px]">
					<Feather name={showPassword ? "eye" : "eye-off"} size={20} color={colorScheme === "dark" ? "#64748b" : "#000"} />
				</TouchableOpacity>
			</View>
			<Link asChild href={"/auth/bio"}>
				<TouchableOpacity className="flex items-center justify-center w-full p-5 bg-slate-900 rounded-xl">
					<Text className="text-lg text-white">Submit</Text>
				</TouchableOpacity>
			</Link>
		</SafeAreaView>
	);
};

export default Password;
