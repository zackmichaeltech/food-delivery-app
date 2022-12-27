import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selecRestaurant } from "../features/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";

import Entypo from "@expo/vector-icons/Entypo";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selecRestaurant);
  const basketTotal = useSelector(selectBasketTotal);
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-main-color bg-white shadow-md">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-gray-400 text-center">
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="bg-main-color rounded-full p-2 absolute right-4 top-4"
          >
            <Entypo name="cross" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            className="w-9 h-9 bg-gray-300 p-4 rounded-full"
            source={{ uri: "https://links.papareact.com/wru" }}
          />
          <Text className="flex-1">Deliver in 30-45 min</Text>
          <TouchableOpacity>
            <Text className="text-main-color">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-200">
          {/* map yapıldığı zaman divide ile css verip özelleştiriyoruz. */}
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-main-color">{items.length} x</Text>
              <Image
                source={{ uri: items[0]?.image }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-600 ">{items[0]?.price} $</Text>
              <TouchableOpacity>
                <Text
                  className="text-main-color"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4 shadow-md">
          <View className="flex-row justify-between">
            <Text className="text-gray-400 ">Subtotal</Text>
            <Text className="text-gray-400 ">{basketTotal} $</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400 ">Delivery Fee</Text>
            <Text className="text-gray-400 ">4.99 $</Text>
          </View>
          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className="font-extrabold ">{basketTotal + 4.99} $</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PreparingOrder", {});
            }}
            className={`${
              items.length > 0 ? "bg-main-color" : "bg-gray-500 "
            } p-4 rounded-lg `}
            disabled={!items.length}
          >
            <Text className=" text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
