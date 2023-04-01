import React, { useState, useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button, Platform } from "react-native";
import * as Font from "expo-font";
import { useFonts } from 'expo-font';
// import AppLoading from "expo-app-loading";
import * as SplashScreen from 'expo-splash-screen';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import CustomHeaderButton from "./components/HeaderButton";
import Colors from "./constants/Colors";



const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};



// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Creates Stack Navigator
const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
        },
        headerTintColor:
          Platform.OS === "android" ? "white" : Colors.primaryColor,
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Meals Categories",
        }}
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={{ title: "Meals" }}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={{
          title: "Meals Screen",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Favorite"
                iconName="ios-star"
                onPress={() => {
                  console.log("Mark as Favorite");
                }}
              />
            </HeaderButtons>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

// Creates Bottom Navigator
const Tab = createBottomTabNavigator();

const MealsFavTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarActiveTintColor: Colors.accentColor }}
    >
      <Tab.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="ios-restaurant"
                size={23}
                color={Colors.accentColor}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{

          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="ios-star"
                size={23}
                color={Colors.accentColor}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <MealsFavTabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
