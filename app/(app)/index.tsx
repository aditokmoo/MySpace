import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-4xl text-blue-500">
        <Link href="/login">Login</Link>
      </Text>
    </View>
  );
}
