import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  Share,
} from "react-native";
import React from "react";
import { images } from "../constants";
import {
  PhoneIcon,
  MailIcon,
  ShareIcon,
  PuzzleIcon,
  CodeIcon,
  GlobeAltIcon,
} from "react-native-heroicons/outline";

const links = [
  { id: 1, title: "Куда пицца" },
  { id: 2, title: "О компании" },
  { id: 3, title: "Пользовательское соглашение" },
  { id: 4, title: "Условия гарантии" },
  { id: 5, title: "Помощь" },
  { id: 6, title: "Ресторан" },
  { id: 7, title: "Контакты" },
  { id: 8, title: "Поддержка" },
  { id: 9, title: "Отследить заказ" },
];

const Footer = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "This pizza app developed by Javohir to see this repo link for github github.com/xasanof17/pizza_app/",
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View className="flex-col items-start justify-center p-6 bg-white relative">
      <View className="flex-row items-center space-x-2 mb-6">
        <Image source={images.logo} style={{ width: 30, height: 30 }} />
        <Text className="font-semibold text-black">Куда Пицца</Text>
      </View>
      <View className="flex-col">
        {links.map((link, index) => (
          <TouchableOpacity key={index} className="py-[10px]">
            <Text className="font-regular text-sm text-black">
              {link.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View className="flex-col mt-5">
        <Text className="font-bold text-sm text-black">Контакты</Text>
        <View className="mt-5">
          <TouchableOpacity
            className="py-[10px] flex-row items-center space-x-3"
            onPress={() => {
              Linking.openURL("tel:+998900198505");
            }}
          >
            <PhoneIcon fontSize={25} color="#FF7010" />
            <Text className="font-regular text-sm text-black">
              +998 90 019 85 05
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-[10px] flex-row items-center space-x-3"
            onPress={() => {
              Linking.openURL("mailto:xasanof17@gmail.com");
            }}
          >
            <MailIcon fontSize={25} color="#FF7010" />
            <Text className="font-regular text-sm text-black">
              xasanof17@gmail.com
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-[10px] flex-row items-center space-x-3"
            onPress={() => {
              Linking.openURL("https://portfoliowebapp.vercel.app/");
            }}
          >
            <CodeIcon fontSize={25} color="#FF7010" />
            <Text className="font-regular text-sm text-black capitalize">
              developer's portfolio
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-[10px] flex-row items-center space-x-3"
            onPress={() => {
              Linking.openURL("https://t.me/xasanoffi/");
            }}
          >
            <PuzzleIcon fontSize={25} color="#FF7010" />
            <Text className="font-regular text-sm text-black capitalize">
              developer's Telegram
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-[10px] flex-row items-center space-x-3"
            onPress={() => {
              Linking.openURL("https://instagram.com/xasanof_17/");
            }}
          >
            <PuzzleIcon fontSize={25} color="#FF7010" />
            <Text className="font-regular text-sm text-black capitalize">
              developer's Instagram
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-[10px] flex-row items-center space-x-3"
            onPress={() => {
              Linking.openURL("https://github.com/xasanof17/");
            }}
          >
            <CodeIcon fontSize={25} color="#FF7010" />
            <Text className="font-regular text-sm text-black capitalize">
              Github
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-[10px] flex-row items-center space-x-3"
            onPress={onShare}
          >
            <ShareIcon fontSize={25} color="#FF7010" />
            <Text className="font-regular text-sm text-black capitalize">
              Share app
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Footer;
