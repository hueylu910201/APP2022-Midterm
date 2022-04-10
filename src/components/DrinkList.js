import React ,{ useState, useEffect }from "react";
import { Box, FlatList ,HStack,VStack,color,Text, AspectRatio,Image} from "native-base";
import DrinkDetail from "./DrinkDetail";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBar from "./SearchBar";
const DrinkList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <DrinkDetail drink={item} navigation={navigation} />;
  return (
    <FlatList
    _dark={{ bg: "blueGray.900" }}
    _light={{ bg: "white" }}
    ListHeaderComponent={
      <>
      <Box margin={"3"} ratio={16 / 9}>
        <SearchBar/>
      </Box>
      <Box>
      <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{uri:"https://lh3.googleusercontent.com/MFUJhPBYvFTDgoe0UHRq790iD_YAhCCv8B2a7LB4uSv9osoI4FCaro4o374mVElVFZXFmq2hknelo_kwYizmIEYSR-7Z__jc=s600"}}
            alt='drinkImage'
          />
        </AspectRatio>
      </Box>
       <HStack mx="auto" m={5}>
        <VStack mr="5">
          <Box bg="#dcebfa"  _dark={{ bg: "white" }}h={20} w={20} borderRadius={100}>
            <Box mx="auto" my="auto"><MaterialCommunityIcons  name="star" color={color} size={45} /></Box>
            </Box>
          <Box mx="auto"><Text>評價高低</Text></Box>
        </VStack>
        <VStack mr="4">
          <Box bg="#dcebfa" h={20} w={20} borderRadius={100}  _dark={{ bg: "white" }}>
              <Box mx="auto" my="auto"><MaterialCommunityIcons  name="map-marker-distance" color={color} size={45} /></Box>
              </Box>
            <Box mx="auto"><Text>距離最近</Text></Box>
        </VStack>
        <VStack>
          <Box bg="#dcebfa" h={20} w={20} borderRadius={100}  _dark={{ bg: "white" }}>
              <Box mx="auto" my="auto" ><MaterialCommunityIcons  name="creative-commons" color={color} size={45} /></Box>
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