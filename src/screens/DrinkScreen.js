import React from "react";
import { View } from "react-native";
import DrinkList from "../components/DrinkList";
import Drinkdata from "../json/drink.json";

const DrinkScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1}}>
      <DrinkList 
        list={Drinkdata.drinkList}
        navigation={navigation}
      />
    </View>
  );
};

export default DrinkScreen;
