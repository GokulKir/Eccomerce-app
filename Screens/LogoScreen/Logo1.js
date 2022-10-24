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

export default function Logo1 ({navigation}) {
    const CartItems = useSelector(state => state)
    return (
         <View  style={{marginLeft:10,flexDirection:'row'}}>
            <View style={{alignItems:'center',marginLeft:166}}>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Icon name="search" size={29} color="#fff"/>

                </TouchableOpacity>


            </View>
            
            <View style={{alignItems:'center',marginLeft:30}}>
                <TouchableOpacity>
                    <Icon name="shopping-bag" size={27} color="#fff">
                    <View style={{width:20,height:20,backgroundColor:'red',borderRadius:100,alignItems:'center'}}>
                 <Text style={{color:'#fff',fontWeight:'bold'}}>{CartItems.length}</Text>
                    </View>
                    </Icon>
                   

                </TouchableOpacity>
          


            </View>
            
       
         
         </View>
    )
} 

