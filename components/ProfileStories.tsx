import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

const ProfileStories = () => {
	const profile_stories = [
		{
			id: 2,
			username: "Elena",
			profilePicture: "https://i.ibb.co/N9YnGhP/img-2.png"
		},
		{
			id: 7,
			username: "Omar",
			profilePicture: "https://i.ibb.co/Y3ZKH4C/img-1.png"
		},
		{
			id: 3,
			username: "Sofia",
			profilePicture: "https://i.ibb.co/gzdYtSr/img-3.png"
		},
		{
			id: 5,
			username: "Luca",
			profilePicture: "https://i.ibb.co/j4YWgYR/img-5.png"
		},
		{
			id: 4,
			username: "Amara",
			profilePicture: "https://i.ibb.co/GRKNKZ4/img-4.png"
		},

		{
			id: 6,
			username: "Hiroshi",
			profilePicture: "https://i.ibb.co/gMBjtt9/img-6.png"
		},

		{
			id: 1,
			username: "tangle",
			profilePicture: "https://i.ibb.co/b2Xmc7R/icon.png"
		}
	];

	return (
		<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
			<View className="flex flex-row items-start justify-start gap-x-4">
				{profile_stories.map(function (item) {
					return (
						<View className="flex items-center justify-center">
							<View key={item.id} className="w-[80px] h-[80px] rounded-full border-2 flex justify-center items-center border-blue-500">
								<Image className="w-[70px] h-[70px] rounded-full" source={{ uri: item.profilePicture }} />
							</View>
							<Text className="mt-1 font-semibold">{item.username}</Text>
						</View>
					);
				})}
			</View>
		</ScrollView>
	);
};

export default ProfileStories;
