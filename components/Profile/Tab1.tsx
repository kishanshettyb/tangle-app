import React, { FunctionComponent } from "react";
import { Image, ScrollView, Text, View } from "react-native";

const Tab1 = () => {
  return (
    <ScrollView>
      <View className="flex flex-row justify-between flex-wrap p-4 gap-3 bg-slate-50 rounded-2xl">
        <View className="basis-[48%]">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1493166228553-4fa0fdb916e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            className="w-full h-[150px] rounded"
          />
        </View>
        <View className="basis-[48%]">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            className="w-full h-[150px] rounded"
          />
        </View>
        <View className="basis-[48%]">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1493166228553-4fa0fdb916e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            className="w-full h-[150px] rounded"
          />
        </View>
        <View className="basis-[48%]">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            className="w-full h-[150px] rounded"
          />
        </View>
        <View className="basis-[48%]">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1493166228553-4fa0fdb916e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            className="w-full h-[150px] rounded"
          />
        </View>
        <View className="basis-[48%]">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            className="w-full h-[150px] rounded"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Tab1;
