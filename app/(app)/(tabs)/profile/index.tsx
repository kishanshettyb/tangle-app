import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { TabView, SceneMap } from "react-native-tab-view";
import Tab1 from "@/components/Profile/Tab1";
import Tab2 from "@/components/Profile/Tab2";
import Tab3 from "@/components/Profile/Tab3";
import ProfileCard from "@/components/Profile/ProfileCard";

const Profile = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "tab1",
      name: "Post",
      title: <Feather name="grid" size={22} color="black" />,
    },
    {
      key: "tab2",
      name: "Reels",
      title: <Feather name="video" size={22} color="black" />,
    },
    {
      key: "tab3",
      name: "Tags",
      title: <Feather name="tag" size={22} color="black" />,
    },
  ]);

  const renderScene = ({ route }: { route: { key: string } }) => {
    switch (route.key) {
      case "tab1":
        return <Tab1 />;
      case "tab2":
        return <Tab2 />;
      case "tab3":
        return <Tab3 />;
      default:
        return null;
    }
  };
  const renderTabBar = (props: any) => (
    <View className="rounded-2xl border border-slate-50 bg-slate-50    my-5  flex-row  justify-around">
      {props.navigationState.routes.map((route: any, i: number) => {
        const isFocused = index === i;
        return (
          <View
            className={
              isFocused
                ? "px-4 py-2  border-2 border-x-0  gap-y-2 justify-center items-center flex border-t-0 border-b-purple-600 "
                : "px-4 py-2 gap-y-2 justify-center items-center flex opacity-30"
            }
            key={route.key}
            onTouchStart={() => setIndex(i)}
          >
            {route.title}
            <Text className="text-xs">{route.name}</Text>
          </View>
        );
      })}
    </View>
  );

  return (
    <ScrollView
      className="p-4 bg-white"
      contentContainerStyle={styles.scrollViewContent}
    >
      <ProfileCard />
      <View className="flex-1 ">
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={renderTabBar} // Custom tab bar
        />
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: "white",
  },
});
