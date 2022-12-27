import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      className="mt-2"
    >
      <CategoryCard
        imgUrl="https://miro.medium.com/max/1400/0*oTfm1pTXLxitHHFy.jpg"
        title="Pizza"
      />
      <CategoryCard
        imgUrl="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg"
        title="Hamburger"
      />
      <CategoryCard
        imgUrl="https://insanelygoodrecipes.com/wp-content/uploads/2020/05/Sushi-1024x536.jpg"
        title="Sushi"
      />
      <CategoryCard
        imgUrl="https://www.recipetineats.com/wp-content/uploads/2017/11/Chicken-Doner-Kebab-1-SQ.jpg"
        title="Wrap"
      />
      <CategoryCard
        imgUrl="https://www.recipetineats.com/wp-content/uploads/2017/11/Chicken-Doner-Kebab-1-SQ.jpg"
        title="Wrap"
      />
      <CategoryCard
        imgUrl="https://www.recipetineats.com/wp-content/uploads/2017/11/Chicken-Doner-Kebab-1-SQ.jpg"
        title="Wrap"
      />
      <CategoryCard
        imgUrl="https://www.recipetineats.com/wp-content/uploads/2017/11/Chicken-Doner-Kebab-1-SQ.jpg"
        title="Wrap"
      />
      <CategoryCard
        imgUrl="https://www.recipetineats.com/wp-content/uploads/2017/11/Chicken-Doner-Kebab-1-SQ.jpg"
        title="Wrap"
      />
      <CategoryCard
        imgUrl="https://www.recipetineats.com/wp-content/uploads/2017/11/Chicken-Doner-Kebab-1-SQ.jpg"
        title="Wrap"
      />
    </ScrollView>
  );
};

export default Categories;
