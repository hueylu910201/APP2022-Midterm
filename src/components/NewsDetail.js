import React ,{useState}from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable , useColorMode} from "native-base"
import  Starrating from "./Starrating";
import {Linking, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NewsDetail = ({ drink, navigation }) => {

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
      <Pressable onPress={()=>Linking.openURL(drink.url)}>
      <VStack 
        _dark={{ bg: "blueGray.900"}}
      >
        <AspectRatio w="355" mx="auto" ratio={16/9}>
          <Image
            margin="0.5"
            mx="auto"
            paddingRight="6"
            source={{ uri: drink.thumbnail_image }}
            alt="artist"
          />
        </AspectRatio>
        <VStack  >
          <HStack>
            <Text fontSize={26} fontWeight="700">{drink.title}</Text>            
            <Text paddingLeft="5%"  paddingTop="3" fontSize={15}>{drink.date}</Text>
          </HStack>
          <Text fontSize={15}>{drink.content}</Text>         
        </VStack>
      </VStack>
      </Pressable>
    </Box>
  )};

export default NewsDetail;