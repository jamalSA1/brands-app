import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View>
      <Link href={'/(tabs)/news'} className="mt-5">index</Link>
    </View>
  );
}
