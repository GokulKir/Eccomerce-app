import React,{  useState } from "react";
import auth from '@react-native-firebase/auth';

import  Mobile from './Mobile';
import OTP from './OTP';

export default function MobileLogin(props) {
 const [confirm , setConfirm] = useState(null)  

 const mobileLogin = async (phoneNumber) =>{
    console.log(phoneNumber)
 auth().signInWithPhoneNumber("+91" +phoneNumber) .then((res)=>{
   console.log(res)
   setConfirm(res)
 }).catch((err)=>{
    conole.log(err)
 })
       

 }

 const confirmVerification = (code) =>{
    try {
         await confirm.confirm(code)
    } catch (e) {
        console.log('Error :'+e)
        
    }
 }

 if(confirm)  return <OTP onSubmit={confirmVerification}/>

  return <Mobile onSubmit={mobileLogin}/>
    
}


