import { View, Text, Image } from "react-native";
import React from "react";

const Logo = () => {
	return (
		<View className="flex flex-row items-center justify-center gap-x-2">
			<Image source={require("../assets/images/icon.png")} className="w-[42px] h-[42px] object-contain" />
			<Text className="text-5xl dark:text-white font-kantumruy">tangle</Text>
		</View>
	);
};

export default Logo;
