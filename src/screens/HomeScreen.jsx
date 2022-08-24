import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Navbar, Links, Cards, Form } from "../components";
import { ScrollView } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <Navbar />
      <ScrollView
        className="mx-4 flex"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Links />
        <Cards/>
        <Form/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
