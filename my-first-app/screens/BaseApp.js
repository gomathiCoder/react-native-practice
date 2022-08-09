import { StyleSheet, Text, View} from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.TextStyle}>
      Each js file under screens folder consists of one or more react-native concepts.{"\n\n"}The below instruction holds good for Ex01 to Ex06.{"\n\n"}To execute each js file, first comment out this Text tag and then import and invoke the particular js file in App.js file. {"\n\n"}
      E.g. To invoke Ex01_TextViewStyle.js file, use the following code:{"\n"}
      {"<"}Ex01_TextViewStyle{" />"}
      {"\n\n"}
      Note : Don't forget to import the js file first.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : '#bde0fe',
  },
  TextStyle:{
    color :'#a94ae0',
    fontWeight : 'bold',
    fontStyle : 'italic',
    fontSize : 20,
    margin :40,
    padding : 25,
    backgroundColor : 'lightyellow',
    borderRadius : 25
  }
});