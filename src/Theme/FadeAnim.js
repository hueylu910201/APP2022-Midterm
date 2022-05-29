import { Animated } from "react-native";
import React,{useEffect, useRef} from "react";


const FadeInView=(props)=>{
    const fadeAnim = useRef(new Animated.Value(0)).current;
    useEffect(()=>{
    Animated.timing(fadeAnim,{
        toValue:1,
        duration:1200,
        useNativeDriver:true,
        }).start();
    },[]);
    return(
        <Animated.View
            style={{
                ...props.style,
                opacity:fadeAnim,
            }}
        >
            {props.children}
        </Animated.View>
    )
}
export default FadeInView;