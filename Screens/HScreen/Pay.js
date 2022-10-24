import React,{ useEffect , useState } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    TextInput,
    Text,
   


} from 'react-native';

function Pay ({navigation}) {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView>
                <View style={{marginLeft:80,marginTop:24,flexDirection:'row'}}>
                    <View style={styles.Round}>
                        <Text style={styles.LineText}>1</Text>

                    </View>
                    <View style={{width:60,height:1,backgroundColor:'blue',marginTop:11}}>

                    </View>

                    <View style={styles.Round2}>
                        <Text style={styles.LineText2}>2</Text>

                    </View>

                    <View style={{width:60,height:1,backgroundColor:'grey',marginTop:11}}>

                    </View>

                    <View style={styles.Round3}>
                        <Text style={styles.LineText3}>3</Text>

                    </View>

                </View>
                <View style={{flexDirection:'row',marginLeft:74,marginTop:9}}>
              <Text style={{color:'#fff',fontSize:9,fontWeight:'bold'}}>Address</Text>
              <Text style={{color:'#fff',fontSize:9,fontWeight:'bold',marginLeft:50}}>Payment</Text>
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
        color:"#fff",
        fontSize:14,
        fontWeight:'bold'

    },
    Round2 :{
        color:'blue',
        width:24,
        height:24,
        borderWidth:2,
        borderColor:'blue',
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center'

    },
    Round3 :{
        color:'#fff',
        width:24,
        height:24,
        borderWidth:2,
        borderColor:'grey',
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center'

    },
    LineText3 :{
        color:"grey",
        fontSize:14,
        fontWeight:'bold'

    },
})


export default Pay;