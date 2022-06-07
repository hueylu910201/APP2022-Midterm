import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,styles,ScrollView,Dimensions} from 'react-native'; 
import React from "react";
// import {createAppCountainer} from 'react-navigation';
// import {createStackNavigatior} from 'react-navigation-stack';
// import Home from "./screen/Home";
// import Carousel from 'react-native-reanimated-carousel';

const {width}=Dimensions.get("window");
const height = width*0.6;

const image=[
  'https://github.com/hueylu910201/book-imges/blob/main/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202022-04-12%20120240.png?raw=true',
  'https://github.com/hueylu910201/book-imges/blob/main/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202022-04-12%20144336.png?raw=true',
  'https://github.com/hueylu910201/book-imges/blob/main/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202022-04-12%20115110.png?raw=true',
  'https://cc.tvbs.com.tw/img/program/upload/2021/07/26/20210726102106-eadbedc5.jpg',
  'https://cc.tvbs.com.tw/img/program/upload/2021/01/11/20210111151604-cf94e111.jpg'
]

export default class Slider extends React.Component{
    state={
      active:0
    }

    change = ({nativeEvent})=>{
      const slide=Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);
      if(slide!==this.state.active){
        this.setState({active:slide});
      }
    }
    render(){
  
    return (
      
      <View style={style.container}>
        <ScrollView pagingEnabled horizontal onScroll={this.change} showsHorizontalScrollIndicator={false} style={{width,height}}>
            {
              image.map((image,index)=>(
                <Image
                key={index}
                source={{uri:image}}
                style={style.image}
            />

              ))
            }
       </ScrollView>
       <View style={style.pagination}>
         {
           image.map((i,k) => (
            <Text key={k} style={k==this.state.active? style.pagingActiveText:style.pagingText}>●</Text>
           ))
         }
         
       </View>
      </View>
    )
  }

}

// const stackNavigator = createStackNavigatior({
//     Home:Home

// })

// const App= createAppCountainer(stackNavigator)
// export default App

const style = StyleSheet.create({
  container: {marginTop:50,height,width},
  scroll:{height,width},
  image:{width,height,resizeMode:'cover'},
  pagination:{flexDirection:'row',position:'absolute',bottom:0,alignSelf:'center'},
  pagingText:{color:'#888',fontSize:30,margin:2},
  pagingActiveText:{color:'#fff',fontSize:30,margin:2}
})