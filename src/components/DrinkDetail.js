import React ,{useState}from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable } from "native-base"
import  Starrating from "./Starrating";
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DrinkDetail = ({ drink, navigation }) => {

  const [toggle, setToggle] = useState(true);
    const toggleFunction = () => {
        setToggle(!toggle);
    };
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
            alt="artist"
          />
        </AspectRatio>
        <VStack paddingLeft={2} >
          <HStack>
            <Text fontSize={26} fontWeight="bold">{drink.title}</Text>
            <TouchableOpacity onPress={() => toggleFunction()}>
                  <Text paddingLeft={3} paddingTop="2.5">{toggle ? <MaterialCommunityIcons name={'heart-outline'} color={'black'} size={25} />:
                                  <MaterialCommunityIcons name={'heart'} color={'#ff5e5e'} size={25} />}
                  </Text>
              </TouchableOpacity>
          </HStack>
          <Text fontSize={18}>{drink.address}</Text>
          <HStack marginTop={2}>
            <Starrating  value={drink.rate}/>
            <Text paddingLeft="5%" marginTop="-2%" fontSize={15}>{drink.score}</Text>
          </HStack>
          

        </VStack>
      </HStack>
      </Pressable>
      {/* <Box p={1} _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "white" }}>
        
        
          <AspectRatio w="100%" ratio={1}>
            <Image
              source={{ uri: drink.image }}
              alt="drink"
            />            

          *****<Pressable 
          onPress={() => navigation.navigate('Detail', album)}
        >
          <AspectRatio w="100%" ratio={1}>
            <Image
              source={{ uri: album.image }}
              alt="album"
            />            
          </AspectRatio>
        </Pressable>*****

          </AspectRatio>
        </Pressable>
      </Box>    */}
    </Box>
  )};

export default DrinkDetail;
