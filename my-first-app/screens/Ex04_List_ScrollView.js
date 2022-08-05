import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";

export default function Ex04_List_ScrollView(){
    const [studentList,setStudentList] = useState([
        {name : 'Adam', key : 101},
        {name : 'Barbara', key : 102},
        {name : 'Charlie', key :103},
        {name : 'David', key : 104},
        {name : 'Ela', key : 105},
        {name : 'Farida', key : 106},
        {name : 'Gorgie', key :107},
        {name : 'Harry', key : 108},
        {name : 'Ishu', key : 109},
        {name : 'Jack', key : 110}
    ]);

    return (
        <View style={styles.container}>
            <ScrollView>
            {studentList.map (
                student => 
                (
                    <Text 
                    key={student.key}
                    style={styles.details}>
                       {student.name}
                    </Text>
                )
            )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent : 'flex-start',
        alignItems : 'center'
    },
    details:{
        backgroundColor : 'lightyellow',
        width : 200,
        marginVertical : 10,
        padding : 15,
        textAlign : "center",
        fontFamily : 'serif',
        fontSize : 25
    }
})