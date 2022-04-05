import React from "react";
import { Box } from "native-base";
import DrinkList from "../components/DrinkList";
import drinkData from "../json/drink.json";

const DrinkScreen = ({ navigation }) => {
  return (
    <Box>
      <DrinkList 
        list={drinkData.drinkList}
        navigation={navigation}
      />
    </Box>
  );
};

export default DrinkScreen;
