import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../features/basketSlice";
import { initialWindowMetrics } from "react-native-safe-area-context";

const DishRow = ({ id, name, description, price, image }) => {
  //!we need to get food data to database later.
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const addItemToBasket = () => {
    dispatch(
      addToBasket({
        id,
        name,
        description,
        price,
        image,
      })
    );
  };
  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2 ">
            <Text className="text-lg mb-1 font-semibold">{name}</Text>
            <Text className="text-gray-400 mb-1">{description}</Text>
            <Text className="text-gray-700 ">{price}</Text>
          </View>
          <View>
            <Image
              className="h-20 w-20 bg-gray-300 p-4 border-w rounded-md"
              source={{ uri: image }}
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4 ">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemFromBasket}
              className={`${
                items.length > 0 ? "bg-main-color" : "bg-gray-500 "
              } p-2 rounded-full`}
            >
              <Feather name="minus" size={20} color="white" />
            </TouchableOpacity>
            <Text className="font-bold text-md ">{items.length}</Text>
            <TouchableOpacity
              onPress={addItemToBasket}
              className="bg-main-color p-2 rounded-full"
            >
              <Feather name="plus" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
