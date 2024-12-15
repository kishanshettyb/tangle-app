import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSession } from "@/cxt";

const ProfileCard = () => {
  const { userName } = useSession();

  return (
    <View className="border border-slate-100  rounded-2xl">
      <View className="flex flex-row justify-between items-center  p-4">
        <View className="border-2 w-[90px]  h-[90px] rounded-full flex justify-center items-center  border-purple-700">
          <TouchableOpacity className="relative">
            <Image
              source={require("../../assets/images/icon.png")}
              className="w-[80px] h-[80px] rounded-full  "
            />
            <View className="absolute bottom-0 -right-3 shadow border border-slate-50 shadow-slate-200 w-[30px] h-[30px] flex justify-center items-center rounded-full bg-white">
              <Feather name="camera" size={16} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text className="text-2xl font-semibold text-center">2</Text>
          <Text className="text-lg  text-center">post</Text>
        </View>
        <View>
          <Text className="text-2xl font-semibold text-center">5</Text>
          <Text className="text-lg  text-center">followers</Text>
        </View>
        <View>
          <Text className="text-2xl font-semibold text-center">7</Text>
          <Text className="text-lg  text-center">following</Text>
        </View>
      </View>
      <View className="px-6 pb-4">
        <Text className="font-semibold text-xl">{userName}</Text>
        <Text className="text-md my-1" numberOfLines={2}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias soluta
          dolor rerum! Excepturi dolor earum provident enim molestiae, explicabo
          eligendi perferendis blanditiis obcaecati officia eveniet nihil
          laudantium tempore. Harum, error.
        </Text>
        <Link
          className="text-purple-600"
          href="https://www.makemyonlinestore.in"
        >
          <Feather name="link" size={14} color="#9333ea" />{" "}
          <Text className="text-md">links</Text>
        </Link>
      </View>
    </View>
  );
};

export default ProfileCard;
