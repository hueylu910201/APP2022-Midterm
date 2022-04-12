import React from "react";
import { Box, HStack , color,useColorMode} from "native-base";
import ListItem from "../components/ListItem";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingsScreen = ({ navigation }) => {
    const { colorMode } = useColorMode();
    return (
        <Box 
            flex={1}
            _dark={{ bg: "blueGray.900" }}
            _light={{ bg: "blueGray.50" }}        
        >
            <Box
                 mt="1" borderBottomWidth={1} borderColor="lightgray"
                 _dark={{ borderColor: 'blueGray.500', borderButtomWidth: 0.6 }}
            >
                <HStack  _light={{bg:"blue.100"}}>
                    <Box marginTop={4} marginLeft={3}>
                        <MaterialCommunityIcons name="account"  color={ colorMode == "light" ? "black" : "white"}  size={26}/>
                    </Box>
                    <Box>
                        <ListItem title="帳號設定" navigation={navigation} destination="" />
                    </Box>
                    
                </HStack>
            </Box>            
            <Box 
                mt="1" borderBottomWidth={1} borderColor="lightgray"
                _dark={{ borderColor: 'blueGray.500', borderButtomWidth: 0.6 }}
            >
                <HStack _light={{bg:"blue.100"}} >
                    <Box marginTop={4} marginLeft={3}>
                        <MaterialCommunityIcons name="white-balance-sunny"  color={ colorMode == "light" ? "black" : "white"}  size={26}/>
                    </Box>
                    <Box bg="blue.100">
                        <ListItem title="深色模式" navigation={navigation} destination="DisplaySetting" />
                    </Box>
                    
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
