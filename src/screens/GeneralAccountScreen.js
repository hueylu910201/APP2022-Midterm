import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView, FormControl, useColorMode, VStack, Text, Input, WarningOutlineIcon, KeyboardAvoidingView, HStack } from 'native-base'

import { setGeneralAccountInfo } from "../redux/actions/accountActions";
import { Pressable } from "react-native";


const GeneralAccountScreen = () => {
   const { general } = useSelector((state) => state.account);

   const [name, setName] = useState(general.name);
   const [nameIsError, setNameIsError] = useState(true);
   const [email, setEmail] = useState(general.email);
   const [emailIsError, setEmailIsError] = useState(true);
   const [adrs, setAdrs] = useState(general.adrs);
   const [tel, setTel] = useState(general.tel);

   const dispatch = useDispatch();

   const { colorMode } = useColorMode();
   const formLabelStyle = {
      color: colorMode == "light" ? "muted.700" : "white",
      fontSize: "xl",
      fontWeight: 600
   };
   const focusInputStyle = {
      borderColor: colorMode == "light" ? "muted.700" : "white",
   }

   const nameRegex = /^[a-zA-Z]+\w*$/;
   const emailRegex = /\w{3,}@[a-zA-Z_]+\.[a-zA-Z]{2,5}/

   useEffect(() => {
      if (!nameIsError && !emailIsError)
         dispatch(setGeneralAccountInfo({ name, email, adrs, tel }))

      if (email.match(emailRegex)) setEmailIsError(false)
      else setEmailIsError(true);

      if (name.match(nameRegex)) setNameIsError(false)
      else setNameIsError(true);
   }, [name, email, adrs, tel]);

   return (
      <ScrollView _light={{bg:"#E2F0FF"}} _dark={{bg:"black"}}>
         <VStack space={2} mt={5} width="80%" alignSelf="center">
            <Text textAlign="center" fontSize="3xl" pb="4">
               註冊帳號
            </Text>
            <FormControl mb={5} isRequired isInvalid={nameIsError}>
               <FormControl.Label _text={formLabelStyle}>
                  用戶名稱
               </FormControl.Label>
               <Input
                  _light={{bg:"#fff"}}
                  _dark={{bg:"#4f4f4f"}}
                  borderRadius={10}
                  variant="underlined" _focus={focusInputStyle} value={name}
                  onChangeText={text => setName(text)}
               />
               <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                  必須是英文開頭!
               </FormControl.ErrorMessage>
            </FormControl>
            <FormControl mb={5} isRequired isInvalid={emailIsError}>
               <FormControl.Label _text={formLabelStyle}>
                  電子信箱
               </FormControl.Label>
               <Input
                  _light={{bg:"#fff"}}
                  _dark={{bg:"#4f4f4f"}}
                  borderRadius={10}               
                  variant="underlined" _focus={focusInputStyle} value={email}
                  onChangeText={text => setEmail(text)}
               />
               <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                  請輸入正確的信箱!
               </FormControl.ErrorMessage>
            </FormControl>
            <FormControl mb={5} isRequired>
               <FormControl.Label _text={formLabelStyle}>
                  密碼
               </FormControl.Label>
               <Input
                  _light={{bg:"#fff"}}
                  _dark={{bg:"#4f4f4f"}}
                  borderRadius={10}               
                  variant="underlined" _focus={focusInputStyle}
                  value={adrs} onChangeText={text => setAdrs(text)}
                  secureTextEntry={true}
               />
            </FormControl>
            <FormControl mb={5} isRequired>
               <FormControl.Label _text={formLabelStyle}>
                  確認密碼
               </FormControl.Label>
               <Input
                  _light={{bg:"#fff"}}
                  _dark={{bg:"#4f4f4f"}}
                  borderRadius={10}               
                  variant="underlined" _focus={focusInputStyle}
                  value={tel} onChangeText={text => setTel(text)}
                  secureTextEntry={true}
               />
            </FormControl>
            <Pressable onPress={()=>alert("已送出")}>
               <HStack mx="auto" _light={{bg:"#fff"}} _dark={{bg:"#4f4f4f"}} padding={3}  marginBottom={7} borderRadius={10}>
                  <Text fontSize={16}>確認送出</Text>
               </HStack>
            </Pressable>
         </VStack>
      </ScrollView>

   );
}

export default GeneralAccountScreen;