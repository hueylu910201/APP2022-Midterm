import React ,{useState}from "react";
import { Box, HStack , color,useColorMode,AspectRatio,Image,Text,Switch,Button} from "native-base";
import ListItem from "../components/ListItem";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Pressable } from "react-native";

const SettingsScreen = ({ navigation }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    // const {FontSize,setFontSize}=useState(16);
    // const letChangeTextSize = () => {
 
    //     if (FontSize == 16) {
    //       setFontSize(FontSize===32);
    //     } else {
    //       setFontSize(FontSize===16);
    //     }
    //   }
    return (
        <Box 
            flex={1}
            _dark={{ bg: "blueGray.900" }}
            _light={{ bg: "blueGray.50" }}        
        >
            {/* <Box  margin={3}>
                <HStack>
                    <AspectRatio  w="60" ratio={1}>
                        <Image
                            source={{uri:"https://github.com/hueylu910201/book-imges/blob/main/Mask%20group.png?raw=true"}}
                            alt="notice-img"
                        />
                    </AspectRatio>
                    <Text  fontSize={20} my="auto" paddingLeft={3}>-老呂-</Text>
                </HStack>
            </Box> */}
            {/* <Box
                 mt="1" borderBottomWidth={1} borderColor="lightgray"
                 _dark={{ borderColor: 'blueGray.500', borderButtomWidth: 0.6 }}
            >
                <HStack  _light={{bg:"blue.100"}}>
                    <Box marginTop={4} marginLeft={3}>
                        <MaterialCommunityIcons name="account"  color={ colorMode == "light" ? "black" : "white"}  size={26}/>
                    </Box>
                    <Box>
                        <ListItem title="註冊帳號" navigation={navigation} destination="AccountSetting" />
                    </Box>
                    
                </HStack>
            </Box>             */}
            <Box 
                mt="1" borderBottomWidth={1} borderColor="lightgray"
                _dark={{ borderColor: 'blueGray.500', borderButtomWidth: 0.6 }}
            >
                <HStack _light={{bg:"blue.100"}} >
                    <Box marginTop={4} marginLeft={3}>
                        <MaterialCommunityIcons name="white-balance-sunny"  color={ colorMode == "light" ? "black" : "white"}  size={26}/>
                    </Box>
                    <HStack space={20} alignItems="center" >
                    <ListItem title="深色模式"/>
                    <Switch
                        right={-85}
                        name="light Mode"
                        isChecked={colorMode === "dark"}
                        onToggle={toggleColorMode}
                        accessibilityLabel="display-mode"
                        accessibilityHint="light or dark mode"
                    />
                </HStack>
                    
                </HStack>
               
            </Box>

            <Box 
                mt="1" borderBottomWidth={1} borderColor="lightgray"
                _dark={{ borderColor: 'blueGray.500', borderButtomWidth: 0.6 }}
            >
                <HStack _light={{bg:"blue.100"}} >
                    <Box marginTop={4} marginLeft={3}>
                        <MaterialCommunityIcons name="format-letter-case"  color={ colorMode == "light" ? "black" : "white"}  size={26}/>
                    </Box>
                    <Box bg="blue.100">
                        <ListItem title="字體大小" navigation={navigation}  />
                    </Box>
                </HStack>
               
            </Box>

            <Box 
                mt="1" borderBottomWidth={1} borderColor="lightgray"
                _dark={{ borderColor: 'blueGray.500', borderButtomWidth: 0.6 }}
            >
                <HStack _light={{bg:"blue.100"}} >
                    <Box marginTop={4} marginLeft={3}>
                        <MaterialCommunityIcons name="bell"  color={ colorMode == "light" ? "black" : "white"}  size={26}/>
                    </Box>
                    <Box bg="blue.100">
                        <ListItem title="通知" navigation={navigation}  />
                    </Box>
                    
                </HStack>
               
            </Box>
            <Box 
                mt="1" borderBottomWidth={1} borderColor="lightgray"
                _dark={{ borderColor: 'blueGray.500', borderButtomWidth: 0.6 }}
            >
                <HStack _light={{bg:"blue.100"}} >
                    <Box marginTop={4} marginLeft={3}>
                        <MaterialCommunityIcons name="comment-question"  color={ colorMode == "light" ? "black" : "white"}  size={26}/>
                    </Box>
                    <Box bg="blue.100">
                        <ListItem title="常見問題" navigation={navigation}  />
                    </Box>
                    
                </HStack>
               
            </Box>                                  
          
        </Box>

    );
};

export default SettingsScreen;
