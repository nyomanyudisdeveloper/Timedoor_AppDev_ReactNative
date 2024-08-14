import { View, Text, Button } from "react-native";
import React from "react";

// props => attribute (HTML)
const FirstScreen = () => {
  // function in JS ES6
  const openAlert = () => {
    alert("You clicked the button!");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>FirstScreen</Text>
      <Button title="This is button" onPress={openAlert} />
    </View>
  );
};

export default FirstScreen;
