import React ,{useState}from "react";
import { Text, HStack, Pressable } from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";

const ListItem = ({ title, navigation, destination }) => {
  const {FontSize,setFontSize}=useState(16);
  return (
    <Pressable
      onPress={() => {
        destination ? navigation.navigate(destination) : null;
      }}
    >
      <HStack
        _dark={{
          bg: "blueGray.900",
          borderColor: "blueGray.500",
          borderButtomWidth: 1.0
        }}
        _light={{ bg: "blue.100" }}
        px="4"
        py="4"
        borderTopWidth={1}
        borderColor="lightgray"
        justifyContent="space-between"
      >
        <Text fontSize={16}>{title}</Text>
        {/* <AntDesign name="right" color="gray" size={16} /> */}
      </HStack>
    </Pressable>
  );
};

export default ListItem;
