import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";
const RestaurantCard = ({
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
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow-md rounded-xl mt-1 mb-1"
      onPress={() => {
        navigation.navigate("Restaurant", {
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
        });
      }}
    >
      <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-xl " />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <Feather name="star" size={20} color="#22c55e" />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> . {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <Feather name="map-pin" size={20} color="gray" />
          <Text className="text-xs text-gray-500">Nearby . {address} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
