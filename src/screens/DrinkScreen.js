import React from "react";
import { Box ,Text,HStack, VStack,color} from "native-base";
import DrinkList from "../components/DrinkList";
import drinkData from "../json/drink.json";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
