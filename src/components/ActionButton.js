import React from 'react';
import { Box, Pressable, Actionsheet, useDisclose ,useColorMode} from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default () => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const { colorMode } = useColorMode();
  return (
    <>
      <Pressable
        onPress={onOpen}
        position="absolute" left={"50%"} right={"50%"} bottom={"8%"} ml={-25}
        width={50} height={50} borderRadius={300}
        _light={{bg:"#B2D7FF"}} _dark={{bg:"#707070"}}
        bg="#B2D7FF" shadow={2} justifyContent="center" alignItems="center" zIndex={99} 
      >
        <Box>
          <MaterialCommunityIcons name="comment-plus" color="white" size={30} />
        </Box>
      </Pressable>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Header>功能選單</Actionsheet.Header>
          <Actionsheet.Item>最新動態</Actionsheet.Item>
          <Actionsheet.Item>按讚的貼文</Actionsheet.Item>
          <Actionsheet.Item>喜歡的店家</Actionsheet.Item>
        </Actionsheet.Content>
        <Actionsheet.Footer safeAreaBottom={true}>
          <Actionsheet.Item pl="6" onPress={onClose}>關閉</Actionsheet.Item>
        </Actionsheet.Footer>          
      </Actionsheet>
    </>
  );
}
