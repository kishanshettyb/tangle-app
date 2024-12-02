import { View, Text, Image } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";

const Notifications = () => {
  return (
    <View className="flex flex-row items-center justify-center mr-6 gap-x-6">
      <View>
        <Feather name="message-circle" size={24} color="black" />
      </View>
      <View>
        <Feather name="bell" size={24} color="black" />
      </View>
    </View>
  );
};

export default Notifications;
