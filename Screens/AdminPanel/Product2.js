import React,{ useEffect , useState } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    ScrollView,
    Image,
   
   

} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';
import firebase from "@react-native-firebase/app";
import database from '@react-native-firebase/database';
function Product2() {
    const currentUser= firebase.auth().currentUser;
    const [img , setImg] = useState()
    const [text , setText] = useState('')
    const [rate, setRate] = useState('')
    const [img1 , setImg1] = useState()
    const [img2 , setImg2] = useState()
    const [img3 , setImg3] = useState()

    const Product = () =>{
        firestore().collection('Products2').add({
        image:img,
        Title:text,
        Rate:rate,
        image1 : img1,
        image2 : img2,
        image3 : img3,
      })
    }


    const Upload3 = () =>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
            setImg3(image.path);
                let imageName = image.path.substring(image.path.lastIndexOf('/')+1);
                console.log(imageName)

            });
        }


    const Upload2 = () =>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
            setImg2(image.path);
                let imageName = image.path.substring(image.path.lastIndexOf('/')+1);
                console.log(imageName)

            });
        }


    const Upload1 = () =>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
            setImg1(image.path);
                let imageName = image.path.substring(image.path.lastIndexOf('/')+1);
                console.log(imageName)

            });
        }

  const Upload = () =>{
    ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        console.log(image);
        setImg(image.path);
            let imageName = image.path.substring(image.path.lastIndexOf('/')+1);
            console.log(imageName)
            // const reference = storage().ref('products/'+currentUser.uid+'png');
            // console.log(reference)

            // try {
            //     const task = reference.putFile(image.path);

            //     task.on('state_changed', taskSnapshot => {
            //         console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
                  
            //       });
                  
            //       task.then(() => {
            //         console.log('Image uploaded to the bucket!');
            //       });
                
            // } catch (e) {
            //     console.log(e)
                
            // }
      });
  }
    return (
        <View style={styles.container}>
       <View >
        <ScrollView horizontal={true} >
            <View style={{marginTop:25,alignItems:'center',marginTop:45,flexDirection:'row'}}>
                <TouchableOpacity onPress={Upload} style={styles.BorderProdu}>
        
                  <Image style={styles.uriS} source={{uri:img}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={Upload1} style={styles.BorderProdu}>
        
        <Image style={styles.uriS} source={{uri:img1}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={Upload2} style={styles.BorderProdu}>
        
        <Image style={styles.uriS} source={{uri:img2}}/>
      </TouchableOpacity>



      <TouchableOpacity onPress={Upload3} style={styles.BorderProdu}>
        
        <Image style={styles.uriS} source={{uri:img3}}/>
      </TouchableOpacity>
            </View>

           

        </ScrollView>
        <View>
           <View style={{alignItems:'center'}}>
            <TextInput value={text} onChangeText={setText} style={styles.Input} />
            </View> 
        </View>


        <View>
            <View style={{alignItems:'center',marginTop:45}}>
                <TextInput style={styles.Rate} onChangeText={setRate}/>
            </View>
        </View>

      


       </View>
       <View>
            <View style={{alignItems:'center',marginTop:45}}>
                <TouchableOpacity onPress={Product} style={styles.Button}>
                    <Text style={styles.fontcolor}>ADDING</Text>
                </TouchableOpacity>
            </View>
        </View>

        </View>
    )
    
}
const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'black'
    },
    BorderProdu : {
        width:323,
        height:330,
        borderWidth:1,
        borderColor:'grey',
        borderRadius:5,
    
    },
    uriS :{
        width:'100%',
        height:'100%'
    },
    Input :{
        width:'70%',
        height:40,
        borderWidth:1,
        borderColor:'#fff',
        marginTop:45,
        fontSize:14,
        fontWeight:'bold',
        color:'#fff',
        paddingLeft:95

    },
    Button :{
        width:"50%",
        height:54,
        borderWidth:2,
        borderColor:'yellow',
        borderRadius:45,
        alignItems:'center',
        justifyContent:'center'

    },
    fontcolor:{
        color:'#fff',
        fontSize:15,
        fontWeight:'bold'
    },
    Rate : {
        width:"40%",
        height:55,
        borderWidth:2,
        borderColor:'orange',
        fontSize:30,
        color:'#fff',
        paddingLeft:25
    }
})

export default Product2;