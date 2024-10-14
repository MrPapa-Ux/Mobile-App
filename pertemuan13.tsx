import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import React, {useState} from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Title from './components/Title';

const SignIn = () => {
  // let title = 'Welcome';
  const [title, setTitle] = useState('Welcome');
  const handleClick = () => {
    // title = 'Selamat Datang';
    setTitle('Selamat Datang');
  };
  return (
    <View style={styles.container}>
      <Title title={title} />
      <Input label="Username" placeholder="Masukan username anda" />
      <Input label="Password" placeholder="Masukan password anda" />
      <Input label="Address" placeholder="Masukan alamat anda" />
      <Button label="Sign In" onPress={handleClick} />
      <Button label="Register" color="green" />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    margin: 20,
  },
});
