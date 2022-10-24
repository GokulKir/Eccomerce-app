import React,{ useEffect , useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Button,
    TextInput,
    ScrollView,
    SafeAreaView,
    Image

} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

function OTP({navigation,props}) {
    const [code , setCode] = useState(null)
    return(
        <View style={styles.container}>
            <View style={{marginLeft:20,marginTop:20}}>
    <TouchableOpacity onPress={()=> navigation.navigate('Mobile')}>
    <Icon name="west" color="#fff" size={28}/>
    </TouchableOpacity>
    </View>
    <View>
        <View  style={{alignItems:'center'}}>
    <Text style={styles.HeaderTitle}>Verification</Text>
        </View>
        <View style={{alignItems:'center',marginTop:23}}>
        <Text style={styles.SimpleText}>Enter The Otp Code From The Phone we just</Text>
        <Text style={styles.SimpleText1}>Sent You at </Text>
        </View>
        <View style={{alignItems:'center',marginTop:34}}>
            <View style={styles.SigninBorder}>
                <View style={{alignItems:'center',marginTop:45}}>
                    <View style={styles.TextInputStyle}>
             <TextInput value={code} onChangeText={setCode} keyboardType="numeric" style={styles.TextStyle} placeholder="CODE"  placeholderTextColor="yellow"/>

                    </View>
                </View>
                <View>
                    <View style={{alignItems:'center',marginTop:33}}>
                        <Text style={styles.TextSt}>Did You Enter The Correct Number?</Text>
                    </View>
                </View>
                <View>
                    <View style={{alignItems:'center'}}>
                     <Text  style={styles.TextC}>Didn't reseive SMS? </Text>
                     <TouchableOpacity>
                     <Text  style={styles.TextC1}>Resent code</Text>
                     </TouchableOpacity>
                    </View>
                </View>
                <View>
                <View>
                    <View style={{alignItems:'center',marginTop:124}}>
                <TouchableOpacity onPress={()=> props.onSubmit(code)} style={styles.ButtonStyle}>
           <Text style={styles.ButtonText}>Verify</Text>
                </TouchableOpacity>
                    </View>
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
        backgroundColor:'black',

    },
    HeaderTitle :{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'
    },
    SigninBorder :{
        width:"89%",
        height:479,
       borderWidth:2,
        borderRadius:34,
        borderColor:'#fff'
   
   
   
       },
       MobileText :{
      color:'grey',
      marginTop:12
       },
       TextInputStyle :{
        width:'85%',
        height:35,
        flexDirection:'row',
        borderRadius:5,
        borderWidth:2,
        borderColor:'grey',
        alignItems:'center',
        marginTop:2,
        flexDirection:'row',
       
      
      },
      TextStyle:{
        width:"90%",
        height:38,
        paddingLeft:13,
        fontWeight:'bold',
        color:'grey',
        paddingLeft:106,
    },
    VerifyText :{
    color:'yellow',
    fontWeight:'bold',
    marginTop:5,
  

    },
    ButtonStyle :{
        width:"70%",
        height:43,
        borderWidth:2,
        borderColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5



    },
    ButtonText:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'

    },
    SimpleText:{
        color:'grey',
        fontWeight:'bold',

    },
    SimpleText1:{
        color:'grey',
        fontWeight:'bold',
        marginTop:4,


    },
    TextSt :{
        color:'grey',
        fontWeight:'bold'
    },
    TextC:{
        color:'grey',
        fontWeight:'bold'
    },
    TextC1:{
        color:'yellow',
        marginTop:13,
        fontWeight:'bold'
    }



})


export default OTP;