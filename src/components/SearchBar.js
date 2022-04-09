import React from "react";
import { VStack, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, Divider, Heading } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

function SearchBar() {
  return <VStack   w="100%" maxW="300px">
      <VStack w="100%" alignSelf="center">
        <Input placeholder="Search" variant="filled" width="100%" borderRadius="10" py="1" px="2" borderWidth="0" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
      </VStack>
    </VStack>;
}

function Example() {
  return <Center flex={1} px="2">
      <SearchBar/>
    </Center>;
}

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };