import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useSession } from "@/cxt";

const ProfileCard = () => {
  const { userName } = useSession();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View className="border border-slate-100  rounded-2xl">
      <View className="flex flex-row justify-between items-center  p-4">
        <View className="border-2 w-[90px]  h-[90px] rounded-full flex justify-center items-center  border-purple-700">
          <TouchableOpacity className="relative" onPress={toggleModal}>
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
      <Modal
        visible={isModalVisible}
        transparent={true}
        className="bg-slate-50"
      >
        <View style={styles.overlay} onTouchEnd={toggleModal} />
        <View className="flex bg-white  shadow-2xl shadow-slate-100 absolute   bottom-0 h-[200px] rounded-t-3xl p-4 w-full">
          <TouchableOpacity className="flex justify-center   items-center rounded text-center">
            <View className="h-[5px] bg-slate-500 w-[40px] rounded" />
          </TouchableOpacity>
          <View className="flex border rounded-2xl border-slate-50 mt-5 mb-7 px-4 py-2 flex-row justify-between items-center w-full">
            <View>
              <Feather name="x" size={18} color="black" />
            </View>
            <View>
              <Text className="text-xl">Profile Photo</Text>
            </View>
            <View>
              <Feather name="trash" size={18} color="black" />
            </View>
          </View>
          <View className="flex mb-5  px-6 flex-row justify-between items-center w-full">
            <View>
              <View className="border w-[44px] h-[44px] rounded-full border-slate-100 flex justify-center items-center text-center m-auto">
                <Feather name="camera" size={18} color="#9333ea" />
              </View>
              <Text className="text-sm">Camera</Text>
            </View>
            <View>
              <View className="border w-[44px] h-[44px] rounded-full border-slate-100 flex justify-center items-center text-center m-auto">
                <Feather name="image" size={18} color="#9333ea" />
              </View>
              <Text className="text-sm">Gallery</Text>
            </View>
            <View>
              <View className="border w-[44px] h-[44px] rounded-full border-slate-100 flex justify-center items-center text-center m-auto">
                <Feather name="user" size={18} color="#9333ea" />
              </View>
              <Text className="text-sm">Avatar</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)", // Light black background with transparency
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
