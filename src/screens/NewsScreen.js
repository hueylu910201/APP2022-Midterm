import React, { useState, useEffect }from "react";
import { Box ,Text,HStack, VStack,color,Image} from "native-base";
import NewsList from "../components/NewsList";
import newsData from "../json/news.json";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FadeInView from "../Theme/FadeAnim";

const NewsScreen = ({ navigation }) => {
  const [value, setValue] = useState()
  function updateSearch(value) {
      //do your search logic or anything
      console.log(value)
  }    const renderItem = ({ item }) => <NewsList drink={item} navigation={navigation} />;
  return (

    <Box>
      <FadeInView>
      <NewsList 
        list={newsData.drinkList}
        renderItem={renderItem}
        navigation={navigation}
        keyExtractor={item => item.title}
      />
      </FadeInView>
    </Box>
  );
};

export default NewsScreen;