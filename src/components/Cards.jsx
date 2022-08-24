import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { images } from "../constants";

const cards = [
  {
    bg: `bg-primary justify-start`,
    img: images.card1,
    title: `3 средние пиццы от 999 рублей`,
  },
  {
    bg: `bg-red justify-center`,
    img: images.card2,
    title: `3Кэшбек 10% на самовывоз (доставка)`,
  },
  {
    bg: `bg-primary justify-start`,
    img: images.card1,
    title: `3 средние пиццы от 999 рублей`,
  },
  {
    bg: `bg-red justify-center`,
    img: images.card2,
    title: `Кэшбек 10% на самовывоз (доставка)`,
  },
];

const Cards = () => {
  return (
    <ScrollView horizontal className="mb-[30px]">
      {cards.map((card, i) => (
        <View
          className={`flex-col items-center justify-start mr-2 rounded-xl ${card.bg} h-[320px]`}
          key={i}
        >
          <View className="flex items-center justify-center mb-7">
            <Image source={card.img} className="rounded-xl" />
          </View>
          <Text className="mx-5 max-w-[240px] w-full text-white font-bold text-lg">
            {card.title}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Cards;
