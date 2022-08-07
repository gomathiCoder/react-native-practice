import { Text, View, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import TodoHeader from "../components/TodoHeader";

export default function Ex06_TodoApp(){
    const [todo, setTodo] = useState([
        {key : 1, text : 'Create App'},
        {key : 2, text : 'Go shopping'},
        {key : 3, text : 'Play CandyCrush'}
    ]);

    return (
        <View style={styles.container} >
            <TodoHeader />
            <View style={styles.content}>
                    {/* form */}
                    <View style={styles.list}>
                        <FlatList 
                            data={todo}
                            renderItem={({ item }) =>
                                (
                                <Text>{item.text}</Text>
                                )
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