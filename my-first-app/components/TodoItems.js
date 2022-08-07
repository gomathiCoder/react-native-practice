import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function TodoItems({item, presshandler}){

    return (
        <TouchableOpacity onPress={() => presshandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
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
        borderRadius: 10
    }
});