import {StyleSheet, View} from 'react-native';
import React from 'react';
import Input from './components/Input';
import Button from './components/atoms/Button';
import Title from './components/Title';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Title />
      <Input label="Username" placeholder="Masukan username anda" />
      <Input label="Password" placeholder="Masukan password anda" />
      <Input label="Address" placeholder="Masukan alamat anda" />
      <Button label="Sign In With Gmail" color="orange" />
      <Button label="Sign In With Google" color="red" />
      <Button label="Sign In With Facebook" color="blue" />
      <Button label="Sign In With Apple" color="black" />
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
