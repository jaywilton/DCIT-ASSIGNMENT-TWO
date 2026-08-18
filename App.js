import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WorkoutListScreen from "./src/screens/WorkoutListScreen";
import WorkoutDetailsScreen from "./src/screens/WorkoutDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WorkoutList"
          component={WorkoutListScreen}
          options={{ title: "Workouts" }}
        />
        <Stack.Screen
          name="WorkoutDetails"
          component={WorkoutDetailsScreen}
          options={{ title: "Workout Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}