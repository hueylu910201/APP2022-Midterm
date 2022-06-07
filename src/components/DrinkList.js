import React ,{ useState, useEffect }from "react";
import { Box, FlatList ,HStack,VStack,color,Text, AspectRatio,Image, Center} from "native-base";
import DrinkDetail from "./DrinkDetail";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBar from "./SearchBar";
import Slider from "./Slider";
import { TextInput } from "react-native-gesture-handler";
import FadeInView from "../Theme/FadeAnim";
const DrinkList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <DrinkDetail drink={item} navigation={navigation} />;
  return (
    <FlatList
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "white" }}
      ListHeaderComponent={
        <>
        {/* <Box borderWidth={1} borderColor={'black'} padding={1} margin={5} borderRadius={10}>
          <TextInput placeholder='Search'/>
        </Box> */}
        <Box>
          <AspectRatio top={-45}>
            <Slider/>
          </AspectRatio>
        </Box>
        <Center marginTop={-8} marginBottom={6}>
          <Text fontSize={36} fontWeight={'bold'}>店家一覽</Text>
          <Box width={280} height={1} backgroundColor={'gray.400'}></Box>
        </Center>
        </>
      }
        scrollIndicator="false"
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.title}
        showsVerticalScrollIndicator={false}
        key={list.id}
    />  
  );  
}

export default DrinkList;