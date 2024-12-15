import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
import { TabView, SceneMap } from "react-native-tab-view";
import TabComponents from "@/components/TabComponent";
import Tab1 from "@/components/Profile/Tab1";
import Tab2 from "@/components/Profile/Tab2";
import Tab3 from "@/components/Profile/Tab3";
const Profile = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "tab1", title: <Feather name="grid" size={24} color="black" /> },
    { key: "tab2", title: <Feather name="video" size={24} color="black" /> },
    { key: "tab3", title: <Feather name="tag" size={24} color="black" /> },
  ]);

  const renderScene = SceneMap({
    tab1: Tab1,
    tab2: Tab2,
    tab3: Tab3,
  });

  const renderTabBar = (props: any) => (
    <View>
      {props.navigationState.routes.map((route: any, i: number) => {
        const isFocused = index === i;
        return (
          <View key={route.key} onTouchStart={() => setIndex(i)}>
            {route.title}
            <Text>{route.key}</Text>
          </View>
        );
      })}
    </View>
  );

  return (
    <ScrollView className="p-4 bg-white">
      <View className="border border-slate-100  rounded-2xl">
        <View className="flex flex-row justify-between items-center  p-4">
          <View className="border-2 w-[90px]  h-[90px] rounded-full flex justify-center items-center  border-purple-700">
            <TouchableOpacity className="relative">
              <Image
                source={require("../../../../assets/images/icon.png")}
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
          <Text className="font-semibold text-xl">Username</Text>
          <Text className="text-md my-1" numberOfLines={2}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            soluta dolor rerum! Excepturi dolor earum provident enim molestiae,
            explicabo eligendi perferendis blanditiis obcaecati officia eveniet
            nihil laudantium tempore. Harum, error.
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

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar} // Custom tab bar
      />
    </ScrollView>
  );
};

export default Profile;
