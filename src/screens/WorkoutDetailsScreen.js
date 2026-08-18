import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from "react-native";

export default function WorkoutDetailsScreen({ route }) {
  const { workout } = route.params;
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: workout.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.category}>{workout.category}</Text>
        <Text style={styles.title}>{workout.title}</Text>
        <Text style={styles.meta}>
          {workout.duration} · {workout.calories} · {workout.level}
        </Text>

        <Text style={styles.sectionHeading}>About this workout</Text>
        <Text style={styles.description}>{workout.description}</Text>

        <Pressable
          style={[styles.button, isCompleted && styles.buttonDone]}
          onPress={() => setIsCompleted((prev) => !prev)}
        >
          <Text style={styles.buttonText}>
            {isCompleted ? "Completed" : "Start Workout"}
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  image: { width: "100%", height: 280, backgroundColor: "#e5e7eb" },
  content: { padding: 20 },
  category: { color: "#6C5CE7", fontWeight: "600", marginBottom: 4 },
  title: { fontSize: 24, fontWeight: "700", marginBottom: 8 },
  meta: { fontSize: 13, color: "#888", marginBottom: 20 },
  sectionHeading: { fontSize: 16, fontWeight: "600", marginBottom: 8 },
  description: { fontSize: 14, lineHeight: 21, color: "#555" },
  button: {
    backgroundColor: "#6C5CE7",
    marginTop: 24,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
  },
  buttonDone: { backgroundColor: "#2ECC71" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});