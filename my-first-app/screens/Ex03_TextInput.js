import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function Ex03_TextInput(){
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Enter your Name :</Text>
            <TextInput 
            style={styles.input}
            onChangeText = {(val) => setName(val)}
            ></TextInput>
            <Text style={styles.text}>Enter your age :</Text>
            <TextInput 
            keyboardType="numeric"
            style={styles.input}
            onChangeText = {(val) => setAge(val)}
            ></TextInput>
            <Text style={styles.text}> Tell about yourself </Text>
            <TextInput 
            style={[styles.multilineInput, styles.input]}
            multiline
            ></TextInput>
            <Text style={styles.text}>{"\n"}Your name is {name} and you are {age} years old.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize : 20,
        margin : 10
    },
    multilineInput: {
        height : 100,
        textAlignVertical : 'top',
        paddingTop : 10
    },
    input:{
        borderColor : 'teal',
        borderWidth : 3,
        width : 200,
        paddingHorizontal : 10,
        borderRadius : 5
    }
})