import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Navbar,
  Links,
  Cards,
  Form,
  Menu,
  Footer,
  Filter,
} from "../components";
import { ScrollView, View } from "react-native";
import {
  pizza,
  sushi,
  snacks,
  desert,
  drinks,
  sauce,
  combo,
} from "../constants";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#ff7010" style="light" />
      <Navbar />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="mx-4 flex relative">
          <Links />
          <Cards />
          <Form />
          <Menu title={`Пицца`} filterBtn={true} cards={pizza} />
          <Menu title={`Суши`} filterBtn={true} cards={sushi} />
          <Menu title={`Закуски`} filterBtn={false} cards={snacks} />
          <Menu title={`Десерты`} filterBtn={false} cards={desert} />
          <Menu title={`Напитки`} filterBtn={false} cards={drinks} />
          <Menu title={`Соусы`} filterBtn={false} cards={sauce} />
          <Menu title={`Комбо`} filterBtn={false} cards={combo} />
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
