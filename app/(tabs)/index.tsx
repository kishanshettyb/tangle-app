import { View, Text } from "react-native";
import React from "react";
import ProfileStories from "@/components/ProfileStories";

const Home = () => {
	return (
		<View className="flex flex-1 p-4 bg-white">
			<ProfileStories />
		</View>
	);
};

export default Home;
