import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable } from "native-base"

const DrinkDetail = ({ drink, navigation }) => {
  return (
    <Box 
      marginX={1} marginBottom={2} borderRadius={3} shadow={2}
      _dark={{ borderColor: 'blueGray.500', borderWidth: 0.6 }}
    >
      <HStack 
        _dark={{ bg: "blueGray.900"}}
        _light={{ bg: "white" }}>
        <AspectRatio w="50" ratio={1}>
          <Image
            margin="1"
            source={{ uri: drink.thumbnail_image }}
            alt="artist"
          />
        </AspectRatio>
        <VStack paddingLeft={2} justifyContent="space-around">
          <Text>{drink.title}</Text>
          <Text>{drink.artist}</Text>
        </VStack>
      </HStack>
      <Box p={1} _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "white" }}>
        <Pressable 
          onPress={() => navigation.navigate('Detail', album)}
        >
          <AspectRatio w="100%" ratio={1}>
            <Image
              source={{ uri: drink.image }}
              alt="drink"
            />            
          </AspectRatio>
        </Pressable>
      </Box>   
    </Box>
  )};

export default DrinkDetail;
