import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);
  if (items.lenght == 0) return null;
  return (
    <View className="absolute bottom-10 w-full z-50 ">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="bg-main-color mx-5 rounded-3xl p-4 flex-row items-center space-x-2 "
      >
        <View className="rounded bg-[#01A296] py-1 px-2 ">
          <Text className="text-white font-extrabold text-lg ">
            {items.length}
          </Text>
        </View>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg font-extrabold text-white">
          ${basketTotal}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
