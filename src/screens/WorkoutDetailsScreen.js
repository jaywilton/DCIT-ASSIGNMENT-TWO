import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function WorkoutDetailsScreen({ route }) {
  const { workout } = route.params;
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: workout.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.category}>{workout.category.toUpperCase()}</Text>
        <Text style={styles.title}>{workout.title}</Text>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{workout.duration}</Text>
            <Text style={styles.statLabel}>Duration</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{workout.calories}</Text>
            <Text style={styles.statLabel}>Calories</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{workout.level}</Text>
            <Text style={styles.statLabel}>Level</Text>
          </View>
        </View>

        <Text style={styles.sectionHeading}>About this workout</Text>
        <Text style={styles.description}>{workout.description}</Text>

        <Pressable
          style={[styles.button, isCompleted && styles.buttonDone]}
          onPress={() => setIsCompleted((prev) => !prev)}
        >
          <Ionicons
            name={isCompleted ? "checkmark-circle" : "play-circle"}
            size={20}
            color="#fff"
          />
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
  image: { width: "100%", height: 300, backgroundColor: "#f1e6e9" },
  content: { padding: 20 },
  category: { color: "#FF5A7A", fontWeight: "700", fontSize: 12, letterSpacing: 1, marginBottom: 6 },
  title: { fontSize: 26, fontWeight: "800", color: "#1C1C28", marginBottom: 18 },
  statsRow: { flexDirection: "row", gap: 10, marginBottom: 24 },
  statCard: {
    flex: 1,
    backgroundColor: "#FBF5F6",
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: "center",
  },
  statValue: { fontSize: 15, fontWeight: "700", color: "#1C1C28" },
  statLabel: { fontSize: 11, color: "#B0808F", marginTop: 2, fontWeight: "500" },
  sectionHeading: { fontSize: 17, fontWeight: "700", color: "#1C1C28", marginBottom: 8 },
  description: { fontSize: 14, lineHeight: 22, color: "#5B5F73" },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#FF5A7A",
    marginTop: 28,
    paddingVertical: 16,
    borderRadius: 18,
  },
  buttonDone: { backgroundColor: "#2ECC71" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "700", marginLeft: 8 },
});