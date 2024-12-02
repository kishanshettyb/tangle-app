import { View, Text, ScrollView } from "react-native";
import React from "react";
import ProfileStories from "@/components/ProfileStories";
import PostCard from "@/components/PostCard";

const Home = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      className="flex flex-1  bg-white"
    >
      <ProfileStories />
      <PostCard />
    </ScrollView>
  );
};

export default Home;
