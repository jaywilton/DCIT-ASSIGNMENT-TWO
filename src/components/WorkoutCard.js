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
          color={isFavourite ? "#FF5A7A" : "#FFFFFF"}
        />
      </Pressable>

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Ionicons name="time-outline" size={13} color="#B0B3BF" />
            <Text style={styles.metaText}>{duration}</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="flame-outline" size={13} color="#FF5A7A" />
            <Text style={styles.metaText}>{calories}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 28,
    marginBottom: 18,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  image: { width: "100%", height: 150, backgroundColor: "#f1e6e9" },
  favouriteButton: {
    position: "absolute",
    top: 14,
    right: 14,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "rgba(0,0,0,0.35)",
    alignItems: "center",
    justifyContent: "center",
  },
  info: { padding: 16 },
  title: { fontSize: 17, fontWeight: "700", color: "#1C1C28", marginBottom: 8 },
  metaRow: { flexDirection: "row", gap: 16 },
  metaItem: { flexDirection: "row", alignItems: "center", gap: 5 },
  metaText: { fontSize: 13, color: "#8A8FA3", marginLeft: 5, fontWeight: "500" },
});