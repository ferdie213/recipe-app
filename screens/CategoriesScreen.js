import React from "react";
import {
  StyleSheet,
  FlatList,
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = (props) => {
  // console.log(props);

  const renderGridItem = (itemData) => {
    
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onSelect={() => {
      props.navigation.navigate({
        routeName: "CategoryMeals",
        name: 'CategoryMeals',
        params: { categoryId: itemData.item.id },
      });
    }} />;
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
