import React,{ useState , useEffect } from "react";

import {
    View,
    StyleSheet,
    Button,
    TouchableOpacity,
    Text,
    ScrollView,
    SafeAreaView,
    Image,
    ImageBackground,

} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
  } from 'react-native-indicators';
function Plash() {
    return(
        <View style={styles.container}>
          <ImageBackground style={{width:'100%',height:'100%'}} source={require('../assets/ECom.jpg')}>
          <SkypeIndicator style={{marginTop:297}} color='white' />
          </ImageBackground>
            </View>
            


      

    )
    
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'black',
    }
})


export default Plash;