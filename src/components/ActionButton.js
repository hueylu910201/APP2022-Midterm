import React from 'react';
import { Center, Pressable, Actionsheet, useDisclose,useColorMode} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionScreen from '../screens/ActionScreen';
import { Ionicons } from '@expo/vector-icons'; 
import { Marker } from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default (props) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const { zoomRatio, site } = props;
  const { colorMode } = useColorMode();
  return (
    
    /* <Button  title='btn' onPress={()=>{
            onOpen() 
            console.log('actionsheet')}}
      /> */
      <Marker
          coordinate={{ latitude: site.latitude, longitude: site.longitude }}
          key={`${site.id}${site.line}`}
          title={site.name}
          description={site.address}
          onPress={onOpen} 
        >

    
          <Center bg={colorMode=="light"?'white':'#028aeb'} borderRadius={60} p={2 * zoomRatio} borderWidth={2 * zoomRatio} borderColor={colorMode=="light"?'#028aeb':'white'}>
            {/* <Icon name={"bicycle"} size={30 * zoomRatio} color="black" /> */}
            <MaterialCommunityIcons name="glass-cocktail" size={20 * zoomRatio} color={colorMode=="light"?'#028aeb':'white'} />
          </Center>
        
      
          <Actionsheet isOpen={isOpen} onClose={onClose} >

              <ActionScreen onClose={onClose} site={site} />
        
          </Actionsheet>
      </Marker>
    
  );
}
