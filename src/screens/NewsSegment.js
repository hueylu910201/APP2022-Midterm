import React, { useState } from 'react';
import SegmentedControlTab from "react-native-segmented-control-tab";
import { Box, useColorMode } from "native-base";

import NewsScreen from './NewsScreen';
import NewsScreen2 from './NewsScreen2';


export default function TabVAccountSettingScreeniewExample() {
   const [selectedIndex, setSelectedIndex] = useState(0);
   const { colorMode } = useColorMode();

   const SegmentedContent = () => {
      return (
         selectedIndex == 0 ?
         <NewsScreen /> :
         <NewsScreen2 />
      );
   }

   return (
      <Box flex={1}
         _dark={{ bg: "blueGray.900" }}
         _light={{ bg: "blueGray.50" }}>
         <SegmentedControlTab
            values={["最新消息", "熱門貼文"]}
            tabStyle={{ 
               marginTop: 10,borderColor: colorMode == "light" ? "#014e91" : "black", 
               borderWidth: colorMode=="light"? 1: 4,
               backgroundColor: colorMode == "light" ? "#F4FAFF" : "black" 
            }}
            firstTabStyle={{ marginLeft: 20 }}
            lastTabStyle={{ marginRight: 20 }}
            tabTextStyle={{ fontSize: 16, padding: 5, color: colorMode == "light" ? "black" : "white", }}
            activeTabStyle={{ backgroundColor: colorMode == "light" ? "#E2F0FF" : "#282A2E" }}
            activeTabTextStyle={{ color: colorMode == "light" ? "black" : "white" }}
            selectedIndex={selectedIndex}
            onTabPress={(index) => setSelectedIndex(index)}
         />
         <SegmentedContent />
      </Box>
   );
}