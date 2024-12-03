import { View, Text, Image } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";

const PostFooter = ({ data }) => {
	return (
		<>
			<View className="flex flex-row items-center justify-between p-4">
				<View className="flex flex-row items-center justify-start gap-x-4">
					<View className="flex flex-row items-center justify-start gap-x-2">
						<View>
							<Feather name="heart" size={24} color="black" />
						</View>
						<View>
							<Text>{data.likes}</Text>
						</View>
					</View>
					<View className="flex flex-row items-center justify-start gap-x-2">
						<View>
							<Feather name="message-circle" size={24} color="black" />
						</View>
						<View>
							<Text>{data.comments}</Text>
						</View>
					</View>
					<View className="flex flex-row items-center justify-start gap-x-2">
						<View>
							<Feather name="share-2" size={24} color="black" />
						</View>
						<View>
							<Text>{data.shares}</Text>
						</View>
					</View>
				</View>
				<View>
					<Feather name="bookmark" size={24} color="black" />
				</View>
			</View>
			<View className="px-4">
				<View className="flex flex-row items-center justify-start">
					<Image source={require("../assets/images/profile.png")} className="w-[20px] h-[20px] rounded-full border border-white" />
					<Image source={require("../assets/images/profile.png")} className="w-[20px] h-[20px] rounded-full -ml-2 border border-white" />
					<Text className="ml-2 opacity-70">
						Liked by <Text className="font-semibold">tangle</Text> and <Text className="font-semibold">others</Text>
					</Text>
				</View>
				<View>
					<Text numberOfLines={2} className="my-2">
						{data.description}
					</Text>
					<Text className="text-sm text-slate-500">{data.createdDate}</Text>
				</View>
			</View>
		</>
	);
};

export default PostFooter;
