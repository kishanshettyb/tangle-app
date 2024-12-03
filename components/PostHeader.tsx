import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";

const PostHeader = ({ data }) => {
	return (
		<>
			{data.postType == "reel" ? (
				<View className="absolute z-50 flex flex-row items-center justify-between w-full px-4 py-2">
					<View className="flex flex-row items-center justify-start gap-x-4">
						<View>
							<Image source={{ uri: data.profileImage }} className="w-[40px] h-[40px] rounded-full" />
						</View>
						<View>
							<Text className="text-sm font-semibold text-white">{data.username}</Text>
						</View>
					</View>
					<View className="flex flex-row items-center gap-x-2">
						<TouchableOpacity className="px-4 py-2 border border-white rounded-lg">
							<Text className="text-white">Follow</Text>
						</TouchableOpacity>
						<View>
							<Feather name="more-vertical" size={24} color="white" />
						</View>
					</View>
				</View>
			) : (
				<View className="flex flex-row items-center justify-between w-full px-4 py-2">
					<View className="flex flex-row items-center justify-start gap-x-4">
						<View>
							<Image source={{ uri: data.profileImage }} className="w-[40px] h-[40px] rounded-full" />
						</View>
						<View>
							<Text className="text-sm font-semibold">{data.username}</Text>
						</View>
					</View>
					<View>
						<Feather name="more-vertical" size={24} color="black" />
					</View>
				</View>
			)}
		</>
	);
};

export default PostHeader;
