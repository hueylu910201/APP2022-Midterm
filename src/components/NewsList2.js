import React ,{ useState, useEffect }from "react";
import { Box, FlatList ,HStack,VStack,color,Text, AspectRatio,Image} from "native-base";
import NewsDetail2 from "./NewsDetail2";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBar from "./SearchBar";
const NewsList2 = ({ list, navigation }) => {
  const renderItem = ({ item }) => <NewsDetail2 drink={item} navigation={navigation} />;
  return (
    <Box>
    <FlatList
    _dark={{ bg: "blueGray.900" }}
    _light={{ bg: "white" }}
      scrollIndicator="false"
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}
      showsVerticalScrollIndicator={false}
      key={list}
    />
    <Box height={10} width={10} marginTop={-65}></Box>  
    </Box>  
  );  
}

export default NewsList2;