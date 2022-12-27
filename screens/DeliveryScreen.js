import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selecRestaurant } from "../features/restaurantSlice";
import Feather from "@expo/vector-icons/Feather";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selecRestaurant);

  return (
    <View className="bg-main-color flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity
            className=" bg-gray-200 rounded-full items-center justify-center p-2"
            onPress={() => navigation.navigate("Home")}
          >
            <Feather name="arrow-left" size={25} color="#00CCBB" />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-lg">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Esimate Arrival</Text>
              <Text className="text-3xl font-bold">30-45 Minutes</Text>
            </View>

            <View>
              <Image
                className="w-28 h-28"
                source={{ uri: "https://links.papareact.com/fls" }}
              />
            </View>
          </View>
          <Progress.Bar size={300} indeterminate={true} color="#00ccbb" />
          <Text className="mt-3 text-gray-500 ">
            Your order at {restaurant.title} is being prepared.
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        className="flex-1 -mt-10 z-0 "
        mapType="mutedStandard"
        initialRegion={{
          //latitude: restaurant.lat,
          //longitude: restaurant.long,
          latitude: "40.73077465378494",
          longitude: "31.5999018502638",
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          coordinate={{
            latitude: "40.73077465378494",
            longitude: "31.5999018502638",
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>
      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5 "
          source={{ uri: "https://links.papareact.com/wru" }}
        />
        <View className="flex-1">
          <Text className="text-lg ">John Smith</Text>
          <Text className=" text-gray-400 text-lg ">Your Rider</Text>
        </View>
        <Text className="text-main-color text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
