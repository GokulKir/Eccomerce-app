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
function Mobile({navigation,props}) {
    const [number ,setNumber] = useState(null)
    return(
        <View style={styles.container}>
          <View style={{marginLeft:22,marginTop:12}}>
        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
        <Icon name="west" color="#fff" size={28}/>
        </TouchableOpacity>
    </View>
      <View>
        <View style={{alignItems:'center',marginTop:20}}>
            <Text style={styles.HeaderTitle}>Mobile Login</Text>
            <Text style={styles.MobileText}>Enter your registered mobile number</Text>
        </View>
        <View>
            <View style={{alignItems:'center',marginTop:55}}>
                <View  style={styles.SigninBorder}>
                     <View style={{alignItems:'center',marginTop:45}}>
                        <View  style={styles.TextInputStyle}>
                        <Image style={{width:22,height:22,marginTop:3,marginLeft:6}} source={require('../assets/call.png')}/>
                        <TextInput value={number} onChangeText={setNumber} maxLength={10} keyboardType="numeric" style={styles.TextStyle}  placeholder="Enter mobile"/>

                        </View>
                        <View style={{alignItems:'center',marginTop:34}}>
                           
                         <Text style={styles.VerifyText}>Sent to verification code</Text>
                        </View>

                     </View>
                     <View style={{alignItems:'center',marginTop:185}} >
                        <TouchableOpacity  style={styles.ButtonStyle}  onPress={()=> props.onSubmit(number)} >
                        <Text style={styles.ButtonText}>Continue</Text>
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
    container:{
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
        backgroundColor:'#fff',
        flexDirection:'row',
        borderRadius:5,
        borderWidth:2,
        borderColor:'grey',
        alignItems:'center',
        marginTop:2,
        flexDirection:'row'
      
      },
      TextStyle:{
        width:"90%",
        height:38,
        paddingLeft:13,
        fontWeight:'bold'
    },
    VerifyText :{
    color:'yellow',
    fontWeight:'bold',
    marginTop:5

    },
    ButtonStyle :{
        width:"70%",
        height:43,
        borderWidth:2,
        borderColor:'#fff',
        alignItems:'center',
        justifyContent:'center',



    },
    ButtonText:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'

    }

})

export default Mobile;