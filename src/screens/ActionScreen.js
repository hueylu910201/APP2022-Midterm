import React from 'react';
import {
   Box, VStack,
   Center,
   Text, Pressable,
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ActionScreen = ({ onClose, site }) => {
   const {
        id,
        name,
        address,
        latitude,
        longtitude,
   } = site;

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

      <VStack h="50%" w="100%" bg="blueGray.50" borderRadius={20} >
         <Pressable onPress={onClose} position="absolute" top={2} right={3}>
            <MaterialCommunityIcons name="close" color="gray" size={30} />
         </Pressable>
         <Box borderBottomColor={"white"} w={"15%"} h={1} borderRadius={3} bg="gray" mt={3} alignSelf="center"></Box>
         <Text fontSize="lg" my={6} textAlign="center">{name}{" "}站</Text>
         <Box px={6} >
            <Text><Text fontWeight={'bold'}>地址：</Text>{address}</Text>
            <Text mt={2}><Text fontWeight={'bold'}>經度/緯度：</Text>{Number(longtitude).toFixed(2)}/{Number(latitude).toFixed(2)}</Text>
            {/* <Text mt={2}><Text fontWeight={'bold'}>更新時間：</Text>{getTime(line)}</Text> */}
         </Box>

      </VStack>
   );
};

export default ActionScreen;