import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import WorkoutCard from "../components/WorkoutCard";
import workouts from "../data/workouts";

export default function WorkoutListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <WorkoutCard
            image={item.image}
            title={item.title}
            duration={item.duration}
            calories={item.calories}
            onPress={() => navigation.navigate("WorkoutDetails", { workout: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});