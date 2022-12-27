import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { BackButton } from "../components/Components";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";
const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    );
  }, [dispatch]);

  return (
    <>
      <BasketIcon />
      <ScrollView className="">
        <View className="relative">
          <Image
            source={{ uri: imgUrl }}
            className="h-56 w-full bg-gray-300 p-4 "
          />
          <BackButton />
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Feather name="star" size={20} color="#22c55e" />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> . {genre}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Feather name="map-pin" size={20} color="gray" />
                <Text className="text-xs text-gray-500">
                  Nearby . {address}{" "}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <AntDesign name="questioncircleo" size={20} color="gray" />
            <Text className="flex-1 text-md font-bold pl-2">
              Have a food alergy?
            </Text>
            <Feather name="chevron-right" size={20} color="#00ccbb" />
          </TouchableOpacity>
        </View>

        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
          {/* Dish Rows */}
          <DishRow //! dishrows databaseden çekilen data ile map yapılarak render edilcek
            id="1"
            name="Super Burger"
            description="super meat, barbecue sauce ext"
            price="5"
            image="https://img.freepik.com/premium-photo/homemade-burger-with-beef-cheese-onion-marmalade-wooden-board-fast-food-concept-american-food_90258-3917.jpg?w=740"
          />
          <DishRow
            id="2"
            name="Super Pizza"
            description="pepperoni pizza"
            price="10"
            image="https://www.kevserinmutfagi.com/wp-content/uploads/2016/01/karisik_pizza1.jpg"
          />
          <DishRow
            id="3"
            name="Super Pizza"
            description="pepperoni pizza"
            price="9.99"
            image="https://www.kevserinmutfagi.com/wp-content/uploads/2016/01/karisik_pizza1.jpg"
          />
          <DishRow
            id="4"
            name="Super Pizza"
            description="pepperoni pizza"
            price="9.99"
            image="https://www.kevserinmutfagi.com/wp-content/uploads/2016/01/karisik_pizza1.jpg"
          />
          <DishRow
            id="5"
            name="Super Burger"
            description="super meat, barbecue sauce ext"
            price="5"
            image="https://img.freepik.com/premium-photo/homemade-burger-with-beef-cheese-onion-marmalade-wooden-board-fast-food-concept-american-food_90258-3917.jpg?w=740"
          />
          <DishRow
            id="6"
            name="Super Burger"
            description="super meat, barbecue sauce ext"
            price="5"
            image="https://img.freepik.com/premium-photo/homemade-burger-with-beef-cheese-onion-marmalade-wooden-board-fast-food-concept-american-food_90258-3917.jpg?w=740"
          />
          <DishRow
            id="7"
            name="Super Burger"
            description="super meat, barbecue sauce ext"
            price="5"
            image="https://img.freepik.com/premium-photo/homemade-burger-with-beef-cheese-onion-marmalade-wooden-board-fast-food-concept-american-food_90258-3917.jpg?w=740"
          />
          <DishRow
            id="8"
            name="Super Burger"
            description="super meat, barbecue sauce ext"
            price="5"
            image="https://img.freepik.com/premium-photo/homemade-burger-with-beef-cheese-onion-marmalade-wooden-board-fast-food-concept-american-food_90258-3917.jpg?w=740"
          />
          <DishRow
            id="9"
            name="Super Burger"
            description="super meat, barbecue sauce ext"
            price="5"
            image="https://img.freepik.com/premium-photo/homemade-burger-with-beef-cheese-onion-marmalade-wooden-board-fast-food-concept-american-food_90258-3917.jpg?w=740"
          />
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
