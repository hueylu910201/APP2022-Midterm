import React from 'react';
import { Linking } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button, VStack ,color} from "native-base";
import Starrating_detail from "../components/Starrating_detail"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailScreen = ({ route , drink }) => {
  const { 
    title, 
    artist,
    url,
    image,
    description,
    rate,
    score,
    address,
    time,
    tel
  } = route.params;
  return (
    <Center 
      flex={1} _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "white" }}
    >
      <ScrollView >
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{uri: image }}
            alt='drinkImage'
          />
        </AspectRatio>
        <Box shadow={1} _dark={{ bg: "blueGray.900", borderColor: 'blueGray.500', borderWidth: 0.6 }}
        _light={{ bg: "blueGray.50" }} padding="2" margin="2">
          <Center>
            
            <Heading pt={1} fontSize="4xl" color='#6099E4' marginLeft={"-60%"}>{title}</Heading>
            <Box marginTop={"-9%"} marginLeft={"30%"} >
              <Starrating_detail value={rate} />
            </Box>
            <Text fontSize={"20"} marginLeft={"87%"} fontWeight={"600"} marginTop={"-7%"}>{score}</Text>
            
            {/* <Heading fontSize="4xl">Price: ${price}</Heading> */}
            <VStack marginLeft={"-30%"} marginTop={"5%"}  >

              <Text fontSize={"18"} >地址:{address}</Text>
              <Text fontSize={"18"} >電話:{tel}</Text>
              <Text fontSize={"18"} >營業時間:{time}</Text>
            </VStack>
            <MaterialCommunityIcons  name="star" color={color} size={45} />
          </Center>
          
          <Button 
            mt="4"
            onPress={() => Linking.openURL(url)}
          >
            Buy Now !
          </Button>   
        </Box>
        <Box shadow={1} _dark={{ bg: "blueGray.900", borderColor: 'blueGray.500', borderWidth: 0.6 }}
        _light={{ bg: "blueGray.50" }} padding="2" margin="2">
            <Text>
              <Text bold>Artist: </Text>
              {artist}
            </Text>
            <Text>            
              <Text bold>Title: </Text>
              {title}
            </Text>
            <Text mt='15' bold>Descriptions:</Text>
            <Text>{'\t'}{description}</Text>
        </Box>
      </ScrollView>      
    </Center>

  );
}

export default DetailScreen;
