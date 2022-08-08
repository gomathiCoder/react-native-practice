import { TextInput, View, StyleSheet, Button, Touch } from "react-native";
import React, {useState} from "react";

export default function TodoAddTask( { submitHandler }){
    const [newTask, setNewTask] = useState('');
    
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new Todo...'
                onChangeText={(val) => setNewTask(val)}
                value={newTask}
            />
            <Button 
                title='Add Todo'
                color='coral'
                onPress={() => {
                    submitHandler(newTask)
                    setNewTask("")
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})