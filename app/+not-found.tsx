import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <View className="flex justify-center items-center flex-1">
      <Stack.Screen options={{ title: "Oops!" }} />
      <View>
        <Text type="title" className="text-center">
          This screen doesn't exist.
        </Text>
        <Link href="/">
          <Text type="link" className="text-center">
            Go to home screen!
          </Text>
        </Link>
      </View>
    </View>
  );
}
