import { Text, View } from "react-native";
import {StatusBar} from "react-native";
import { GameEngine } from "react-native-game-engine"
import entities from "../entities/";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        padding: 20
      }}
    >
      <StatusBar style="auto" hidden/>
      <GameEngine styles={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }} entities={entities()}></GameEngine>
    </View>
  );
}
