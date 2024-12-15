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
import Tab1 from "@/components/Profile/Tab1";
import Tab2 from "@/components/Profile/Tab2";
import Tab3 from "@/components/Profile/Tab3";
import ProfileCard from "@/components/Profile/ProfileCard";
import useAuthStore from "@/app/store/authStore";

const Profile = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "tab1",
      name: "Post",
      title: <Feather name="grid" size={16} color="black" />,
    },
    {
      key: "tab2",
      name: "Reels",
      title: <Feather name="video" size={16} color="black" />,
    },
    {
      key: "tab3",
      name: "Tags",
      title: <Feather name="tag" size={16} color="black" />,
    },
  ]);

  const renderScene = SceneMap({
    tab1: Tab1,
    tab2: Tab2,
    tab3: Tab3,
  });
  const username = useAuthStore((state) => state.username); // Access username

  const renderTabBar = (props: any) => (
    <View className="flex bg-slate-50 rounded-2xl  mt-5  flex-row  justify-around">
      {props.navigationState.routes.map((route: any, i: number) => {
        const isFocused = index === i;
        return (
          <View
            className={
              isFocused
                ? "px-4 py-2  border-2 border-x-0  gap-y-2 justify-center items-center flex border-t-0 border-b-purple-600 "
                : "px-4 py-2 gap-y-2 justify-center items-center flex opacity-50"
            }
            key={route.key}
            onTouchStart={() => setIndex(i)}
          >
            {route.title}
            <Text>{route.name}</Text>
          </View>
        );
      })}
    </View>
  );

  return (
    <ScrollView className="p-4 bg-white">
      <ProfileCard userName={username} />
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
