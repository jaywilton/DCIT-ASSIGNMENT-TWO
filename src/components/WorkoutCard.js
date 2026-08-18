import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function WorkoutCard({ image, title, duration, calories, onPress }) {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />

      <Pressable
        style={styles.favouriteButton}
        onPress={() => setIsFavourite((prev) => !prev)}
        hitSlop={10}
      >
        <Ionicons
          name={isFavourite ? "heart" : "heart-outline"}
          size={20}
          color={isFavourite ? "#FF5A5F" : "#FFFFFF"}
        />
      </Pressable>

      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.meta}>{duration} · {calories}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff", borderRadius: 16, marginBottom: 16, overflow: "hidden" },
  image: { width: "100%", height: 140, backgroundColor: "#e5e7eb" },
  favouriteButton: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,0,0.35)",
    alignItems: "center",
    justifyContent: "center",
  },
  info: { padding: 12 },
  title: { fontSize: 16, fontWeight: "600" },
  meta: { fontSize: 13, color: "#888", marginTop: 4 },
});