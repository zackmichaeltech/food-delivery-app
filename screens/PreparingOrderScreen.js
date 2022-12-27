import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Entypo from "@expo/vector-icons/Entypo";

import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 5000);
  }, []);

  return (
    <SafeAreaView className="bg-main-color flex-1 justify-center items-center">
      <TouchableOpacity
        onPress={navigation.goBack}
        className="bg-main-color rounded-full p-2 absolute right-4 top-4 "
      >
        <Entypo name="cross" size={30} color="white" />
      </TouchableOpacity>

      <Animatable.Image
        source={require("../assets/loading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
