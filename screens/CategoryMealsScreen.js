import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealScreen = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            name: "MealDetail",
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  const { categoryId } = props.route.params;

  //filter out categories that matches the categoryId
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  //Update the Screen Title
  useEffect(() => {
    props.navigation.setOptions({ title: selectedCategory.title });
  }, []);

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "orange",
    borderRadius: 8,
    padding: 8,
    marginVertical: 8,
    shadowColor: "orange",
    shadowOffset: 0,
    shadowOpacity: 5,
  },
});

export default CategoryMealScreen;
