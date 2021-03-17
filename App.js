<script src="http://192.168.1.3:8097"></script>
import { StyleSheet,View,FlatList,Alert,TouchableWithoutFeedback,Keyboard } from "react-native";
import React,{useState,useEffect} from 'react';
import {Header} from './components/header'
import TodoItem  from "./components/todoitem";
import { AddTodo } from "./components/addtodo";
import {firebase} from './firebase'


export default function App() {
  const[todos,setTodos]=useState([])


  useEffect(()=>{
    let mounted = true;
    firebase.firestore().collection('tasks')
    .onSnapshot((snapshot)=>{
      const newtodos= snapshot.docs.map((doc)=>({
        id:doc.id,...doc.data()
      }))
    if(mounted){
      setTodos(newtodos)
    }  
    // newtodos.map(todo=>console.log(todo))
    // console.log(newtodos)
    })
    return ()=>mounted=false;
  },[])

  const pressHandler=(key)=>{
    firebase
      .firestore()
      .collection("tasks")
      .doc(key)
      .delete()
    
  }

   const submitHandler=(text)=>{
     if(text.length>3)
     {
      firebase
      .firestore()
      .collection('tasks')
      .add({
        archived:false,
        date: "",
        projectid: "1",
        task:text,       
        userid:"112233"
      })
   
     }

    else
    {
      Alert.alert('OPPS','Todo must be more than 3 letters',[{text:'Got it'},])
    }
  }
  
//  console.log(todos)

  return(
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>

    <View style={styles.container}> 
    <Header/>
        <View style={styles.content}> 
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}> 
  <FlatList data={todos} renderItem={({item})=>(<TodoItem item={item} pressHandler={pressHandler}/>)}/>
        </View>
        </View>
    </View>
    </TouchableWithoutFeedback>
  )
}
const styles=StyleSheet.create({
  container:{flex:1, backgroundColor:'#fff'},
  content:{flex:1,padding:40},
  list:{marginTop:20,flex:1,}
})