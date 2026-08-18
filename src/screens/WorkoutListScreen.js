import React from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import WorkoutCard from "../components/WorkoutCard";
import workouts from "../data/workouts";

export default function WorkoutListScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello 👋</Text>
        <Text style={styles.heading}>Find Your Workout</Text>
      </View>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#FBF5F6" },
  header: { paddingHorizontal: 20, paddingTop: 8, paddingBottom: 16 },
  greeting: { fontSize: 14, color: "#B0808F", marginBottom: 4, fontWeight: "500" },
  heading: { fontSize: 26, fontWeight: "800", color: "#1C1C28" },
  listContent: { paddingHorizontal: 20, paddingBottom: 24 },
});