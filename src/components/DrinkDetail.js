import React ,{useState}from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable , useColorMode} from "native-base"
import  Starrating from "./Starrating";
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DrinkDetail = ({ drink, navigation }) => {

  const [toggle, setToggle] = useState(true);
    const toggleFunction = () => {
        setToggle(!toggle);
    };
    const { colorMode } = useColorMode();
  return (
    <Box padding={3} 
      borderWidth={2} borderRightRadius={5} borderColor="#dcebfa"
      marginX={1} marginBottom={2} borderRadius={10} shadow={2}
      _dark={{ borderColor: 'blueGray.500', borderWidth: 0.6 }}
      _light={{ bg: "#eff6fd" }}>
      <Pressable onPress={() => navigation.navigate('Detail', drink)}>
      <HStack 
        _dark={{ bg: "blueGray.900"}}
      >
        <AspectRatio w="100" ratio={1}>
          <Image
            margin="1"
            source={{ uri: drink.thumbnail_image }}
            alt="drink-image"
            key={drink.thumbnail_image}
          />
        </AspectRatio>
        <VStack paddingLeft={2} >
          <HStack>
            <Text fontSize={26} fontWeight="700" key={drink.title}>{drink.title}</Text>
            <TouchableOpacity onPress={() => toggleFunction()} >
                <Box name={'heart-outline'} color={'red'}>
                  <Text paddingLeft={3} paddingTop="2.5">{toggle ? 
             
                    <MaterialCommunityIcons name={'heart-outline'} color={colorMode == "light" ? "black" : "white"}  size={25} />:
                    <MaterialCommunityIcons name={'heart'} color={'#ff5e5e'} size={25} />}
                  
                   </Text>
                </Box>    
              </TouchableOpacity>
          </HStack>
          <Text fontSize={18} key={drink.address}>{drink.address}</Text>
          <HStack marginTop={2}>
            <Starrating  key={drink.rate} value={drink.rate}/>
            <Text paddingLeft="5%" marginTop="-2%" fontSize={15}>{drink.score}</Text>
          </HStack>
          

        </VStack>
      </HStack>
      </Pressable>
    </Box>
  )};

export default DrinkDetail;