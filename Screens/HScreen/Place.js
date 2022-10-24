import React,{ useState , useEffect } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    ScrollView,
    SafeAreaView,
    Button,
    Image

} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import RazorpayCheckout from 'react-native-razorpay';
import firebase from "@react-native-firebase/app";
import auth from '@react-native-firebase/auth';
import { useSelector, useDispatch } from 'react-redux'

function Place({navigation,route}) {
    const CartItems = useSelector(state => state)
 
    const {pay,name,number,house,pincode,city,state,road} = route.params;
  



    const Pay = () =>{
        const currentUser = firebase.auth().currentUser;
        
    
        var options = {
            description: 'ECOOM',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_k5pX0CZPQJkp65', // Your api key
            amount:"1000",
            name: name,
            prefill: {
              email: currentUser.email,
              contact:number,
              name: 'Razorpay Software'
            },
            theme: {color: 'black'}
          }
          RazorpayCheckout.open(options).then((data) => {
            // handle success
          
            alert(`Success: ${data.razorpay_payment_id}`);
            navigation.navigate('Success',{pay})
           
          }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
          });
    
    }

    return (
        <View  style={styles.container}>
            <SafeAreaView>
                <ScrollView>
                    <View style={{alignItems:'center'}}>
                    <View style={styles.container2}>
                        <Image style={styles.ImageSt} source={{uri:pay.image}}/>
                        <Text style={styles.TitleS}>{pay.Title}</Text>
                
                    </View>
                  <View style={{flexDirection:'row',marginTop:15}}>
                    <Text style={{color:'#fff',marginRight:189,fontWeight:'bold'}}>Total :</Text>
                    
                    <Text style={{color:'#fff',marginLeft:0,fontWeight:'bold'}}>  RS .{pay.Rate}</Text>
                  </View>
                  <View style={{marginTop:45}}>
                    <Text style={{color:'grey'}}>SELECT ADDRESS</Text>
                  </View>
                  <View style={{marginTop:45}}>
                    <Text style={{color:'#fff',fontSize:12,fontWeight:'bold'}}>name : {name},</Text>
                    <Text style={{color:'#fff',fontSize:12,fontWeight:'bold'}}>Place : {road},</Text>
                    <Text style={{color:'#fff',fontSize:12,fontWeight:'bold'}}>Pincode : {pincode},</Text>
                    <Text style={{color:'#fff',fontSize:12,fontWeight:'bold'}}>Mobile : {number},</Text>
                  </View>
                    <View style={{marginTop:46}}>
                        <TouchableOpacity onPress={Pay} style={styles.Co}>
                    <Text style={styles.Text}>Place order</Text>

                        </TouchableOpacity>

                    </View>
                
                    </View>
                </ScrollView>

            </SafeAreaView>
         

        </View>

    )
    
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'black'
    },
    container2 :{
     width:'100%',
     height:125,
     borderWidth:1,
     borderColor:'grey',
     paddingLeft:23,
     paddingTop:23,
     flexDirection:'row'

    },
    ImageSt :{
        width:84,
        height:84,
        borderRadius:13

    },
    TitleS :{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold',
        marginLeft:40
    },
    Co :{
        alignItems:'center',
        justifyContent:'center',
        width:155,
        height:45,
        borderWidth:1,
        borderColor:'blue',
        borderRadius:34


    },
    Text :{
        color:'#fff',
        fontWeight:'bold'
    }
})

export default Place;