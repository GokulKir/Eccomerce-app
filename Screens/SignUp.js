import React,{ useEffect , useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    Button,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    TextInput,
    Image,

} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import auth from '@react-native-firebase/auth';

function SignUp({navigation}) {
    const [email , setEmail] = useState("")
const [password , setPassword] = useState("")
const SignUp = () =>{
 if(email != "" && password != ""){
    auth().createUserWithEmailAndPassword(email , password).then(()=>{
        console.log("User created successfully");
        navigation.navigate('MyTabs')
    })
 }else{
    console.log('User allready created')
 }
}
    return(
 <View style={styles.container}>
    <View style={{marginLeft:22,marginTop:12}}>
        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
        <Icon name="west" color="#fff" size={28}/>
        </TouchableOpacity>
    </View>
    <View>
        <View style={{alignItems:'center'}}>
            <Text style={styles.SignUpText}>Sign Up</Text>
        </View>
        <View style={{alignItems:'center'}}>
            <Text style={styles.Heading}>Create Account</Text>
        </View>
    </View>
    <View style={{alignItems:'center',marginTop:34}}>
        <View style={styles.borderSign}>
            <View style={{alignItems:'center',justifyContent:'center',marginTop:55}}>
                <View style={styles.TextInputStyle}>
                <Image style={{width:22,height:22,marginTop:3,marginLeft:6}} source={require('../assets/user.png')}/>
                <TextInput style={styles.TextStyle} placeholder="Enter name"/>

                </View> 


                <View style={styles.TextInputStyle1}>
                <Image style={{width:22,height:22,marginTop:3,marginLeft:6}} source={require('../assets/email.png')}/>
                <TextInput style={styles.TextStyle} onChangeText={setEmail} value={email} placeholder="Enter email"/>

                </View> 


                <View style={styles.TextInputStyle2}>
                <Image style={{width:22,height:22,marginTop:3,marginLeft:6}} source={require('../assets/padlock.png')}/>
                <TextInput style={styles.TextStyle} secureTextEntry={true} onChangeText={setPassword} value={password} placeholder="Enter password"/>

                </View> 

            </View>
            <View>
                            <View style={{alignItems:'center',marginTop:65}}>
                                <TouchableOpacity onPress={SignUp} style={styles.ButtonStyle}>

                                    <Text style={styles.ButtonText}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
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

    )
    
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'black',

    },
    SignUpText:{
        color:'#fff',
        marginTop:15,
        fontSize:23,
        fontWeight:'bold',


    },
    Heading :{
        color:'grey',
        marginTop:15,
        fontWeight:'bold'

    },
    borderSign :{
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
    TextInputStyle1 :{
        width:'85%',
        height:35,
        backgroundColor:'#fff',
        flexDirection:'row',
        borderRadius:5,
        borderWidth:2,
        borderColor:'grey',
        alignItems:'center',
        marginTop:42
    },
    TextInputStyle2 : {
        width:'85%',
        height:35,
        backgroundColor:'#fff',
        flexDirection:'row',
        borderRadius:5,
        borderWidth:2,
        borderColor:'grey',
        alignItems:'center',
        marginTop:42
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
        ButtonFac:{
            width:45,
            height:45,
            backgroundColor:'#fff',
            marginLeft:104,
            borderRadius:45,
            marginTop:35
    
        },
        ButtonGoogle :{
            width:45,
            height:45,
            backgroundColor:'black',
            marginLeft:14,
            borderRadius:45,
            marginTop:35
    
    
        }
})

export default SignUp;