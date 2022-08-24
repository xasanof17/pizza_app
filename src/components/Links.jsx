import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { FireIcon, SunIcon, HeartIcon, CakeIcon, ShoppingBagIcon, WifiIcon} from "react-native-heroicons/outline";

const links = [
  { Icon: <FireIcon fontSize={20} color="red" />, title: `Акции` },
  { Icon: <SunIcon fontSize={20} color="red" />, title: `Пицца` },
  { Icon: <HeartIcon fontSize={20} color="red" />, title: `Суши` },
  { Icon: <CakeIcon fontSize={20} color="red" />, title: `Напитки` },
  { Icon: <ShoppingBagIcon fontSize={20} color="red" />, title: `Закуски` },
  { Icon: <WifiIcon fontSize={20} color="red" />, title: `Комбо` },
  { Icon: <CakeIcon fontSize={20} color="red" />, title: `Десерты` },
  { Icon: <WifiIcon fontSize={20} color="red" />, title: `Соусы` },
];

const Links = () => {
  return (
    <ScrollView horizontal className="py-5">
      {links.map((link, i) => (
        <View className="mr-3" key={i}>
          <TouchableOpacity className="bg-white px-4 border-[1px] border-slate-200 rounded-md flex-row items-center space-x-2 h-[50px]">
            <View>{link.Icon}</View>
            <Text className="text-black font-regular text-sm">
              {link.title}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default Links;
