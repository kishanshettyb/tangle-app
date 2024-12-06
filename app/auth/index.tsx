import { useSession } from "@/cxt";
import { z } from "zod";
import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthStore } from "../store/authStore";

export type LoginCredentials = {
	email: string;
};

// Define Zod schema for form validation
const authSchema = z.object({
	email: z.string().email("Invalid email address").nonempty("Please enter your email")
});

const formSchema = authSchema;

export default function SignIn() {
	const { signIn } = useSession();
	// Access Zustand store
	const { email, setEmail } = useAuthStore();
	const { control, handleSubmit, formState, setValue } = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email // Initialize form with Zustand state
		}
	});
	const { errors, isValid } = formState;

	// Handle form submission
	function onSubmit(values: z.infer<typeof formSchema>) {
		const { email } = values;
		setEmail(email); // Persist email to Zustand store
		router.push(`/auth/password?email=${email}`); // Navigate to password screen
	}

	return (
		<SafeAreaView className="justify-start flex-1">
			<View className="flex items-center justify-center p-6">
				{/* App Icon */}
				<Image source={require("../../assets/images/icon.png")} className="w-[70px] h-[70px] my-8" />

				{/* App Heading */}
				<Text className="mb-3 text-4xl font-semibold text-center">Tangle! Redefining Social Connections</Text>
				<Text className="mb-8 text-center text-md text-slate-500">Discover, share, and connect with a vibrant community. Tangle makes socializing more engaging and fun!</Text>

				{/* Email Input */}
				<Controller
					name="email"
					control={control}
					render={({ field: { onChange, value } }) => (
						<TextInput
							value={value}
							onChangeText={(text) => {
								onChange(text);
								setEmail(text); // Update Zustand state as the user types
							}}
							autoCapitalize="none"
							className="w-full p-4 mb-4 border rounded-xl border-slate-400"
							placeholder="Enter email"
							keyboardType="email-address"
						/>
					)}
				/>
				{/* Display validation error */}
				{errors.email && <Text className="mb-2 text-red-500">{errors.email.message}</Text>}

				{/* Submit Button */}
				<TouchableOpacity
					onPress={handleSubmit(onSubmit)}
					disabled={!isValid}
					className={`flex items-center justify-center w-full p-5 rounded-xl ${isValid ? "bg-slate-900" : "bg-gray-400"}`}
				>
					<Text className="text-lg text-white">Sign In with Email</Text>
				</TouchableOpacity>

				{/* Divider */}
				<View className="my-4">
					<Text>Or</Text>
				</View>

				{/* Google Sign-In Button */}
				<TouchableOpacity
					onPress={() => {
						signIn();
						router.replace("/");
					}}
					className="flex flex-row items-center justify-center w-full p-4 bg-white border shadow-2xl gap-x-4 shadow-purple-200 rounded-xl border-slate-100"
				>
					<View>
						<Image source={require("../../assets/images/google.png")} className="w-[20px] h-[20px]" />
					</View>
					<View>
						<Text>Sign In with Google</Text>
					</View>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
