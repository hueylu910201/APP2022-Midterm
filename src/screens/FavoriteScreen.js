import React ,{useState}from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable , useColorMode,Center} from "native-base";
import { FlatList } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FavoriteDetail from "../components/Favorite";
import { useSelector } from "react-redux";
const FavoriteScreen=({ navigation })=>{
    const { colorMode } = useColorMode();
    const drink = useSelector((state)=>state.favDrink.drink);
    const renderItem=({item})=><FavoriteDetail drink={item} navigation={navigation}/>;
    return(
    //    <VStack
    //     flex={1}
    //     _dark={{ bg: "blueGray.900" }}
    //     _light={{ bg: "#E2F0FF" }}        
    //    >
    //        <Pressable onPress={() => navigation.navigate('AccountSetting', drink)}>
    //             <HStack padding={5}  borderBottomWidth={1}borderBottomColor={"#b8b8b8"} _dark={{borderBottomColor:"#fff"}}>
    //                 <Text paddingTop={3} marginRight={2}> <MaterialCommunityIcons name="account-multiple-plus" size={35}/></Text>
                    
    //                     <Text fontSize={20}>註冊新帳號即可擁有折價券!</Text>
    //                     <Box paddingTop={2}><AntDesign name="right" color="gray" size={16} /></Box>
    //                     <Text paddingTop={3} fontSize={12}>5小時前</Text>
                        
    //             </HStack>
    //        </Pressable>
    //         <Pressable onPress={() => navigation.navigate('NewsStack', drink)}>
    //             <HStack padding={5}  borderBottomWidth={1}borderBottomColor={"#b8b8b8"} _dark={{borderBottomColor:"#fff"}}>
    //                 <AspectRatio  w="10" ratio={1}>
    //                     <Image
    //                         source={{uri:"https://milkteabank.com.tw/wp-content/uploads/2020/04/50240902_1009612122580087_1444896843132567552_n.jpg"}}
    //                         alt="notice-img"
    //                     />
    //                 </AspectRatio>
    //                     <Text fontSize={20} paddingTop={1} paddingLeft={2}>米堤銀行最消息看這裡!</Text>
    //                     <Box paddingTop={3}><AntDesign name="right" color="gray" size={16} /></Box>
    //                     <Text paddingTop={4} fontSize={12}>7天前</Text>
    //             </HStack>    
    //         </Pressable>

    //         <Pressable onPress={() => navigation.navigate('NewsStack', drink)}>
    //             <HStack padding={5}  borderBottomWidth={1}borderBottomColor={"#b8b8b8"} _dark={{borderBottomColor:"#fff"}}>
    //                 <Text paddingTop={3} marginRight={2}> <MaterialCommunityIcons name="notification-clear-all" size={35}/></Text>
                    
    //                     <Text fontSize={20}>你喜歡的店家有新貼文!</Text>
    //                     <Box paddingTop={2}><AntDesign name="right" color="gray" size={16} /></Box>
    //                     <Text paddingTop={3} fontSize={12}>2週前</Text>
    //             </HStack>      
    //       </Pressable>
    //    </VStack> 
        <VStack _dark={{bg:"blueGray.900"}} flex={1}>
            <Center  marginTop={5} >
                <Box _dark={{ backgroundColor:"black",borderColor:'gray.700'}} backgroundColor="#eff6fd" borderWidth={7} borderColor="#BCDCFF" borderLeftWidth={0} borderTopWidth={0} padding={3} paddingLeft={8} paddingRight={8} borderRadius={10}>
                <Text fontSize={28} fontWeight={'bold'}>已珍藏的店家</Text>
           </Box>
            </Center>   
            <FlatList
                data={drink}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </VStack>
     );
}
export default FavoriteScreen;