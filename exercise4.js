import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const exercise4 = () => {
  return (
    <View>
      <View>
        <Text style={styles.welcome}>Welcome</Text>
      </View>
      <View>
        <Text style={styles.username}>Username</Text>
        <Text style={styles.inputBox}>Masukan username Anda</Text>
      </View>
      <View>
        <Text style={styles.password}>Password</Text>
        <Text style={styles.inputBox}>Masukan password Anda</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default exercise4;

const styles = StyleSheet.create({
  inputBox: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    padding: 15,
  },
  username: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    marginLeft: 25,
    marginTop: 30,
  },
  password: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    marginLeft: 25,
    marginTop: 30,
  },
  welcome: {
    fontWeight: '900',
    color: 'black',
    textAlign: 'left',
    fontSize: 35,
    marginLeft: 25,
    marginTop: 30,
    marginBottom: 25,
  },
  button: {
    marginTop: 50,
    backgroundColor: '#CD5C08',
    margin: 10,
    marginHorizontal: 15,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    fontWeight: '900',
    fontSize: 17,
  },
});
