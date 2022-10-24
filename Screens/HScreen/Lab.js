import React,{ useState , useEffect } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Text,
    Image,
    ImageBackground

} from 'react-native';
import firestore from '@react-native-firebase/firestore';
function Lab({navigation}) {
    const [products , setProducts] = useState([])
 useEffect(()=>{
Product()
 },[])

 const Product = () =>{
 firestore().collection('Laptop').get().then((snapshot)=>{
    const allPost = snapshot.docs.map((prod)=>{
        return {
            ...prod.data(),
            id:prod.id
        }
    })
    console.log(allPost)
    setProducts(allPost)
 })
 }

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <View style={{alignItems:'center',marginTop:5,flexDirection:'row'}}>
                    <TouchableOpacity style={styles.Scroll}>
                 <Image style={styles.ImageB} source={require('../../assets/L.jpg')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Scroll}>
                 <Image  style={styles.ImageB} source={require('../../assets/L2.jpg')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Scroll}>
                 <Image style={styles.ImageB} source={require('../../assets/L4.jpg')}/>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <ScrollView horizontal={true}>
                <View style={{marginTop:0,flexDirection:'row'}}>
                    {products.map(prod =>{
                        return  (
                         <TouchableOpacity onPress={()=> navigation.navigate('PRO',{pro:prod})} key={prod.id} style={styles.Button}>
                         <Image style={styles.cardIM}  source={{uri:prod.image}}/>
                         <Text style={styles.cardT}>{prod.Title}</Text>
                     </TouchableOpacity>
                        )

                    })}
                   

                </View>
            </ScrollView>


        </View>

    )
    
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'black'
    },
    Button :{
        width:203,
        height:327,
        borderWidth:1,
        borderColor:'grey',
        marginLeft:5,
        alignItems:'center'
    },
    Scroll :{
        width:354,
        height:230,
        borderColor:'#fff',
        borderWidth:1,
        borderRadius:23
    },
    ImageB :{
        width:'100%',
        height:'100%',
        borderRadius:23
    },
    cardIM :{
        width:'100%',
        height:'100%'
    },
    cardT :{
        color:'grey',
        fontSize:15,
        fontWeight:'bold'
    }
})

export default Lab;