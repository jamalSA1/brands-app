import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { usePathname, useRouter } from "expo-router";

const Header = () => {
  const PAGE = [
    {
      name: "Brands",
      path: "/",
    },
    {
      name: "News",
      path: "/news",
    },
  ];

  const router = useRouter();
  const currentPath = usePathname(); 

  return (
    <View className="flex flex-row justify-center items-center gap-5 mt-4 border-b border-gray-200 z-[999999]">
      {PAGE.map((page) => (
        <TouchableOpacity
          key={page.path}
          onPress={() => router.push(page.path as '/' | '/news')}
          className="flex items-center "
        >
          <Text
            className={`text-base ${
              currentPath === page.path ? "font-bold text-[17.5px] text-black" : "font-normal text-[15.5px] text-gray-500"
            }`}
          >
            {page.name}
          </Text>
          {currentPath === page.path && (
            <View className="h-[2px] bg-black w-full mt-1" />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Header;
