import { createStackNavigator } from '@react-navigation/stack';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

// const MealsNavigator = createStackNavigator({
//   Categories: CategoriesScreen,
//   CategoryMeals: {
//     screen: CategoryMealsScreen
//   },
//   MealDetail: MealDetailScreen
// });

const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
}

export default MealsNavigator;


  

