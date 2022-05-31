import React from 'react';
import {
   Box, VStack,
   Center,
   Text, Pressable, HStack,AspectRatio,Image,useColorMode
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ActionScreen = ({ onClose, site }) => {
   const {
        id,
        name,
        address,
        tel,
        time,
        image,
   } = site;
   const { colorMode } = useColorMode();
//    const getTime = (m) => {
//       const mday = String(m);
//       const year = mday.slice(0, 4);
//       const month = Number(mday.slice(4, 6));
//       const date = Number(mday.slice(6, 8));
//       const hour = Number(mday.slice(8, 10));
//       const min = Number(mday.slice(10, 12));
//       const sec = Number(mday.slice(12));
//       const time = `${year}/${month}/${date} ${hour}:${min}:${sec}`;
//       return time;
//    }
   return (

      <VStack h="50%" w="100%" bg={colorMode=="light"?"blueGray.50":"black"} borderRadius={20} >
         <Pressable onPress={onClose} position="absolute" top={2} right={3}>
            <MaterialCommunityIcons name="close" color="gray" size={30} />
         </Pressable>
         <Box borderColor={"gray"} w={"15%"} h={1} borderRadius={3} bg="gray" mt={3} alignSelf="center"></Box>
         <Text fontSize="lg" my={6} textAlign="center">{name}</Text>
         <VStack>
            <Box px={6} alignItems="flex-start">
               <Text><Text fontWeight={'bold'}>地址：</Text>{address}</Text>
            </Box>
            <HStack px={6} alignItems="flex-start">
               <Text><Text fontWeight={'bold'}>電話：</Text>{tel}</Text>
            </HStack>
            <HStack px={6} alignItems="flex-start">
               <Text><Text fontWeight={'bold'}>營業時間：</Text>{time}</Text>
            </HStack>
         </VStack>
         <HStack alignItems="center" paddingLeft={5} paddingTop={3} paddingBottom={3}>
            <AspectRatio w="95%" ratio={16 / 9}>
               <Image
                  source={{uri: image }}
                  alt='drinkImage'
               />
            </AspectRatio>
         </HStack>
         

      </VStack>
   );
};

export default ActionScreen;