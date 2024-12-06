import { Text, ScrollView } from "react-native";
import React from "react";
import ProfileStories from "@/components/ProfileStories";
import PostCard from "@/components/PostCard";
import { useSession } from "@/cxt";

const Home = () => {
	const { signOut } = useSession();
	return (
		<ScrollView showsHorizontalScrollIndicator={false} className="flex flex-1 bg-white">
			<ProfileStories />
			<PostCard />
			<Text
				className="my-5 text-center"
				onPress={() => {
					signOut();
				}}
			>
				Sign Out
			</Text>
		</ScrollView>
	);
};

export default Home;
