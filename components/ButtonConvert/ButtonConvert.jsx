import { TouchableOpacity, Text } from "react-native";
import { styles } from "./ButtonConvert.style";

export default function ButtonConvert({ unit, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.txt}>Convert to {unit}</Text>
    </TouchableOpacity>
  );
}
