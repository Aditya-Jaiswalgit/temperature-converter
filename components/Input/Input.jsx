import { View, TextInput, Text } from "react-native";
import { styles } from "./Input.style";

export function Input({ defaultValue, onChangeText, unit }) {
  return (
    <View style={styles.root}>
      <TextInput
        placeholder="Type your temperature"
        inputMode="decimal"
        maxLength={4}
        defaultValue={defaultValue.toString()}
        style={styles.input}
        onChangeText={(text) => {
          onChangeText(text);
        }}
      />
      <Text style={styles.unit}>{unit}</Text>
    </View>
  );
}
