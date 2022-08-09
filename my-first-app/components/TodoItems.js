import { Text, StyleSheet,View, TouchableOpacity } from "react-native";
import {MaterialIcons} from "@expo/vector-icons";

export default function TodoItems({item, presshandler}){

    return (
        <TouchableOpacity onPress={() => presshandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={16} color='#333'/>
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item:{
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1.5,
        borderStyle: 'dashed',
        borderRadius: 10,
        width:300,
        flexDirection: "row"
    },
    itemText:{
        marginLeft: 5
    }
});