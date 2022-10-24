import React,{ useEffect , useState } from "react";
import {
    View,
    StyleSheet,
    Button,
    TouchableOpacity,
    ScrollView,
    Text,

} from 'react-native';

function Admin({navigation}) {
    return(
        <View style={styles.container}>
      <View>
        <View style={{alignItems:'center',marginTop:13}}>
            <Text style={styles.Admintitle}>ADMIN ROOMS</Text>
        </View>
        <View style={{alignItems:'center',marginTop:34}}>
            <TouchableOpacity onPress={()=> navigation.navigate('Product')} style={styles.productB}>
                <Text style={styles.AdmT}>PRODUCT SECTION</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('Product2')} style={styles.productB}>
                <Text style={styles.AdmT}>PRODUCT SECTION 2</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Mobiles')} style={styles.productB}>
                <Text style={styles.AdmT}>MOBILES</Text>

            </TouchableOpacity>

            
            <TouchableOpacity style={styles.productB}>
                <Text style={styles.AdmT}>WATCH</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.productB}>
                <Text style={styles.AdmT}>FASHION</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.productB}>
                <Text style={styles.AdmT}>HEADSET</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.productB}>
                <Text style={styles.AdmT}>SHOUS</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('Laptop')} style={styles.productB}>
                <Text style={styles.AdmT}>Laptop</Text>

            </TouchableOpacity>
        </View>
      </View>
      <View style={{alignItems:'center',marginTop:85}}>
        <TouchableOpacity onPress={() => navigation.navigate('MyTabs')} style={styles.home}>
            <Text style={styles.homeText}>Home</Text>
        </TouchableOpacity>

      </View>
      

        </View>

    )
    
}

const styles = StyleSheet.create({
    container :{ 
        flex:1,
        backgroundColor:'black'

    },
    Admintitle :{ 
        color:'#fff',
        fontSize:23,
        fontWeight:'bold'
    },
    productB : {
   width:'90%',
   height:44,
   borderWidth:1,
   borderColor:'yellow',
   borderRadius:34,
   alignItems:'center',
   justifyContent:'center',
   marginTop:14

    },
    AdmT :{
        color:'#fff',
        fontSize:15,
        fontWeight:'bold'
    },
    home :{
        width:'60%',
        height:34,
        borderColor:'yellow',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    },
    homeText : {
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'
    }
})

export default Admin;