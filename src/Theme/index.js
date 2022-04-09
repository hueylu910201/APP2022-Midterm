import { DefaultTheme } from '@react-navigation/native';

const MyTheme = {
   ...DefaultTheme,
   colors: {
     ...DefaultTheme.colors,
     light400: 'black',
     primary700: '#00a6de',
     primary100: 'white',
   },
 };

 export default MyTheme;