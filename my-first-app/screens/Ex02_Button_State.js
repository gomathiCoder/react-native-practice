import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function Ex02_Button_State() {
    const [studentName, setStudentName] = useState('John');

    function clickHandler(){
        setStudentName('David');
    }

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Student Details</Text>
        <Text style={styles.nameText}>Student Name :  {studentName}</Text>
        <View style={styles.buttonContainer}>
            <Button 
                color={'teal'} 
                title='Update Name' 
                onPress={clickHandler}
                />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width : 400
  },
  heading:{
    fontWeight :'bold',
    fontSize : 30,
    marginBottom : 20
  },
  nameText: {
    fontSize : 20,
    marginBottom : 15
  },
  buttonContainer : {
    width : 200,
  }
});