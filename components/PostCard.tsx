import React, { FunctionComponent } from "react";
import { Image, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";

const PostCard = () => {
  return (
    <View className="mb-6">
      <View className="px-4 flex  flex-row py-2  w-full justify-between items-center">
        <View className="flex items-center justify-start flex-row gap-x-4">
          <View>
            <Image
              source={require("../assets/images/profile.png")}
              className="w-[40px] h-[40px] rounded-full"
            />
          </View>
          <View>
            <Text className="text-sm font-semibold">Elena</Text>
          </View>
        </View>
        <View>
          <Feather name="more-vertical" size={24} color="black" />
        </View>
      </View>
      <View>
        <Image
          className="w-full h-[300px] object-cover"
          source={require("../assets/images/profile.png")}
        />
      </View>
      <View className="flex p-4 flex-row justify-between items-center">
        <View className="flex flex-row justify-start items-center gap-x-4">
          <View className="flex gap-x-2 justify-start items-center flex-row">
            <View>
              <Feather name="heart" size={24} color="black" />
            </View>
            <View>
              <Text>1</Text>
            </View>
          </View>
          <View className="flex gap-x-2 justify-start items-center flex-row">
            <View>
              <Feather name="message-circle" size={24} color="black" />
            </View>
            <View>
              <Text>1</Text>
            </View>
          </View>
          <View className="flex gap-x-2 justify-start items-center flex-row">
            <View>
              <Feather name="share-2" size={24} color="black" />
            </View>
            <View>
              <Text>1</Text>
            </View>
          </View>
        </View>
        <View>
          <Feather name="bookmark" size={24} color="black" />
        </View>
      </View>
      <View className="px-4">
        <View className="flex flex-row justify-start items-center">
          <Image
            source={require("../assets/images/profile.png")}
            className="w-[20px] h-[20px] rounded-full border border-white"
          />
          <Image
            source={require("../assets/images/profile.png")}
            className="w-[20px] h-[20px] rounded-full -ml-2 border border-white"
          />
          <Text className="ml-2 opacity-70">
            Liked by <Text className="font-semibold">tangle</Text> and{" "}
            <Text className="font-semibold">others</Text>
          </Text>
        </View>
        <View>
          <Text numberOfLines={2} className="my-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic odit
            voluptatem, labore quo autem consectetur eaque? Laudantium libero
            eligendi tempore nesciunt ipsam, eaque amet culpa quos ut
            exercitationem, molestias fuga!
          </Text>
          <Text className="text-slate-500 text-sm">01 December</Text>
        </View>
      </View>
    </View>
  );
};

export default PostCard;
