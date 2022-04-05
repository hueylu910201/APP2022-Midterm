import React from "react";
import { FlatList } from "react-native";
import DrinkDetail from "./DrinkDetail";

const DrinkList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <DrinkDetail album={item} navigation={navigation} />;
  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}
    />    
  );  
}

export default DrinkList;