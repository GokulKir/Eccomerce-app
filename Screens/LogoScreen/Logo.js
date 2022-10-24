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
export default function Logo ({navigation}) {
    const CartItems = useSelector(state => state)
    return (
         <View  style={{marginLeft:10,flexDirection:'row'}}>
            <TouchableOpacity >
           <Icon name="search" size={29} color="#fff"/>
           
          
           </TouchableOpacity>
           <View style={{alignItems:'center',marginLeft:93}}>
            <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>ECOM</Text>
           </View>

           <View style={{alignItems:'center',marginLeft:99}}>
            <TouchableOpacity onPress={()=> navigation.navigate('Cart')}>
           <Icon   name="shopping-bag" size={26} color="#fff">
           <View style={{width:20,height:20,backgroundColor:'red',borderRadius:100,alignItems:'center',justifyContent:'center'}}>
                 <Text style={{color:'#fff',fontWeight:'bold'}}>{CartItems.length}</Text>
                    </View>

           </Icon>
         
           </TouchableOpacity>
           </View>
         </View>
    )
} 

