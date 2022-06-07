import React ,{useState}from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable , useColorMode} from "native-base"
import  Starrating from "../components/Starrating";
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Store} from "../redux/store/index";
import { useDispatch } from "react-redux";
import { removeFavoriteDrink } from "../redux/actions/action";

const FavoriteDetail = ({ drink, navigation }) => {

  const [toggle, setToggle] = useState(true);
    const toggleFunction = () => {
        setToggle(!toggle);
    };
    const { colorMode } = useColorMode();

    const {
        title,
        id,
        address,
        thumbnail_image,
        score,
        rate,
        url,
        urlIG,
        urlWEB,
        image,
        time,
        tel,
        menu,
    }=drink;
    const dispatch=useDispatch();
    const [isFav,setIsFav]=useState(true);
    const removeFav=()=>{
        setIsFav(false)
        dispatch(removeFavoriteDrink(id));
    }
  return (

    <HStack padding={3} 
      borderWidth={6} borderRightRadius={5} borderColor="#BCDCFF" borderLeftWidth={0} borderTopWidth={0}
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
            <Text fontSize={26} fontWeight="700" key={drink.title}>{title}</Text>
            <Pressable onPress={removeFav} >
                <Box name={'heart-outline'} color={'red'}>
                  <Text paddingLeft={3} paddingTop="2.5">
                    {isFav==false ? 

                        <MaterialCommunityIcons name={'heart-outline'} color={colorMode == "light" ? "black" : "white"}  size={25} />
                        :<MaterialCommunityIcons name={'heart'} color={'#ff5e5e'} size={25} />
                    }
                  
                   </Text>
                </Box>    
              </Pressable>
          </HStack>
          <Text fontSize={18} key={drink.address}>{address}</Text>
          <HStack marginTop={2}>
            <Starrating  key={drink.rate} value={rate}/>
            <Text paddingLeft="5%" marginTop="-2%" fontSize={15}>{score}</Text>
          </HStack>
          

        </VStack>
      </HStack>
      </Pressable>
    </HStack>
  )};

export default FavoriteDetail;