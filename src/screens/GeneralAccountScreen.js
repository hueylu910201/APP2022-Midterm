import { useState } from "react";
import { ScrollView, FormControl, useColorMode, VStack, Text, Input, HStack} from 'native-base'
import { Pressable } from "react-native";

const GeneralAccountScreen = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setpassword] = useState("");
   const [password2, setpassword2] = useState("");
   const [birth, setbirth] = useState("");

   const { colorMode } = useColorMode();
   const formLabelStyle = {
      color: colorMode == "light" ? "black" : "white",
      fontSize: "xl",
      fontWeight: 600
   };
   const focusInputStyle = {
      borderColor: colorMode == "light" ? "black" : "white",
   }

   return (
      <ScrollView flex={1} _light={{bg:"#96b5d6"}} _dark={{bg:"#4b4c4d"}}>
         <VStack space={2} mt={5} width="80%" alignSelf="center">
            <Text textAlign="center" fontSize="2xl" pb="4">
               註冊帳號
            </Text>
            <FormControl mb={5} isRequired>
               <FormControl.Label _text={formLabelStyle}>
                  用戶名稱
               </FormControl.Label>
               <Input 
                  _light={{bg:"#f5f5f5"}} _dark={{bg:"#737373"}} borderRadius={15}
                  variant="underlined" _focus={focusInputStyle} 
                  value={name} onChangeText={text => setName(text)} 
               />
            </FormControl>
            <FormControl mb={5} isRequired >
               <FormControl.Label _text={formLabelStyle}>
                  電子信箱
               </FormControl.Label>
               <Input 
                  _light={{bg:"#f5f5f5"}} _dark={{bg:"#737373"}} borderRadius={15}
                  variant="underlined" _focus={focusInputStyle}
                  value={email} onChangeText={text => setEmail(text)} 
               />
            </FormControl>
            <FormControl mb={5}>
               <FormControl.Label _text={formLabelStyle}>
                  生日
               </FormControl.Label>
               <Input 
                  _light={{bg:"#f5f5f5"}} _dark={{bg:"#737373"}} borderRadius={15}
                  variant="underlined" _focus={focusInputStyle}
                  value={birth} onChangeText={text => setbirth(text)} 
               />
            </FormControl>
            <FormControl mb={5} isRequired>
               <FormControl.Label _text={formLabelStyle}>
                  密碼
               </FormControl.Label>
               <Input 
                   _light={{bg:"#f5f5f5"}} _dark={{bg:"#737373"}} borderRadius={15}
                  variant="underlined" _focus={focusInputStyle} secureTextEntry={true}
                  value={password} onChangeText={text => setpassword(text)} 
               />
            </FormControl>
            <FormControl mb={5} isRequired>
               <FormControl.Label _text={formLabelStyle}>
                  確認密碼
               </FormControl.Label>
               <Input
                   _light={{bg:"#f5f5f5"}} _dark={{bg:"#737373"}} borderRadius={15} 
                  variant="underlined" _focus={focusInputStyle} secureTextEntry={true}
                  value={password2} onChangeText={text => setpassword2(text)} 
               />
            </FormControl>
            <Pressable onPress={() => alert("已送出!")}>
               <HStack marginBottom={30} mx="auto"  _light={{bg:"#f5f5f5"}} _dark={{bg:"#737373"}} borderRadius={10}>
                  <Text padding={3} fontSize={16}>確認送出</Text>
               </HStack>
            </Pressable>
         </VStack>         
      </ScrollView>

   );
}

export default GeneralAccountScreen;