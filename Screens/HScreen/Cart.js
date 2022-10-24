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
    FlatList,
    Alert

} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import {REMOVE_CART, ADD_TO_CART} from '../../redux/CartItem';


function Separator() {
    return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
  }
function Cart() {
    const [count , setCount] = useState(1);
    const CartItems = useSelector(state => state)
    const dispatch = useDispatch()
    const removeFromCart = item => {
        dispatch({
            type:REMOVE_CART,
            payload:item
        })
    }

    const AddCart = CartItems =>{
        dispatch({
            type:ADD_TO_CART,
            payload:CartItems
        })
    }

 
  
   const IncrementCount = () =>{
    setCount(count + 1)
   }

   const DecrementCount = () =>{
     setCount(count - 1)
   }

    return(
        <View style={styles.container}>
   {/* <View>
     <View style={{alignItems:'center',marginTop:3}}>
        <View style={styles.Button}>
     <Image style={styles.ImageB} source={{uri:CartItems.image}}/>
   <Text style={styles.itemT}>{CartItems.Title}</Text>
        </View>

     
     </View>
    
   </View> */}
   <FlatList  
   data={CartItems}
   keyExtractor={item => item.id.toString()}
   ItemSeparatorComponent={() => Separator()}
   renderItem={({item})=>(
   
    <View>
       <View  key={CartItems.id}   style={styles.ButtonST}>
       <View style={{flexDirection:'row'}}>
    <Image style={styles.ImageB} source={{uri:item.image}}/>
    <Text style={styles.Title}>{item.Title}</Text>
    <View style={{flexDirection:'row'}}>
    <TouchableOpacity onPress={DecrementCount} style={styles.DI}>
        <Text style={styles.DIC}>-</Text>
    </TouchableOpacity>
   
   <View style={{ alignItems:'center' , marginLeft:21 ,  marginTop:21 }}>
    <Text style={{color:'yellow',fontSize:16,fontWeight:'bold'}}>{count}</Text>
</View>

    <TouchableOpacity onPress={IncrementCount} style={styles.DI}>
        <Text style={styles.DIC}>+</Text>
    </TouchableOpacity>
    </View>
    
      </View>
      <TouchableOpacity onPress={()=> removeFromCart(item)}  style={{width:123,height:34,borderWidth:2,borderColor:'red',alignItems:'center',justifyContent:'center'}}>
        <Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>Delete</Text>
      </TouchableOpacity>
    
    
       </View>
    </View>
   )}
   
   />


        </View>

    )
    
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'black'

    },
     Button :{
        width:'100%',
        height:85,
        borderWidth:1,
        borderColor:'#fff',


    },
    ImageB :{
        width:'20%',
        height:83,
        flexDirection:'row',
        marginTop:14,
        marginLeft:24
    },
    itemT :{
        color:'#fff',
        fontSize:15,
        fontWeight:'bold'
    },
    ButtonST :{
        width:'100%',
        height:128,
        borderWidth:1,
        borderColor:'#fff',
        
    },
    Title :{
        color:'grey',
        fontSize:17,
        fontWeight:'bold',
        marginTop:20,
        marginLeft:12

    },
    DI :{
     color:'#fff',
     width:24,
     height:24,
     borderWidth:1,
     borderColor:'#fff',
     marginLeft:24,
     marginTop:23,
     alignItems:'center',
     justifyContent:'center'
    },
    DIC :{
        color:'red',
        fontSize:14,
        fontWeight:'bold'
    }
})


export default Cart;