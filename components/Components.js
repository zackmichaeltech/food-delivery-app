import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const Components = () => {
  return (
    <View>
      <Text>Components</Text>
    </View>
  );
};
export const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="absolute top-14 left-5 bg-gray-200 rounded-full items-center justify-center p-2"
      onPress={navigation.goBack}
    >
      <Feather name="arrow-left" size={25} color="#00CCBB" />
    </TouchableOpacity>
  );
};
export default Components;
