import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';
import {Logo} from '../../assets/icon';

const SplashScreen = () => {
  const logoScale = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animasi untuk scaling logo
    Animated.sequence([
      Animated.timing(logoScale, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      // Animasi setelah logo, opacity pada teks
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, [logoScale, textOpacity]);

  return (
    <View style={styles.container}>
      <Animated.View style={{transform: [{scale: logoScale}]}}>
        <Logo />
      </Animated.View>
      <Animated.Text style={[styles.title, {opacity: textOpacity}]}>
        Money Tracker
      </Animated.Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#02CF8E',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
    marginTop: 20, // Memberikan jarak antara logo dan teks
  },
});
