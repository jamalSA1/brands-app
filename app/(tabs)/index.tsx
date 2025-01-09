import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View>
      <Text>Hello</Text>
      <Link href="/news">
        <Text>News</Text>
      </Link>
    </View>
  );
}
