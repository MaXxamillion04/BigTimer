import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function CountdownDisplay({ minutes, seconds }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberView}>{minutes}</Text>
      <Text style={styles.numberView}>:</Text>
      <Text style={styles.numberView}>{seconds}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  numberView: {
    fontSize: 40,
  },
});
