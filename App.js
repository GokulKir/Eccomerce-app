import * as React from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

/*/Screens /*/
import Plash from './Screens/Plash';
/*/LOGIN/*/
import Login from './Screens/Login';
/*/LOGIN/*/
/*/SIGN UP/*/
import SignUp from './Screens/SignUp';
/*/SIGN UP/*/
/*/MOBILE/*/
import Mobile from './Screens/Mobile';
/*/MOBILE/*/
/*/OTP/*/
import OTP from './Screens/OTP';
/*/OTP/*/
/*/HOME/*/
import Home from './Screens/HScreen/Home';
import Ecoin from './Screens/HScreen/Ecoin';
import Cart from './Screens/HScreen/Cart';
import Profile from './Screens/HScreen/Profile';
import PRO from './Screens/HScreen/PRO';
import Mob from './Screens/HScreen/Mob';
import Lab from './Screens/HScreen/Lab';
/*/HOME/*/
/*/Logo/*/
import Logo from './Screens/LogoScreen/Logo';
import  Logo1  from './Screens/LogoScreen/Logo1';
import Logo2 from './Screens/LogoScreen/Logo2';
/*/Logo/*/
/*/BOOKING/*/
import De from './Screens/HScreen/De';
import Pay from './Screens/HScreen/Pay';
import Place from  './Screens/HScreen/Place';
import Success from './Screens/HScreen/Place';
/*/BOOKING/*/
/*/Screens /*/
/*/ADMIN/*/
import Admin from './Screens/AdminPanel/Admin';
/*/PROUCT/*/
import Product from './Screens/AdminPanel/Product';
import Product2 from './Screens/AdminPanel/Product2';
import Mobiles from './Screens/AdminPanel/Mobiles';
import Laptop from './Screens/AdminPanel/Laptop';
/*/PROUCT/*/
/*/ADMIN/*/



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function MyTabs (){
  return (
    <Tab.Navigator    
    
    screenOptions={{
    
      tabBarStyle: {  position: 'absolute',backgroundColor:'black'},
      tabBarBackground: () =>(
    <View  style={{flex:1}}>

    </View>
      )
    }}
    >
      <Tab.Screen name="Home" component={Home} options={{ tabBarIcon : ({focused}) => focused ? <Icon name="home" size={26} color="yellow"/> : <Icon name="home" size={26} color="#fff"/> ,headerTitle : (props) => <Logo {...props}/> , headerStyle :{ backgroundColor: 'black',}}}
      
      />
      <Tab.Screen name="Ecoin" component={Ecoin} options={{tabBarIcon : ({focused}) => focused ? <Icon name="star-rate" size={26} color="yellow"/> : <Icon name="star-rate" size={26} color="#fff"/>}}/>
      <Tab.Screen name="Cart" component={Cart} options={{tabBarIcon : ({focused}) => focused ? <Icon name="shopping-bag" size={26} color="yellow"/> : <Icon name="shopping-bag" size={26} color="#fff"/> }}/>
      <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon : ({focused}) => focused ? <Icon name="person" size={26} color="yellow"/> :  <Icon name="person" size={26} color="#fff"/>}}/>
     
    </Tab.Navigator>
  )


}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen name="Plash" component={Plash} options={{headerShown:false}}/> */}
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
      <Stack.Screen name="Mobile" component={Mobile} options={{headerShown:false}}/>
      <Stack.Screen name="OTP" component={OTP} options={{headerShown:false}}/>
      <Stack.Screen name="MyTabs" component={MyTabs} options={{headerShown:false}} screenOptions={{ tabBarStyle: {  position: 'absolute',backgroundColor:'black'},}}/>
      <Stack.Screen name="Admin" component={Admin} options={{headerShown:false}}/>
      <Stack.Screen name="Product" component={Product} options={{headerShown:false}}/>
      <Stack.Screen name="PRO" component={PRO} options={{headerTitle : (props) => <Logo1 {...props}/> , headerStyle :{ backgroundColor: 'black',}}}/>
      <Stack.Screen name="Product2" component={Product2} options={{headerShown:false}}/>
      <Stack.Screen name="Mobiles" component={Mobiles} options={{headerShown:false}}/>
      <Stack.Screen name="Mob" component={Mob} options={{headerTitle : (props) => <Logo1 {...props}/> , headerStyle :{ backgroundColor: 'black',}}}/>
      <Stack.Screen name="Laptop" component={Laptop} options={{headerShown:false}}/>
      <Stack.Screen name="Lab" component={Lab} options={{headerTitle : (props) => <Logo1 {...props}/> , headerStyle :{ backgroundColor: 'black',}}}/>
      <Stack.Screen name="De" component={De}   options={{headerTitle : (props) => <Logo2 {...props}/> , headerStyle :{ backgroundColor: 'grey',}}}/>
      <Stack.Screen name="Pay" component={Pay} ptions={{headerTitle : (props) => <Logo2 {...props}/> , headerStyle :{ backgroundColor: 'grey',}}}/>
      <Stack.Screen name="Place" component={Place} />
      <Stack.Screen name="Success" component={Success} options={{headerShown:false}}/>
      </Stack.Navigator> 
    </NavigationContainer>
  );
}