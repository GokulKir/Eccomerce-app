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
    ImageBackground,



} from 'react-native';
import firestore from '@react-native-firebase/firestore';
function Home({navigation}) {
    const [products , setProducts] = useState([])
    const [products2 , setProducts2] = useState([])
    useEffect(()=>{
        Product()
        Product2()

    },[])

    const Product = () =>{
     firestore().collection('Products').get().then((snapshot)=>{
        const allPost = snapshot.docs.map((product)=>{
            return {
                ...product.data(),
                id:product.id
            }
        })
        console.log(allPost);
        setProducts(allPost)
     })
    }

    const Product2 = () =>{
        firestore().collection("Products2").get().then((snapshot)=>{
            const allPost2 = snapshot.docs.map((prod)=>{
                return {
                    ...prod.data(),
                    id:prod.id
                }
            })
            console.log(allPost2)
            setProducts2(allPost2)
        })
    }
    return(
        <SafeAreaView style={styles.container}>
   <ScrollView>
    <View style={{marginLeft:23,marginTop:15}}>
        <Text style={styles.COLLECTIONS}>COLLECTIONS</Text>
    </View>
    <ScrollView horizontal={true}>
    
    <View style={{alignItems:'center',marginTop:20,marginRight:263,flexDirection:'row'}}>
  
        <TouchableOpacity onPress={() => navigation.navigate('Mob')} style={styles.RoundStyle}>
       <Image style={styles.Image}  source={require('../../assets/mobile1.jpg')}/>

      <Text style={styles.RoundStyleText}>Mobiles</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate('Lab')} style={styles.RoundStyle}>
       <Image style={styles.Image}  source={require('../../assets/laptops1.jpg')}/>

      <Text style={styles.RoundStyleText}>Laptops</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.RoundStyle}>
       <Image style={styles.Image}  source={require('../../assets/headset.jpg')}/>

      <Text style={styles.RoundStyleText}>Headset</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.RoundStyle}>
       <Image style={styles.Image}  source={require('../../assets/TV.jpg')}/>

      <Text style={styles.RoundStyleText}>TV</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.RoundStyle}>
       <Image style={styles.Image}  source={require('../../assets/fashion.jpg')}/>

      <Text style={styles.RoundStyleText}>Fashions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.RoundStyle}>
       <Image style={styles.Image}  source={require('../../assets/watch.jpg')}/>

      <Text style={styles.RoundStyleText}>Watch</Text>
        </TouchableOpacity>
        
        
        


       

    </View>
    
 
  
    </ScrollView>
    <ScrollView horizontal={true}>
        <View style={{alignItems:'center',flexDirection:'row'}}>
            <TouchableOpacity style={styles.ButtonSt}>
    <Image style={styles.Banner} source={require('../../assets/banner1.jpg')}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ButtonSt}>
    <Image style={styles.Banner} source={require('../../assets/laptop.jpg')}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ButtonSt}>
    <Image style={styles.Banner} source={require('../../assets/watch1.jpg')}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ButtonSt}>
    <Image style={styles.Banner} source={require('../../assets/head.jpg')}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ButtonSt}>
    <Image style={styles.Banner} source={require('../../assets/fas.png')}/>
            </TouchableOpacity>

        </View>
    </ScrollView>
    <View>
        <View>
            <Text style={styles.heading2}>Top Demand</Text>
        </View>
    </View>
    <ScrollView horizontal={true}>
        <View style={{marginTop:15,marginLeft:15,flexDirection:'row'}}>
            <TouchableOpacity style={styles.RoundButton}>
             <Image style={styles.Imagstyle} source={require('../../assets/i.jpg')}/>
             <Text style={styles.TitleText}>iPhone 13</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.RoundButton}>
             <Image style={styles.Imagstyle} source={require('../../assets/fash.jpg')}/>
             <Text style={styles.TitleText}>Fashions</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.RoundButton}>
             <Image style={styles.Imagstyle} source={require('../../assets/smart.jpg')}/>
             <Text style={styles.TitleText}>Smart Watch</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.RoundButton}>
             <Image style={styles.Imagstyle} source={require('../../assets/i.jpg')}/>
             <Text style={styles.TitleText}>iPhone 13</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.RoundButton}>
             <Image style={styles.Imagstyle} source={require('../../assets/HP.jpg')}/>
             <Text style={styles.TitleText}>HP Laptops</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.RoundButton}>
             <Image style={styles.Imagstyle} source={require('../../assets/hear.jpg')}/>
             <Text style={styles.TitleText}>Headphone</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
    <View >
        <Text style={styles.heading2}>Sponsored</Text>
    </View>
    <ScrollView horizontal={true}>
        <View style={{alignItems:'center',marginTop:35,flexDirection:'row'}}>
            <TouchableOpacity style={styles.SponserCard}>
  <Image  style={styles.SponserImg} source={require('../../assets/apple.jpg')}/>
            </TouchableOpacity>
          

            <TouchableOpacity style={styles.SponserCard}>
  <Image  style={styles.SponserImg} source={require('../../assets/Sh.png')}/>
            </TouchableOpacity>
          


            <TouchableOpacity style={styles.SponserCard}>
  <Image  style={styles.SponserImg} source={require('../../assets/TV1.jpg')}/>
            </TouchableOpacity>
          
        </View>
    </ScrollView>
    <View>
        <View style={{marginTop:35}}>
            <Text style={styles.Productitle}>Product for you</Text>

        </View>
    </View>
    <ScrollView horizontal={true}>
        <View style={{marginTop:45,flexDirection:'row'}}>
         {products.map(product =>{
  return (
      
  <TouchableOpacity onPress={()=> navigation.navigate('PRO',{pro:product})} key={product.id} style={styles.CardStyle}>
 <Image style={styles.productCard}  source={{uri:product.image}}/>
 <Text style={styles.productTitle}>{product.Title}</Text>
  </TouchableOpacity>
  )  
   })
}

  {/* <TouchableOpacity style={styles.CardStyle}>
 <Image style={styles.productCard}  source={require('../../assets/wa.jpg')}/>
 <Text style={styles.productTitle} >Octane TITAN</Text>
  </TouchableOpacity> */}
        </View>
    </ScrollView>
    
        <ScrollView horizontal={true}>
            <View style={{marginTop:35, flexDirection:'row'}}>
                {products2.map(prod => {
                    return(
                        <TouchableOpacity onPress={()=> navigation.navigate('PRO',{pro:prod})} key={prod.id} style={styles.CardStyle}>
                        <Image style={styles.productCard}  source={{uri:prod.image}}/>
                        <Text style={styles.productTitle} >{prod.Title}</Text>
                         </TouchableOpacity>

                    )
                })}

 

            </View>
        </ScrollView>
    
    <View>
        <View style={{marginTop:56}}>
          
        </View>
    </View>

    
   </ScrollView>

        </SafeAreaView>

    )
    
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'black'

    },
    COLLECTIONS:{
        color:'grey',
        fontWeight:'bold',
       
    },
    RoundStyle : {
    width:75,
    height:75,
   
    borderRadius:100,
    marginBottom:23,
    marginLeft:23,
    alignItems:'center',


   
    },
    RoundStyleText : {
        color:'#fff',
        marginTop:8,
        fontWeight:'bold',
        marginLeft:4

    },
    Image : {
        width:'60%',
        height:'60%',
        borderRadius:105
    },
    Image1 : {
        width:'90%%',
        height:'90%%',
        borderRadius:105,
        marginLeft:12,
    },
    Image2 : {
        width:'100%',
        height:'100%',
        borderRadius:105
    },
    Image3 : {
        width:'100%',
        height:'100%',
        borderRadius:105
    },
    Image4 : {
        width:'100%',
        height:'100%',
        borderRadius:105
    },
    ButtonSt : {
    width:360,
    height:156,
    borderColor:'grey',
    borderWidth:1,
    borderRadius:5

    },
    Banner :{
        width:'100%',
        height:'100%',

    },
    heading2 : {
        color:'grey',
        marginLeft:24,
        marginTop:24,
        fontSize:20,
        fontWeight:'bold'
    },
    RoundButton :{
        width:126,
        height:126,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    },
    Imagstyle:{
        width:'66%',
        height:'66%',
        borderRadius:100,
    },
    TitleText :{
        color:'#fff',
        fontWeight:'bold',
        marginTop:13

    },
    SponserCard : {
        width:360,
        height:230,
        borderWidth:1,
        borderColor:'grey'
    },
    SponserImg :{
        width:'100%',
        height:'100%',


    },
    Productitle :{
            color:'grey',
            marginLeft:24,
            marginTop:12,
            fontSize:20,
            fontWeight:'bold'
        
    },
    CardStyle : {
        width:196,
        height:266,
        borderWidth:1,
        borderColor:'grey',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10

    },
    productCard : {
        width:'100%',
        height:"80%",

    },
    productTitle :{
        color:'#fff',
        fontSize:15,
        marginTop:12,
        fontWeight:'bold',

    }
})


export default Home;