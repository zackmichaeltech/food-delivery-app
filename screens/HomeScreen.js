import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { HiAdjustments } from "react-icons/hi";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import Feather from "@expo/vector-icons/Feather";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "./../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();

  //FOR SANITY
  // const [featuredCategories, setFeaturedCategories] = useState([]);
  // useEffect(() => {
  //   sanityClient
  //     .fetch(
  //       `
  //   *[_type =="featured"] {
  //     ...,
  //     restaurants[]-> {
  //       ...,
  //       dishes[]-> {
  //         }
  //       }
  //     }
  //   }`
  //     )
  //     .then((data) => {
  //       setFeaturedCategories(data);
  //     });
  // }, []);

  const scrollY = useRef(new Animated.Value(0)).current; //!TO:DO scroollayınca searchbar kaybolcak

  return (
    <SafeAreaView className="bg-white pt-4 ">
      {/* Header */}
      <View className=" mx-4 ">
        <View className="flex-row  items-center space-x-2 ">
          <Image
            className="h-7 w-7 bg-gray-300 p-5 rounded-full"
            source={{ uri: "https://links.papareact.com/wru" }}
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl items-center">
              Current Location
              <Feather name="chevron-down" size={25} color="#00CCBB" />
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Profile", {});
            }}
          >
            <Feather name="user" size={30} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View className="flex-row items-center space-x-2 pt-5 mb-2">
          <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 rounded-2xl">
            <Feather name="search" size={20} color="gray" />
            <TextInput
              placeholder="Restaurants and cuisines"
              keyboardType="default"
              keyboardAppearance="dark"
            />
          </View>
          <Feather name="menu" size={25} color="#00CCBB" />
        </View>
      </View>

      {/* Body */}
      <Animated.ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
        onScroll={Animated.event(
          //!TO:DO scroollayınca searchbar kaybolcak
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
        {/* {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category.id}
            id={category.id}
            title={category.name}
            description={category.short_description}
          />
        ))} */}
        <FeaturedRow
          id="123"
          title="Featured"
          description="Featured restaurants for you."
        />
        <FeaturedRow
          id="1234"
          title="Tasty Places"
          description="Tasty restaurants for you."
        />
        <FeaturedRow
          id="1235"
          title="Super Places"
          description="Super restaurants for you."
        />
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
