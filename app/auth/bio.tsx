import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import { useSession } from "@/cxt";

const Bio = () => {
  const [text, setText] = useState("");
  const [textDob, setTextDob] = useState("");
  const { signIn } = useSession();
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <SafeAreaView>
      <View className="flex  justify-start mt-10 p-6">
        <Text className="mb-3 text-4xl font-semibold text-center">
          Fill in your bio
        </Text>
        <Text className="mb-8 text-center text-md text-slate-500">
          You can change this later
        </Text>
        <Text className="font-semibold mb-2">Full Name</Text>
        <TextInput
          className="w-full p-4 mb-4 border rounded-xl border-slate-400"
          placeholder="Enter full name"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <View className="flex flex-row justify-between ">
          <View className="w-[170px] mr-2">
            <Text className="font-semibold mb-2">DOB</Text>
            <TextInput
              className="p-4 mb-4 border rounded-xl border-slate-400"
              placeholder="DD/MM/YYYY"
              onChangeText={(newText) => setTextDob(newText)}
              defaultValue={textDob}
            />
          </View>
          <View className="w-[170px]">
            <Text className="font-semibold mb-2">Gender</Text>
            <View className="border rounded-xl border-slate-400 h-[47px]">
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }
              >
                <Picker.Item label="male" value="male" />
                <Picker.Item label="female" value="female" />
                <Picker.Item label="transgender" value="transgender" />
              </Picker>
            </View>
          </View>
        </View>
        {/* <Link asChild href={"/auth/bio"}> */}
        <TouchableOpacity
          onPress={() => {
            signIn();
            router.replace("/");
          }}
          className="flex items-center justify-center w-full p-5 bg-slate-900 rounded-xl"
        >
          <Text className="text-white text-lg">Next</Text>
        </TouchableOpacity>
        {/* </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default Bio;
