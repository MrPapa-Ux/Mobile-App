import React from 'react';
import {View, Image, StyleSheet, SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.square} />
        <View style={styles.yellowSquare} />
        <View style={styles.square} />
      </View>

      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/logo-with-motto-3.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.bottomBar}>
        <View style={styles.square} />
        <View style={styles.yellowSquare} />
        <View style={styles.square} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
  },
  topBar: {
    flexDirection: 'row',
    backgroundColor: 'red',
    paddingVertical: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomBar: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 85,
    height: 85,
    backgroundColor: 'black',
    marginHorizontal: 10,
  },
  yellowSquare: {
    width: 85,
    height: 85,
    backgroundColor: 'yellow',
    marginHorizontal: 10,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '80%',
    height: '50%',
  },
});

export default App;
