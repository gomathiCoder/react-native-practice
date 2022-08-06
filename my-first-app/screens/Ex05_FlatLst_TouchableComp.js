import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function Ex05_FlatLst_touchableComp(){
    const [groceryList, setGroceryList] = useState([
        {SNo: 1, name :'Milk'},
        {SNo: 2, name :'Sugar'},
        {SNo: 3, name :'Coffee'},
        {SNo: 4, name :'Salt'},
        {SNo: 5, name :'Pepper'},
        {SNo: 6, name :'Flour'},
        {SNo: 7, name :'Onion'},
        {SNo: 8, name :'Tomato'},
        {SNo: 9, name :'Chilli'},
        {SNo: 10, name :'Brinjal'},
    ]);

    const clickHandler = (id) => {
        console.log(id);
        setGroceryList(
            (oldList) => 
            oldList.filter(item => item.SNo != id)
        )
    };

    return ( 
        <View style={styles.container}>
            <FlatList 
                numColumns={2}
                keyExtractor={(item) => item.SNo}
                data={groceryList}
                renderItem= {({item}) =>
                    (<TouchableOpacity
                        onPress={() => clickHandler(item.SNo)}
                    >
                        <Text style={styles.item}>
                           {item.name}
                        </Text>
                    </TouchableOpacity>)
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent : 'center',
        alignItems : 'center',
        marginHorizontal : 15,
        marginVertical : 100,
    },
    item :{
        backgroundColor : 'lightyellow',
        width : 150,
        marginVertical : 10,
        marginHorizontal :10,
        padding : 20,
        textAlign: 'left',
        fontFamily : 'serif',
        fontSize : 25,
        borderTopLeftRadius : 15,
        borderBottomRightRadius : 15,
        borderColor : 'pink',
        borderWidth : 2
    }
})