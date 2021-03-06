import React from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'native-base';
import { extendTheme, useColorMode} from 'native-base';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['NativeBase:']);

import DrinkScreen from '../screens/DrinkScreen';
import NewsScreen from '../screens/NewsScreen';
import DetailScreen from '../screens/DetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import NullScreen from '../screens/NullScreen';
import ActionButton from '../components/ActionButton';
import DisplaySettingScreen from '../screens/DisplaySettingScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
// import GeneralAccountScreen from '../screens/GeneralAccountScreen';
import MyTheme from '../Theme';
import DrinkList from '../components/DrinkList';
import NewsSegment from '../screens/NewsSegment';
import MapScreen from '../screens/MapScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// // Define the config
// const config = {
//   useSystemColorMode: false,
//   initialColorMode: "light",
// };

// // extend the theme
// export const theme = extendTheme({ config });

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const verticalAnimation = {
  gestureDirection: 'vertical',
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0],
            }),
          },
        ],
      },
    };
  },
};
const Navigation = () => {
  const { colorMode } = useColorMode();
  return (
    <NavigationContainer theme={MyTheme} >
     
      <StatusBar
        barStyle={
          colorMode == "light" ? "dark-content" : "light-content"
        }
        backgroundColor={
          colorMode == "light" ? "white" : "black"
        }
        />
      <MyTabs />
    </NavigationContainer>
  );
}



const MyTabs = () => {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarInactiveTintColor: colorMode == 'light' ? colors.light400 : 'gray',
        tabBarActiveTintColor: colorMode == 'light' ? colors.primary700 : 'white',
        tabBarStyle: { backgroundColor: colorMode == 'light' ? 'white' : 'black' },
        // headerShown: false
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "??????",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="NewsStack"
        component={NewsStack}
        options={{
          headerShown: false,
          title: "????????????",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="newspaper-variant-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="map"
        component={MapStack}
        options={{
          headerShown: false,
          title: "??????",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map-marker-radius" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="FavoriteStack"
        component={FavoriteStack}
        options={{
          headerShown: false,
          title: "????????????",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
       {/* <Tab.Screen
        name="ActionButton"
        component={NullScreen}
        options={{
          tabBarButton: () => <ActionButton />
        }}
      /> */}
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          headerShown: false,
          title: "??????",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const MapStack=()=>{
  const { colorMode } = useColorMode();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="??????"
        component={MapScreen}
        options={{
          title: "???????????????",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? 'white' : 'black',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
    </Stack.Navigator>
  );
}

const FavoriteStack=()=>{
  const { colorMode } = useColorMode();
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: "????????????",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? 'white' : 'black',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
    </Stack.Navigator>
  );
}

const SettingsStack = () => {
  const { colorMode } = useColorMode();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "??????",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? 'white' : 'black',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
      <Stack.Screen
        name="DisplaySetting"
        component={DisplaySettingScreen}
        options={({navigation}) => ({
          title:"????????????",
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: colorMode == 'light' ? 'black' : 'white',
          headerStyle: {
            backgroundColor: colorMode == 'light' ? 'white' : 'black',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'chevron-left-circle-outline'}
              size={30}
              color={ colorMode == 'light' ? 'black' : 'white'}
              onPress={() =>navigation.goBack()}
              style={{ marginLeft: 4 }}
            />
          )
        })}
      />

      {/* <Stack.Screen
        name="AccountSetting"
        component={GeneralAccountScreen}
        options={({navigation}) => ({
          title:"????????????",
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: colorMode == 'light' ? 'black' : 'white',
          headerStyle: {
            backgroundColor: colorMode == 'light' ? 'white' : 'black',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'chevron-left-circle-outline'}
              size={30}
              color={ colorMode == 'light' ? 'black' : 'white'}
              onPress={() =>navigation.goBack()}
              style={{ marginLeft: 4 }}
            />
          )
        })}
      /> */}
    </Stack.Navigator>
  );
}

const NewsStack=()=>{
  const { colorMode } = useColorMode();

  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerShown: false
    >
      <Stack.Screen
        name="News"
        component={NewsSegment}
        options={{
          title: '????????????',
          headerTitle:{
            
          },
          headerStyle: {
            backgroundColor: colorMode == 'light' ? 'white' : 'black',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          }
 
        }}
      />
    </Stack.Navigator>
  );

}

const HomeStack = () => {
  const { colorMode } = useColorMode();

  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerShown: false
    // }}
    screenOptions={verticalAnimation}
    >
      <Stack.Screen
        name="Home"
        component={DrinkScreen}
        options={{
          title: '??????',
          headerTitle:{
            
          },
          headerStyle: {
            backgroundColor: colorMode == 'light' ? 'white' : 'black',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
          headerRight: () => (
            <MaterialCommunityIcons
              name={'message-processing'}
              size={24}
              color={ colorMode == 'light' ? 'black' : 'white'}
              onPress={() => alert("message")}
              style={{ marginLeft: -3 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ navigation ,route}) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: colorMode == 'light' ? 'black' : 'white',
          headerStyle: {
            backgroundColor: colorMode == 'light' ? 'white' : 'black',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'chevron-left-circle-outline'}
              size={30}
              color={ colorMode == 'light' ? 'black' : 'white'}
              onPress={() =>navigation.goBack()}
              style={{ marginLeft: 4 }}
            />
          )
        })}
      />
    </Stack.Navigator>
  );
}

export default Navigation;