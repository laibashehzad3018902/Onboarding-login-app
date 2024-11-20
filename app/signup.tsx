import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useRouter } from "expo-router";
import Mybutton from "@/app-example/components/Mybutton";


const Signup = () => {
  const router=useRouter();
  const onRegister=()=>{
    router.navigate("/login")
  }
  return (
    <View style={{flex:1}} >
      <Image
      source={require("@/assets/images/registerr.png")}
      style={{
        width:"350",height:"300"
        }}
        resizeMode="center"
        /> 

    <View style={{padding:20, gap:20}}>
        <TextInput
        placeholder="Enter Your Name" style={{borderWidth:1, height:50, padding:10, borderRadius:10
        }}/>
        <TextInput
        placeholder="Enter Your Email" style={{borderWidth:1, height:50, padding:10, borderRadius:10
        }}/>
        <TextInput 
        placeholder="Enter Your Password" style={{borderWidth:1, height:50, padding:10, borderRadius:10 }}/>
         <TextInput 
        placeholder="Re Enter Your Password" style={{borderWidth:1, height:50, padding:10, borderRadius:10 }}/>

        <Mybutton title={"Signup"} OnPress={(onRegister)} />
        </View>
  </View>
  )
}

export default Signup; 