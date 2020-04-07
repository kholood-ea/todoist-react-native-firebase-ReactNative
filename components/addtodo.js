import React,{ useState } from "react";
import { StyleSheet,TextInput,Text,View,Button } from "react-native";

export function AddTodo({submitHandler}){
    const [text,setText]=useState('')
    const[clear,setClear]=useState(false)

    const changeHandler=(val)=>{
        setText(val)
    }

    return(
        <View>
            <TextInput  style = {styles.input}
            
            value={!clear?text:null}
             clearButtonMode='always'
             placeholder='new todo...' 
             onChangeText={changeHandler}></TextInput>
             <Button onPress={()=>{submitHandler(text),setClear(!clear),setText('')}}
              title='Add New Task'
               color='coral'/>
        </View>
    )
}
    const styles=StyleSheet.create({
    
        input:{
            marginTop:10,
            paddingHorizontal:8,
            paddingVertical:6,
            borderBottomWidth:1,
            borderBottomColor:'#ddd'

            
        }
        })