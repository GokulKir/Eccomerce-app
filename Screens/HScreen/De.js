import React,{ useEffect , useState } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Button,
    SafeAreaView,
    Text,
    TextInput,
    Alert
 

} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import firestore from '@react-native-firebase/firestore';
import firebase from "@react-native-firebase/app";
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import RazorpayCheckout from 'react-native-razorpay';
function De({navigation,route}) {
 const {pay} = route.params;


    const [name , setName] = useState('')
    const [number , setNumber] = useState('')
    const [house , setHouse] = useState('')
    const [road , setRoad] = useState('')
    const [pincode , setPinCode] = useState('')
    const [city , setCity] = useState('')
    const [state , setState] = useState('')


    const currentUser = firebase.auth().currentUser;



const PayMent = () =>{
    var options = {
        description: 'ECOOM',
        image: 'https://i.imgur.com/3g7nmJC.png',
        currency: 'INR',
        key: 'rzp_test_k5pX0CZPQJkp65', // Your api key
        amount:"1200000",
        name: name,
        prefill: {
          email: 'void@razorpay.com',
          contact: number,
          name: 'Razorpay Software'
        },
        theme: {color: 'black'}
      }
      RazorpayCheckout.open(options).then((data) => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      }).catch((error) => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
}
  const UserD = item =>{
    
   
    database().ref(currentUser.uid).push({
        
     name:name,
     Phone : number,
     Home : house,
     Homeroot : road,
     Pincode : pincode,
     City : city,
     State : state,
   


      
    })
    navigation.navigate('Place',{pay,name,number,house,pincode,city,state,road})
  }
    return(
        <View style={styles.container}>
             <SafeAreaView>
                <ScrollView>
                <View style={{marginLeft:80,marginTop:24,flexDirection:'row'}}>
                    <View style={styles.Round}>
                        <Text style={styles.LineText}>1</Text>

                    </View>
                    <View style={{width:60,height:1,backgroundColor:'grey',marginTop:11}}>

                    </View>

                    <View style={styles.Round2}>
                        <Text style={styles.LineText2}>2</Text>

                    </View>

                    <View style={{width:60,height:1,backgroundColor:'grey',marginTop:11}}>

                    </View>

                    <View style={styles.Round2}>
                        <Text style={styles.LineText2}>3</Text>

                    </View>

                </View>
                <View style={{flexDirection:'row',marginLeft:74,marginTop:9}}>
              <Text style={{color:'#fff',fontSize:9,fontWeight:'bold'}}>Address</Text>
                </View>

                {/* <View style={{alignItems:'center',flexDirection:'row',marginLeft:100,marginTop:15}}>
                    <Text style={styles.Text}>+</Text>
                    <Text style={styles.Text1}>ADD NEW ADDRESS</Text>

                </View> */}
                <View style={{alignItems:'center',marginTop:24,flexDirection:'row',marginLeft:14}}>
                    <Icon style={{marginLeft:4}} name="call" color="#fff" size={24}/>
                    <Text style={{color:'#fff',fontWeight:'bold',fontSize:18,marginLeft:7}}>Contact Detailes</Text>
                    
                </View>
                <View style={{marginLeft:13,marginTop:42}}>
                    <Text style={styles.TextN}>Name</Text>

                </View>
              <View style={{alignItems:'center'}}>
                <TextInput onChangeText={setName} style={styles.Input} />
                </View>

                <View style={{marginLeft:13,marginTop:42}}>
                    <Text style={styles.TextN}>Phone Number</Text>

                </View>
              <View style={{alignItems:'center'}}>
                <TextInput onChangeText={setNumber} maxLength={10} keyboardType="numeric" style={styles.Input} />
                </View>
                <View>
                <View style={{alignItems:'center',marginTop:24,flexDirection:'row',marginLeft:14}}>
                    <Icon style={{marginLeft:4}} name="map" color="#fff" size={24}/>
                    <Text style={{color:'#fff',fontWeight:'bold',fontSize:18,marginLeft:7}}>Address</Text>
                    
                </View>
                </View>

                <View style={{marginLeft:13,marginTop:42}}>
                    <Text style={styles.TextN}>House no./Bulding Name</Text>

                </View>
              <View style={{alignItems:'center'}}>
                <TextInput onChangeText={setHouse} style={styles.Input} />
                </View>

                <View style={{marginLeft:13,marginTop:42}}>
                    <Text style={styles.TextN}>Road Name/Area</Text>

                </View>
              <View style={{alignItems:'center'}}>
                <TextInput onChangeText={setRoad} style={styles.Input} />
                </View>



                <View style={{marginLeft:13,marginTop:42}}>
                    <Text  style={styles.TextN}>Pin Code</Text>

                </View>
              <View style={{alignItems:'center'}}>
                <TextInput onChangeText={setPinCode} keyboardType="numeric" style={styles.Input} />
                </View>


                <View style={{flexDirection:'row'}}>
            
                    <View>
                        <View  style={{marginLeft:13,marginTop:42}}>
                    <Text style={styles.TextN}>City</Text>
                           </View>
                        <TextInput onChangeText={setCity} style={styles.Input1}/>
                    </View>

                    <View>
                        <View  style={{marginLeft:83,marginTop:42}}>
                    <Text style={styles.TextN}>State</Text>
                           </View>
                        <TextInput onChangeText={setState} style={styles.Input2}/>
                    </View>
                </View>


                <View style={{alignItems:'center',marginTop:45}}>
                    <TouchableOpacity onPress={UserD} style={styles.CBUTTON}>
                        <Text style={styles.ButtonT}>Continue</Text>
                    </TouchableOpacity>
                </View>


                <View style={{marginTop:45}}>

                </View>

                



                

               
                

                
                </ScrollView>
               
             </SafeAreaView>

          
        </View>
  
    )
    
}
const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'black'
    },
    Head :{
        marginLeft:16,
        marginTop:14,
        flexDirection:'row',
        borderBottomWidth:2,
        borderBottomColor:'grey',
         height:46,
         width:'100%'
        
    },
    HeadT :{
        color:'#fff',
        marginTop:4,
        marginLeft:45,
        fontWeight:'bold'

    },
    Round :{
        color:'#fff',
        width:24,
        height:24,
        borderWidth:2,
        borderColor:'blue',
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center'

    },
    LineText :{
        color:"#fff",
        fontSize:14,
        fontWeight:'bold'

    },
    LineText2 :{
        color:"grey",
        fontSize:14,
        fontWeight:'bold'

    },
    Round2 :{
        color:'#fff',
        width:24,
        height:24,
        borderWidth:2,
        borderColor:'grey',
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center'

    },
    Text :{
        color:'grey',
        fontSize:20,
        fontWeight:'bold',
        
    },
    Text1:{
        color:'grey',
        fontSize:15,
        fontWeight:'bold'
    },
    TextN :{
        color:'#fff',
        fontSize:15,
        fontWeight:'bold'

    },
    Input : {
        width:"94%",
        height:45,
        borderBottomWidth:1,
        borderBottomColor:'blue',
        color:'#fff',
        fontSize:15,
        fontWeight:'italic'
    },
    Input1 : {
        width:134,
        height:45,
        borderBottomWidth:1,
        borderBottomColor:'blue',
        color:'#fff',
        fontSize:15,
        fontWeight:'italic'
    },
    Input2 : {
        width:134,
        height:45,
        borderBottomWidth:1,
        borderBottomColor:'blue',
        color:'#fff',
        fontSize:15,
        fontWeight:'italic',
        marginLeft:75

    },
    CBUTTON :{
        width:'80%',
        height:34,
        borderWidth:3,
        borderColor:'red',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:34
    },
    ButtonT :{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold',
        
    }


})

export default De;