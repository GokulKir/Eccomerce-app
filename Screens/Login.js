import React,{ useEffect , useState } from "react";

import {
    View,
    StyleSheet,
    Text,
    Button,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Image,
    TextInput,
    Alert

} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import auth from '@react-native-firebase/auth';
function Login({navigation}) {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const SignIn = () =>{
        if(email != "" && password != ""){
            auth().signInWithEmailAndPassword(email , password).then(()=>{
                console.log('Login successfully')
                navigation.navigate('MyTabs')
            })
        }else{
      Alert.alert('Login failed');
        }
    }
    return(
        <View style={styles.container}>
           <View>
            <View style={{alignItems:'center',marginTop:54}}>
             <Text style={{color:'#fff',fontSize:23,fontWeight:'bold'}}>Sign In</Text>
                    <Text style={{color:'grey',fontWeight:'bold',marginTop:12}}>Login to your account</Text>

                </View>
                <View style={{marginTop:34,alignItems:'center'}}>
                    <View style={styles.SigninBorder}>
                        <View style={{alignItems:'center',marginTop:55}}>
                            <View style={styles.TextInputStyle}>
                               <Image style={{width:22,height:22,marginTop:3,marginLeft:6}} source={require('../assets/email.png')}/>
                           <TextInput style={styles.TextStyle} onChangeText={setEmail} value={email} placeholder="Enter email"/>
         
                            </View>

                            <View style={styles.TextInputStyle1}>
                               <Image style={{width:22,height:22,marginTop:3,marginLeft:6}} source={require('../assets/padlock.png')}/>
                           <TextInput secureTextEntry={true} style={styles.TextStyle} onChangeText={setPassword} value={password} placeholder="Enter password"/>
         
                            </View>
                            <View>
                               <TouchableOpacity onPress={()=> navigation.navigate('Mobile')}>
                                <Text style={{color:'yellow',fontWeight:'bold',marginLeft:126,marginTop:15,fontSize:11}}>Forgot password ?</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                        <View>
                            <View style={{alignItems:'center',marginTop:75}}>
                                <TouchableOpacity onPress={SignIn} style={styles.ButtonStyle}>

                                    <Text style={styles.ButtonText}>Sign In</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{alignItems:'center'}}>
                            <Text style={styles.SignupText}>Don't have an account?</Text>
                            <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                            <Text style={styles.SignupText1}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                            <TouchableOpacity style={styles.ButtonFac}>
                              <Image style={{width:'100%',height:'100%'}} source={require('../assets/facebook1.png')}/>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ButtonGoogle}>
                              <Image style={{width:'100%',height:'100%'}} source={require('../assets/google2.png')}/>

                            </TouchableOpacity>
                        </View>
                    </View>

                    </View>
                    
                </View>
            </View>

        </View>
    )
    
}
const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'black'

    },
    SigninBorder :{
     width:"89%",
     height:479,
    borderWidth:2,
     borderRadius:34,
     borderColor:'#fff'



    },
    TextInputStyle :{
      width:'85%',
      height:35,
      backgroundColor:'#fff',
      flexDirection:'row',
      borderRadius:5,
      borderWidth:2,
      borderColor:'grey',
      alignItems:'center',
      marginTop:2
    
    },
    TextStyle:{
        width:"90%",
        height:38,
        paddingLeft:13,
        fontWeight:'bold'
    },
    TextInputStyle1:{
        width:'85%',
        height:35,
        backgroundColor:'#fff',
        flexDirection:'row',
        borderRadius:5,
        borderWidth:2,
        borderColor:'grey',
        alignItems:'center',
        marginTop:45

    },
    ButtonStyle:{
    width:'60%',
    height:44,
    borderWidth:2,
    borderColor:'#fff',
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',

    },
    ButtonText:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'
    },
    SignupText:{
        color:'grey',
        marginTop:12,
        fontWeight:'bold'
    },
    SignupText1:{
        color:'#fff',
        marginTop:12,
        fontWeight:'bold'
    },
    ButtonFac:{
        width:45,
        height:45,
        backgroundColor:'#fff',
        marginLeft:104,
        borderRadius:45,
        marginTop:25

    },
    ButtonGoogle :{
        width:45,
        height:45,
        backgroundColor:'black',
        marginLeft:14,
        borderRadius:45,
        marginTop:25


    }
})

export default Login;