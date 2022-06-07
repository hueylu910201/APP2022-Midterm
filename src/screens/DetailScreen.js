import React from 'react';
import { Linking, Pressable } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button, VStack ,color, HStack, useColorMode} from "native-base";
import Starrating_detail from "../components/Starrating_detail";
import Starrating from '../components/Starrating';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FadeInView from '../Theme/FadeAnim';
const DetailScreen = ({ route , drink }) => {
  const { 
    title, 
    url,
    urlIG,
    urlWEB,
    image,
    rate,
    score,
    address,
    time,
    menu,
    tel
  } = route.params;
  const { colorMode } = useColorMode();
  return (
    <Center 
      flex={1} _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "#E2F0FF" }}
    >
      <ScrollView ><FadeInView>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{uri: image }}
            alt='drinkImage'
          />
        </AspectRatio>
        <Box shadow={1} borderRadius={10} _dark={{ bg: "#252a2e", borderColor: 'blueGray.500', borderWidth: 0.6 }}
        _light={{ bg: "blueGray.50" }} padding="2" margin="2">
          <Center _light={{  bg:"#f2f2f2" }}>
            <Text paddingLeft={75}  paddingRight={75} fontSize="30" fontWeight={"bold"} color='#6099E4' alignSelf={"center"} _light={{  bg:"#FFF" }} borderRadius={10}>{title}</Text>
            <Box marginTop={"1%"}alignSelf={"center"}>
              <Starrating value={rate} />
            </Box>
            <Box > 
              <Text fontSize={"12"} marginLeft={"37%"} marginTop={"-4%"} fontWeight={"600"} >{score}</Text>
            </Box>
           
            <VStack marginLeft={"-30%"} marginTop={"5%"}>

              <Text fontSize={"18"} >地址:{address}</Text>
              <Text fontSize={"18"} >電話:{tel}</Text>
              <Text fontSize={"18"} >營業時間:{time}</Text>
            </VStack>
          <HStack marginTop={"6"} marginLeft={"50%"}>
            <Box paddingRight={"5"}>
              <Pressable onPress={()=>Linking.openURL(url)}>
                <MaterialCommunityIcons  name="facebook" color={ colorMode == "light" ? "#B2D7FF" : "white"} size={45} />
              </Pressable>
            </Box>

            <Box paddingRight={"5"}>
              <Pressable onPress={()=>Linking.openURL(urlIG)}>
                <MaterialCommunityIcons  name="instagram" color={ colorMode == "light" ? "#B2D7FF" : "white"} size={45} />
              </Pressable>
            </Box>

            <Box>
              <Pressable onPress={()=>Linking.openURL(urlWEB)}>
                <MaterialCommunityIcons  name="web" color={ colorMode == "light" ? "#B2D7FF" : "white"} size={45} />
              </Pressable>
            </Box>
          </HStack>
          </Center>
        </Box>
        <HStack mx="auto" margin={"3"} paddingLeft={"40%"} paddingRight={"40%"} marginBottom={4} borderRadius={10} shadow={2}
                _dark={{ bg: "#252a2e" }}
                _light={{ bg: "#fff" }}>
          <Text fontSize={22} fontWeight={"900"}>菜單</Text>
        </HStack>  
        <AspectRatio w="100%" ratio={16 / 9} marginBottom={8}>
          <Image
            source={{uri:menu}}
            alt='menu'
          />
        </AspectRatio></FadeInView>      
      </ScrollView>
    
    </Center>

  );
}

export default DetailScreen;
