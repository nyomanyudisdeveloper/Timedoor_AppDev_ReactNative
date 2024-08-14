import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SecondScreenTraining from "./screens/SecondScreenTraining";
// import SecondScreen from "./screens/SecondScreen";
// import FirstScreen from "./screens/FirstScreen";

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <FirstScreen /> */}
      {/* <SecondScreen /> */}
      <SecondScreenTraining />
    </SafeAreaProvider>
  );
};

export default App;
