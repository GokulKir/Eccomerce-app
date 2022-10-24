import React,{ useEffect ,useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    Button,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Image,


} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import {ADD_TO_CART} from '../../redux/CartItem';
function PRO({route,navigation}) {
    const {pro} = route.params;
    const dispatch = useDispatch()
    const addItemToCart = pro => dispatch({type:ADD_TO_CART,payload:pro}) 

    return (
        <View style={styles.container}>
            <View >
                <ScrollView>
                    <ScrollView horizontal={true}>
                    
                    <View>
                    <View style={styles.BasicStyle}>
                        <Image style={styles.ImageBase} source={{uri:pro.image}}/>

                

                    
                    
                        <Image style={styles.ImageBase1} source={{uri:pro.image1}}/>
                        </View>
                 
                    </View>
                   
                    

                    </ScrollView>

                    <View>
                        <View style={{alignItems:'center',marginTop:45}}>
                            <Text style={styles.ItemTitle}>{pro.Title}</Text>
                        </View>
                        <View style={{alignItems:'center',marginTop:34}}>
                            <Text style={styles.RSST}>RS : {pro.Rate}</Text>

                        </View>
                    </View>

                    


                </ScrollView>
                
                


            </View>
            <View style={{marginTop:90,flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity onPress={()=> addItemToCart(pro)} style={styles.cartB}>
                    <Text style={styles.CartT}>ADD TO CART</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('De',{pay:pro})} style={styles.cartB1}>
                    <Text style={styles.CartT1}>BY NOW</Text>
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
    BasicStyle :{
        alignItems:'center',
        flexDirection:'row'
       

    },
    ImageBase : {
        width:360,
        height:353,
        borderRadius:0
       

    },
    BasicStyle1 : {
        alignItems:'center'
    },
    ImageBase1 : {
        width:360,
        height:353,
        borderRadius:0
        

    },
    ItemTitle :{
        color:'#fff',
        fontSize:23,
        fontWeight:'bold'
    },
    RSST :{
        color:'orange',
        fontSize:19,
        fontWeight:'bold'
    },
    cartB :{
        width:'50%',
        height:45,
        borderColor:'#fff',
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10

    },
    CartT : {
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'
    },
    cartB1 :{
        width:'50%',
        height:45,
        borderColor:'red',
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    },
    CartT1 : {
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'
    },

})


export default PRO;