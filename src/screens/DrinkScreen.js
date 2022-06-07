import React, { useState, useEffect }from "react";
import { Box ,Text,HStack, VStack,color,Image} from "native-base";
import DrinkList from "../components/DrinkList";
import drinkData from "../json/drink.json";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DrinkScreen = ({ navigation }) => {
  const [value, setValue] = useState()
  function updateSearch(value) {
      //do your search logic or anything
      console.log(value)
  }    const renderItem = ({ item }) => <DrinkList drink={item} navigation={navigation} />;
  return (

    <Box>
      <DrinkList 
        list={drinkData.drinkList}
        renderItem={renderItem}
        navigation={navigation}
        keyExtractor={item => item.title}
        key={drinkData.drinkList}
      />
    </Box>
  );
};

export default DrinkScreen;
