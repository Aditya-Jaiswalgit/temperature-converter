import { ImageBackground, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import hotBackground from "./assets/hot.png";
import coldBackground from "./assets/cold.png";
import { Input } from "./components/Input/Input";
import { useEffect, useState } from "react";
import DisplayTemperature from "./components/DisplayTemperature/DisplayTemperature";
import {
  UNITS,
  getOppositeUnit,
  convertTemperatureTo,
  isIceTemperature,
} from "./utils/temperature";
import ButtonConvert from "./components/ButtonConvert/ButtonConvert";

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C");
  const [currentBackground, setCurrentBackground] = useState(coldBackground);
  const convertTempValue = convertTemperatureTo(
    inputValue,
    getOppositeUnit(currentUnit)
  );
  useEffect(() => {
    if (isIceTemperature(inputValue, currentUnit)) {
      setCurrentBackground(coldBackground);
    } else {
      setCurrentBackground(hotBackground);
    }
  }, [inputValue, currentUnit]);
  const oppositeUnit = getOppositeUnit(currentUnit);
  return (
    <ImageBackground style={s.backgroundImg} source={currentBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <DisplayTemperature
              temperature={convertTempValue.toFixed(1)}
              unit={oppositeUnit}
            />
            <Input
              defaultValue={0}
              onChangeText={setInputValue}
              unit={currentUnit}
            />
            <ButtonConvert
              unit={currentUnit}
              onPress={() => {
                setCurrentUnit(oppositeUnit);
              }}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
