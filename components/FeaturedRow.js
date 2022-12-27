import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";
const FeaturedRow = ({ id, title, description }) => {
  // const [restaurants, setRestaurants] = useState([]);
  // useEffect(() => {
  //   sanityClient
  //     .fetch(
  //       `
  //   *[_type =="featured" && _id == $id] {
  //     ...,
  //     restaurants[]-> {
  //       ...,
  //       dishes[]-> {
  //         ...,
  //         type-> {
  //           name
  //         }
  //       }
  //     }
  //   }[0]
  //   `,
  //       { id }
  //     )
  //     .then((data) => {
  //       setRestaurants(data?.restaurants);
  //     });
  // }, [id]);
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <Feather name="arrow-right" size={20} color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Cards */}
        {/* {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))} */}
        <RestaurantCard
          id="123"
          imgUrl="https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/2021-01/BurgerKing.jpg?itok=TDtHHm4c"
          title="Burger King"
          rating="7.8"
          genre="American"
          address="145 america"
          short_description="Burger King is an American-based multinational chain of hamburger fast food restaurants."
          dishes={{}}
          long="20"
          lat="0"
        />
        <RestaurantCard
          id="123"
          imgUrl="https://www.coinkolik.com/wp-content/uploads/2021/05/dominos.jpg"
          title="Domino's"
          rating="6.5"
          genre="Italian"
          address="145 Italy"
          short_description="Domino's Pizza, Inc., trading as Domino's, is an American multinational pizza restaurant chain founded in 1960 and led by CEO Russell Weiner. "
          dishes={{}}
          long="20"
          lat="0"
        />
        <RestaurantCard
          id="123"
          imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/17/75/3f/d1/restaurant-in-valkenswaard.jpg"
          title="Sushipro 3"
          rating="8.9"
          genre="Japanese"
          address="145 Tokyo"
          short_description="sushi restaurnat"
          dishes={{}}
          long="20"
          lat="0"
        />
        <RestaurantCard
          id="123"
          imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/17/75/3f/d1/restaurant-in-valkenswaard.jpg"
          title="Sushipro"
          rating="7.8"
          genre="Japanese"
          address="145 Tokyo"
          short_description="sushi restaurnat"
          dishes={{}}
          long="20"
          lat="0"
        />
        <RestaurantCard
          id="123"
          imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/17/75/3f/d1/restaurant-in-valkenswaard.jpg"
          title="Sushipro"
          rating="7.8"
          genre="Japanese"
          address="145 Tokyo"
          short_description="sushi restaurnat"
          dishes={{}}
          long="20"
          lat="0"
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
