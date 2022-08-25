import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { FilterIcon } from "react-native-heroicons/outline";

const Menu = ({ title, filterBtn, cards }) => {
  return (
    <View className="mb-[30px]">
      <View className="flex-col">
        {/* Top */}
        <View className="flex-row justify-between items-center mb-5">
          <Text className="font-semibold text-[28px] leading-7 text-black">
            {title}
          </Text>
          {filterBtn && (
            <TouchableOpacity>
              <View className="py-3 px-5 border-[2px] border-[#F0F0F0] bg-white flex-row items-center space-x-2 rounded-md">
                <FilterIcon fontSize={15} color="#FF7010" />
                <Text className="font-regular text-sm">Фильтры</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
        {/* End Top */}
        {cards.map((card, i) => (
          <View
            className={`my-2 p-3 bg-white rounded-xl border-2 border-[#F0F0F0] ${
              card.xit || card.new ? "relative" : ""
            }`}
            key={i}
          >
            {card.xit && (
              <View
                className="absolute top-2 left-0 bg-red py-[5px] px-[10px] z-10"
                style={{ borderTopRightRadius: 6, borderBottomRightRadius: 6 }}
              >
                <Text className="uppercase font-regular text-sm text-white">
                  xit
                </Text>
              </View>
            )}
            {card.new && (
              <View
                className="absolute top-2 left-0 bg-red py-[5px] px-[10px] z-10"
                style={{ borderTopRightRadius: 6, borderBottomRightRadius: 6 }}
              >
                <Text className="uppercase font-regular text-sm text-white">
                  new
                </Text>
              </View>
            )}
            <View className="flex-row justify-between items-center space-x-4">
              <View className="flex items-center justify-center w-[100px] h-[100px]">
                <Image
                  source={{ uri: card.img }}
                  className="w-full h-full bg-transparent rounded-xl"
                />
              </View>
              <View className="flex-col items-start justify-start w-[200px] h-[100px]">
                <Text className="max-w-[210px] w-full font-bold text-sm mb-2 text-black capitalize">
                  {card.title}
                </Text>
                <Text className="max-w-[210px] w-full font-regular text-[12px] leading-4 text-black capitalize">
                  {card.text}
                </Text>
                <View className="flex-row space-x-2 items-center">
                  <TouchableOpacity>
                    <View className="px-4 py-2 bg-[#FFEEE2] rounded-md mt-2 border border-gray">
                      <Text className="font-bold text-sm text-primary ">
                        {card.cost}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Menu;
