import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Glenvidi Gerungan</Text>
        <Text style={styles.subtitle}>Game Development</Text>
      </View>

      <Image style={styles.image} source={require('./assets/anjay.jpg')} />

      <Text style={styles.sectionTitle}>Kontak Terkait</Text>
      <Text style={styles.text}>anjaygurinjay@gmail.com</Text>

      <Text style={styles.sectionTitle}>Profile</Text>
      <Text style={styles.text}>Mahasiswa Unklab</Text>
      <Text style={styles.text}>Laki-Laki</Text>
      <Text style={styles.text}>Berumur 19 tahun</Text>

      <Text style={styles.sectionTitle}>Status</Text>
      <Text style={styles.text}>Belum punya</Text>

      <Text style={styles.sectionTitle}>Skills</Text>
      <Text style={styles.text}>Beberapa diantaranya :</Text>
      <View style={styles.skillContainer}>
        <View style={styles.blueBox} />
        <Text style={styles.text}>JavaScript</Text>
      </View>
      <View style={styles.skillContainer}>
        <View style={styles.redBox} />
        <Text style={styles.text}>React Native</Text>
      </View>
      <View style={styles.skillContainer}>
        <View style={styles.greenBox} />
        <Text style={styles.text}>Python</Text>
      </View>

      <Text style={styles.sectionTitle}>
        Apa tanggapanmu terhadap profil saya
      </Text>
      <TextInput style={styles.input} placeholder="Tuliskan Disini" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10,
    padding: 10,
    borderRadius: 15,
    fontSize: 18,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 20,
  },
  skillContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  blueBox: {
    backgroundColor: 'blue',
    width: 20,
    height: 20,
    marginRight: 10,
  },
  redBox: {
    backgroundColor: 'red',
    width: 20,
    height: 20,
    marginRight: 10,
  },
  greenBox: {
    backgroundColor: 'green',
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default App;
