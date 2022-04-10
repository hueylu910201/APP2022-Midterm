import React ,{useState}from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable , useColorMode} from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const NoticeScreen=()=>{
    const { colorMode } = useColorMode();
    return(
       <VStack
        flex={1}
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "#E2F0FF" }}        
       >
           <HStack padding={5}  borderBottomWidth={1}borderBottomColor={"#b8b8b8"} _dark={{borderBottomColor:"#fff"}}>
               <Text paddingTop={3} marginRight={2}> <MaterialCommunityIcons name="account-multiple-plus" size={35}/></Text>
               
                <Text fontSize={20}>註冊新帳號即可擁有折價券!</Text>
                <Box paddingTop={2}><AntDesign name="right" color="gray" size={16} /></Box>
                <Text paddingTop={3} fontSize={12}>5小時前</Text>
                
           </HStack>

           <HStack padding={5}  borderBottomWidth={1}borderBottomColor={"#b8b8b8"} _dark={{borderBottomColor:"#fff"}}>
               <AspectRatio  w="10" ratio={1}>
                   <Image
                    source={{uri:"https://milkteabank.com.tw/wp-content/uploads/2020/04/50240902_1009612122580087_1444896843132567552_n.jpg"}}
                    alt="notice-img"
                   />
               </AspectRatio>
                <Text fontSize={20} paddingTop={1} paddingLeft={2}>米堤銀行最新活動看這裡!</Text>
                <Box paddingTop={3}><AntDesign name="right" color="gray" size={16} /></Box>
                <Text paddingTop={3} fontSize={12}>7天前</Text>
           </HStack>    

           <HStack padding={5}  borderBottomWidth={1}borderBottomColor={"#b8b8b8"} _dark={{borderBottomColor:"#fff"}}>
               <Text paddingTop={3} marginRight={2}> <MaterialCommunityIcons name="notification-clear-all" size={35}/></Text>
               
                <Text fontSize={20}>你的評論有許多的回應!</Text>
                <Box paddingTop={2}><AntDesign name="right" color="gray" size={16} /></Box>
                <Text paddingTop={3} fontSize={12}>2週前</Text>
           </HStack>      
          
       </VStack>    

     )
}
export default NoticeScreen;