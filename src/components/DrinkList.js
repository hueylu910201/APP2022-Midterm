import React from "react";
import { Box, FlatList ,HStack,VStack,color,Text} from "native-base";
import DrinkDetail from "./DrinkDetail";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const DrinkList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <DrinkDetail drink={item} navigation={navigation} />;
  return (
    <FlatList
    _dark={{ bg: "blueGray.900" }}
    _light={{ bg: "white" }}
    ListHeaderComponent={
      <>
       <HStack mx="auto" m={5}>
        <VStack mr="3">
          <Box bg="#dcebfa" h={20} w={20} borderRadius={100}>
            <Box mx="auto" my="auto"><MaterialCommunityIcons  name="star" color={color} size={45} /></Box>
            </Box>
          <Box mx="auto"><Text>評價高低</Text></Box>
        </VStack>
        <VStack mr="3">
          <Box bg="#dcebfa" h={20} w={20} borderRadius={100}>
              <Box mx="auto" my="auto"><MaterialCommunityIcons  name="map-marker-distance" color={color} size={45} /></Box>
              </Box>
            <Box mx="auto"><Text>距離最近</Text></Box>
        </VStack>
        <VStack>
          <Box bg="#dcebfa" h={20} w={20} borderRadius={100}>
              <Box mx="auto" my="auto"><MaterialCommunityIcons  name="creative-commons" color={color} size={45} /></Box>
              </Box>
            <Box mx="auto"><Text>價錢最低</Text></Box>
        </VStack>
      </HStack>
      </>
    }
      scrollIndicator="false"
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}
      showsVerticalScrollIndicator={false}
    />    
  );  
}

export default DrinkList;

