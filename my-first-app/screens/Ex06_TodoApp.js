import { Text, View, StyleSheet, FlatList, Alert } from "react-native";
import React, { useState } from "react";
import TodoHeader from "../components/TodoHeader";
import TodoItems from "../components/TodoItems";
import TodoAddTask from "../components/TodoAddTask";

export default function Ex06_TodoApp(){
    const [todo, setTodo] = useState([
        {key : 1, text : 'Create App'},
        {key : 2, text : 'Go shopping'},
        {key : 3, text : 'Play CandyCrush'}
    ]);
    const [key, setKey] = useState(todo.length+1);

    const presshandler = (key) => {
        setTodo( (prevTodo)=> {
            return prevTodo.filter(item => item.key != key )
        })
    }

    const submitHandler = (task) =>
    {
        if(task.length > 3){
            setTodo((prevTodo)=> {
                setKey(key => key + 1)
                return [{text: task, key:key},
                ...prevTodo]
            }
            )
        } else {
            Alert.alert('Oops', 'Todo must have atleast 4 characters.',
            [
                {text:"Ok", onPress:() => console.log("Ok pressed")},
                {text:"Cancel", onPress:()=> console.log("Cancel pressed")}
            ])
        }
    }

    return (
        <View style={styles.container} >
            <TodoHeader />
            <View style={styles.content}>
                    <TodoAddTask submitHandler={submitHandler}/>
                    <View style={styles.list}>
                        <FlatList 
                            data={todo}
                            renderItem={({ item }) =>
                                <TodoItems item={item} presshandler={presshandler}/>
                            }
                        />
                    </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        backgroundColor : '#fff',
        width : 450,
    },
    content:{
        padding : 40
    },
    list:{
        marginTop : 20
    }
})