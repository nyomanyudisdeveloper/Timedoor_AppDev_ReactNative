import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const SecondScreen = () => {
  const openAlert = (game: string) => {
    if (game == "mobileLegends") {
      alert("You choose Mobile Legends!");
    } else if (game == "pubg") {
      alert("You choose PUBG!");
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "lavender",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "skyblue",
          padding: 5,
          margin: 5,
          borderWidth: 3,
          borderStyle: "dashed",
          borderRadius: 5,
        }}
      >
        <Text style={{ fontWeight: "bold", textAlign: "center" }}>
          Mobile Legends
        </Text>
        <Text>
          <Text style={{ fontWeight: "bold", color: "red" }}>
            Mobile Legends
          </Text>{" "}
          is a multiplayer online battle arena (MOBA) game. The two opposing
          teams fight to reach and destroy the enemy’s base while defending
          their own base for control of a path.
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            padding: 8,
            margin: 8,
            borderRadius: 50,
            borderWidth: 2,
          }}
          onPress={() => openAlert("mobileLegends")}
        >
          <Text style={{ color: "lightcoral" }}>Mobile Legends Button</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "cornflowerblue",
          padding: 5,
          margin: 5,
          borderWidth: 3,
          borderStyle: "dotted",
          borderRadius: 5,
        }}
      >
        <Text style={{ fontWeight: "bold", textAlign: "center" }}>PUBG</Text>
        <Text>
          <Text style={{ fontWeight: "bold", color: "red" }}>
            PlayerUnknown’s Battlegrounds
          </Text>
          , better known as PUBG, is a multiplayer battle royale game in which
          players drop onto an island and fight to be the last one left
          standing.
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            padding: 8,
            margin: 8,
            borderRadius: 50,
            borderWidth: 2,
          }}
          onPress={() => openAlert("mobileLegends")}
        >
          <Text style={{ color: "lightcoral" }}>PUBG Button</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SecondScreen;
