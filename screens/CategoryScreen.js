import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BackButton } from "../components/Components";

const CategoryScreen = () => {
  const navigation = useNavigation();

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    //!sanitye bağlaman gerek
    const fetchData = async () => {
      const response = await fetch(
        'https://your-project-id.api.sanity.io/v1/data/query/production?query=*[_type=="restaurant"]'
      );
      const data = await response.json();
      setRestaurants(data);
    };

    fetchData();
  }, []);

  return (
    <ScrollView className="">
      <SafeAreaView className="items-center">
        <Text className="text-xl text-red-800">Category Screen</Text>
        <BackButton />

        <Text>
          {restaurants.name}burda spesifik kategorideki ürüne sahip bütün
          restaurantlar renderlancak sanity'e bağlamak şart
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CategoryScreen;
