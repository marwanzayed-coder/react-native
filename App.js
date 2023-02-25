import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("Marwan");
  const [age, setAge] = useState(15);

  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Ahmed Ali"
        onChangeText={(e) => setName(e)}
      />
      <Text>Enter Age:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="e.g. 40"
        onChangeText={(e) => setAge(e)}
      />
      <Text>
        Name: {name}, Age: {age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#555",
    padding: 4,
    width: 200,
    margin: 10,
  },
});
