import React,{ useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    Button,
    TouchableOpacity,
    ScrollView,
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { useSelector } from 'react-redux';
export default function Logo2 ({navigation}) {
    
    return (
         <View  style={{marginLeft:10,flexDirection:'row'}}>
           <Text style={{color:'#fff'}}>ADD DELIVERY ADDRESS</Text>
         </View>
    )
} 

