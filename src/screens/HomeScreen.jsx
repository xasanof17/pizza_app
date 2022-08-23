import React, { useLayoutEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <View className="flex-row items-center mx-4 py-[10px] bg-red">
        <View></View>
        <View>
          <Text className="text-red">Javohir</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
