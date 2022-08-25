import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SearchIcon } from "react-native-heroicons/solid";

const Form = () => {
  return (
    <View className="flex-col items-center justify-center bg-white py-6 px-5 mb-8 rounded-xl border-2 border-[#F0F0F0]">
      <Text className="font-bold text-[20px] leading-5">
        Проверить адрес доставки
      </Text>
      <View className="w-full mt-4 relative">
        <TextInput
          className="h-[45px] px-5 border-2 border-[#F0F0F0] rounded-md"
          placeholder="Адрес"
          keyboardType="email-address"
          placeholderTextColor={"#A5A5A5"}
        />
        <View className="absolute top-0 right-0 bg-primary flex items-center justify-center w-[45px] h-full rounded-md">
          <TouchableOpacity>
            <View>
              <SearchIcon fontSize={20} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Form;
