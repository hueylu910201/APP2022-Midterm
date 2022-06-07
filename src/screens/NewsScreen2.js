import React, { useState, useEffect }from "react";
import { Box ,Text,HStack, VStack,color,Image} from "native-base";
import NewsList2 from "../components/NewsList2";
import newsData2 from "../json/news2.json";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FadeInView from "../Theme/FadeAnim";

const NewsScreen2 = ({ navigation }) => {
  const [value, setValue] = useState()
  function updateSearch(value) {
      //do your search logic or anything
      console.log(value)
  }    const renderItem = ({ item }) => <NewsList2 drink={item} navigation={navigation} />;
  return (

    <Box>
        <FadeInView>
      <NewsList2 
        list={newsData2.drinkList2}
        renderItem={renderItem}
        navigation={navigation}
        keyExtractor={item => item.title}
      />
      </FadeInView>
    </Box>
  );
};

export default NewsScreen2;