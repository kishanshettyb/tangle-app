import { useSession } from "@/cxt";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Image, TextInput, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  const { signIn } = useSession();
  const [text, setText] = useState("");
  return (
    <SafeAreaView className="justify-start flex-1">
      <View className="flex items-center justify-center p-6">
        <Image
          source={require("../../assets/images/icon.png")}
          className="w-[70px] h-[70px] my-8"
        />
        <Text className="mb-3 text-4xl font-semibold text-center">
          Tangle! Redefining Social Connections
        </Text>
        <Text className="mb-8 text-center text-md text-slate-500">
          Discover, share, and connect with a vibrant community. Tangle makes
          socializing more engaging and fun!
        </Text>
        <TextInput
          className="w-full p-4 mb-4 border rounded-xl border-slate-400"
          placeholder="Enter email"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <Link asChild href={"/auth/password"}>
          <TouchableOpacity className="flex items-center justify-center w-full p-5 bg-slate-900 rounded-xl">
            <Text className="text-white text-lg">Sign In with Email</Text>
          </TouchableOpacity>
        </Link>
        <View className="my-4">
          <Text>Or</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            signIn();
            router.replace("/");
          }}
          className="flex flex-row items-center justify-center w-full p-4 bg-white border shadow-2xl gap-x-4 shadow-purple-200 rounded-xl border-slate-100"
        >
          <View>
            <Image
              source={require("../../assets/images/google.png")}
              className="w-[20px] h-[20px]"
            />
          </View>
          <View>
            <Text>Sign In with Google</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
