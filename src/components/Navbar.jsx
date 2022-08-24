import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { MenuIcon } from "react-native-heroicons/outline";
import { MapIcon } from "react-native-heroicons/outline";
import { images } from "../constants";

const Navbar = () => {
  return (
    <View className="bg-[#f9f9f9]">
      <View className="py-3 border-b-2 border-[#F0F0F0]">
        <View className="flex-row items-center justify-between mx-4">
          <View className="flex-row items-center ">
            <View className="flex-row items-center">
              <MapIcon fontSize={23} color="#FF7010" />
            </View>
            <View>
              <Text className="font-regular text-black ml-2">Москва</Text>
            </View>
          </View>
          <View className="flex-row items-center justify-between space-x-1">
            <Text className="text-black font-regular text-[14px] leading-4">
              Среднее время доставки*:
            </Text>
            <Text className="text-black font-bold text-[14px] leading-4x">
              00:24:19
            </Text>
          </View>
        </View>
      </View>
      <View className="py-4 border-b-2 border-[#F0F0F0]">
        <View className="flex-row items-center justify-between mx-4">
          <View className="flex-row items-center space-x-2">
            <Image source={images.logo} style={{ width: 30, height: 30 }} />
            <Text className="font-semibold text-black ">Куда Пицца</Text>
          </View>
          <View className="flex items-center justify-center">
            <TouchableOpacity className="flex items-center justify-center">
              <MenuIcon fontSize={35} color="#191919" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Navbar;
