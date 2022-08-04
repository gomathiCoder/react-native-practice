import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Ex01_TextViewStyle() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Hello react native!!</Text>
      </View>
      <View>
        <Text style={styles.para}>My new journey has started in the coding world! This project is just to practice all the basic concepts that I am going to learn in react native. I am really excited to do this. Wish me all the best.</Text>
      </View>
      <StatusBar style="auto" />
      <View style={styles.line}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor : 'lightgrey',
    padding : 30,
  },
  heading:{
    color : 'teal',
    fontSize : 50,
    fontWeight :'bold'
  },
  para:{
    backgroundColor : 'lightgreen',
    fontStyle : 'italic',
    fontWeight : 'bold',
    marginHorizontal : 30,
    marginVertical : 30,
    lineHeight :25,
    padding : 10,
    borderRadius : 10
  },
  line:{
    borderBottonColor : 'black',
    borderBottomWidth : 1,
    alignSelf : 'stretch',
    marginHorizontal : 10
  }
});