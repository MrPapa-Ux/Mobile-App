import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import React, {useState} from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Title from './components/Title';

const SignIn = () => {
  // let title = 'Welcome';
  const [title, setTitle] = useState('Registration');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const handleClick = () => {
    // title = 'Selamat Datang';
    setTitle('Selamat Datang');
    const data = {
      userName: userName,
      password: password,
      email: email,
      address: address,
      phone: phone,
    };
    console.log(data);
  };
  const handleUserName = e => {
    setUserName(e);
  };
  const handlePassword = e => {
    setPassword(e);
  };
  const handleEmail = e => {
    setEmail(e);
  };
  const handleAddress = e => {
    setAddress(e);
  };
  const handlePhone = e => {
    setPhone(e);
  };
  return (
    <View style={styles.container}>
      <Title title={title} />
      <Input
        label="Nama"
        placeholder="Masukan nama lengkap anda"
        onChangeText={handleUserName}
      />
      <Input
        label="Username"
        placeholder="Masukan username anda"
        onChangeText={handlePassword}
      />
      <Input
        label="Password"
        placeholder="Masukan username anda"
        onChangeText={handlePassword}
        secureTextEntry={true}
      />
      <Input
        label="Email"
        placeholder="Masukan Email anda"
        onChangeText={handleEmail}
      />
      <Input
        label="Address"
        placeholder="Masukan alamat anda"
        onChangeText={handleAddress}
      />
      <Input
        label="Phone Number"
        placeholder="Masukan nomor telepon anda"
        onChangeText={handlePhone}
      />
      {/* <Input label="Address" placeholder="Masukan alamat anda" /> */}
      <Button label="Register" color="#c238ce" onPress={handleClick} />
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
