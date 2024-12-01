import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import Logo from "@/components/Logo";
import Notifications from "@/components/Notifications";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#7c3aed",
        tabBarStyle: {
          shadowColor: "transparent",
          elevation: 0,
          borderTopWidth: 1,
          borderColor: "#f8fafc",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerStyle: {
            shadowColor: "transparent",
          },
          headerTitle: (props) => <Logo {...props} />,
          headerRight: (props) => <Notifications {...props} />,
          headerTitleAlign: "left",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerStyle: {
            shadowColor: "transparent",
          },
          tabBarStyle: {},
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          title: "Post",
          headerStyle: {
            shadowColor: "transparent",
          },

          tabBarIcon: ({ color }) => (
            <Feather name="plus" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="reels"
        options={{
          title: "Reels",
          headerStyle: {
            shadowColor: "transparent",
          },
          tabBarStyle: {},
          tabBarIcon: ({ color }) => (
            <Feather name="video" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerStyle: {
            shadowColor: "transparent",
          },
          tabBarStyle: {},
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
