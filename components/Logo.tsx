import { View, Text, Image } from "react-native";
import React from "react";

const Logo = () => {
	return (
		<View className="flex flex-row items-center justify-center gap-x-2">
			<Image source={require("../assets/images/icon.png")} className="w-[30px] h-[30px]" />
			<Text className="text-3xl dark:text-white font-kantumruy"></Text>
		</View>
	);
};

export default Logo;
