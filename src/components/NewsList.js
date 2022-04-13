import React ,{ useState, useEffect }from "react";
import { Box, FlatList ,HStack,VStack,color,Text, AspectRatio,Image} from "native-base";
import NewsDetail from "./NewsDetail";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBar from "./SearchBar";
const NewsList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <NewsDetail drink={item} navigation={navigation} />;
  return (
    <FlatList
    _dark={{ bg: "blueGray.900" }}
    _light={{ bg: "white" }}
    ListHeaderComponent={
      <>
      <Box margin={"3"} ratio={16 / 9}>
        <SearchBar/>
      </Box>
      </>
    }  
      scrollIndicator="false"
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}
      showsVerticalScrollIndicator={false}
      key={list}
    />    
  );  
}

export default NewsList;