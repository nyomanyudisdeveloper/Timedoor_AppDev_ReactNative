import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const SecondScreenTraining = () => {
  const clickGithub = (projectName: string) => {
    if (projectName == "project1") {
      alert("You just opened github Project 1");
    } else if (projectName == "project2") {
      alert("You just opened github Project 2");
    } else {
      alert("You just opened github Project 3");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "lavender" }}>
      <View
        style={{ paddingHorizontal: 10, paddingVertical: 5, marginVertical: 5 }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 24 }}>
          Project 1, <Text style={{ color: "red" }}>Hello World</Text>
        </Text>
        <Text style={{ textAlign: "justify" }}>
          Anim aute sit Lorem Lorem culpa. Minim aliqua proident veniam ullamco.
          Proident mollit laboris Lorem consequat amet aute culpa elit sit.
          Eiusmod in eu incididunt commodo minim proident ex. Irure cupidatat
          nisi ullamco fugiat irure et cillum. Aliqua excepteur minim qui est in
          ex aute ut quis elit veniam.
        </Text>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "#F3EC06",
              width: 70,
              paddingVertical: 5,
              paddingHorizontal: 10,
              marginTop: 5,
              borderWidth: 2,
              borderRadius: 10,
            }}
            onPress={() => clickGithub("project1")}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Github
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{ paddingHorizontal: 10, paddingVertical: 5, marginVertical: 5 }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 24 }}>
          Project 2, <Text style={{ color: "red" }}> Selenium</Text>
        </Text>
        <Text style={{ textAlign: "justify" }}>
          Anim aute sit Lorem Lorem culpa. Minim aliqua proident veniam ullamco.
          Proident mollit laboris Lorem consequat amet aute culpa elit sit.
          Eiusmod in eu incididunt commodo minim proident ex. Irure cupidatat
          nisi ullamco fugiat irure et cillum. Aliqua excepteur minim qui est in
          ex aute ut quis elit veniam.
        </Text>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "#F3EC06",
              width: 70,
              paddingVertical: 5,
              paddingHorizontal: 10,
              marginTop: 5,
              borderWidth: 2,
              borderRadius: 10,
            }}
            onPress={() => clickGithub("project2")}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Github
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{ paddingHorizontal: 10, paddingVertical: 5, marginVertical: 5 }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 24 }}>
          Project 3, <Text style={{ color: "red" }}>Calendar</Text>
        </Text>
        <Text style={{ textAlign: "justify" }}>
          Anim aute sit Lorem Lorem culpa. Minim aliqua proident veniam ullamco.
          Proident mollit laboris Lorem consequat amet aute culpa elit sit.
          Eiusmod in eu incididunt commodo minim proident ex. Irure cupidatat
          nisi ullamco fugiat irure et cillum. Aliqua excepteur minim qui est in
          ex aute ut quis elit veniam.
        </Text>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "#F3EC06",
              width: 70,
              paddingVertical: 5,
              paddingHorizontal: 10,
              marginTop: 5,
              borderWidth: 2,
              borderRadius: 10,
            }}
            onPress={() => clickGithub("project3")}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Github
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SecondScreenTraining;
