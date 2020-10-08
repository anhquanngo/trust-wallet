import React from 'react';
import {Animated} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';


export const Loading = () => {
    return <Animated.View>
        <Ionicon name="reload-outline" size={30} color="#ffffffcc"/>
    </Animated.View>
}