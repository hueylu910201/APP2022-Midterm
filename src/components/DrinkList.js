import React from "react";
import { FlatList } from "native-base";
import DrinkDetail from "./DrinkDetail";

const DrinkList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <DrinkDetail drink={item} navigation={navigation} />;
  return (
    <FlatList
    _dark={{ bg: "blueGray.900" }}
    _light={{ bg: "white" }}
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}
    />    
  );  
}

export default DrinkList;

