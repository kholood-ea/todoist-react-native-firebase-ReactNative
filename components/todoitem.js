import React from 'react';
import {Text,StyleSheet,TouchableOpacity,View}from 'react-native'
import CloseIcon from 'react-native-vector-icons/AntDesign';
export default function TodoItem({item,pressHandler})
{
    return(

        <TouchableOpacity onPress={()=>pressHandler(item.id)}>
        <View style={styles.item}>
       <Text style={styles.icon}>
           <CloseIcon name='close' size={18} color="red" />
           </Text> 
            <Text >{item.task}</Text>

        </View>
    </TouchableOpacity>
        )

}

const styles=StyleSheet.create({
    item:{
        flexDirection:"row",
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:"dashed",
        borderRadius:10,
        
    },
    icon:{
        paddingRight:5,
    }
})



