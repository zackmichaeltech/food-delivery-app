import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { BackButton } from "../components/Components";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView className="">
      <SafeAreaView className="items-center">
        <Text className="text-xl text-red-800">
          Profile Screen ama daha çok ui belki yapmam ama kesinlikle full ekranı
          kaplamasın tripcolicde ekranın her tarafında p-4 yapılıp yensekme
          olduğu kesin olmalı useNavigation kullanılcak.
        </Text>
        <BackButton />
      </SafeAreaView>
    </ScrollView>
  );
};

export default ProfileScreen;
