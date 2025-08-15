import { Text } from "react-native";
import { styles } from "./DisplayTemperature.style";

export default function DisplayTemperature({ temperature, unit }) {
  return (
    <Text style={styles.tempTxt}>
      {temperature} {unit}
    </Text>
  );
}
