import { Text, View, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import TodoHeader from "../components/TodoHeader";
import TodoItems from "../components/TodoItems";

export default function Ex06_TodoApp(){
    const [todo, setTodo] = useState([
        {key : 1, text : 'Create App'},
        {key : 2, text : 'Go shopping'},
        {key : 3, text : 'Play CandyCrush'}
    ]);

    const presshandler = (key) => {
        setTodo( (prevTodo)=> {
            return prevTodo.filter(item => item.key != key )
        })
    }

    return (
        <View style={styles.container} >
            <TodoHeader />
            <View style={styles.content}>
                    {/* form */}
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