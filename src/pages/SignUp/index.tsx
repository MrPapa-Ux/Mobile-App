import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Header, TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Button text="<" color="white" textSize={40} />
        <Header left={26} text="Sign Up" />
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.container3}>
          <View style={styles.circleBorder}>
            <View style={styles.placeholderCircle}>
              <Text style={styles.addPhotoText}>Add{'\n'}Photo</Text>
            </View>
            {/* Ganti dengan URI foto profil jika ada */}
            <Image
              source={{uri: 'https://example.com/path-to-your-image.jpg'}} // Replace with actual image
              style={styles.profileImage}
            />
          </View>
        </View>
        <Gap height={26} />
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button text="Continue" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
  },
  container3: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    marginTop: 24,
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 25,
  },
  circleBorder: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderWidth: 2, // Border width for the dashed lines
    borderRadius: 50, // To ensure the dashed border is circular
    borderColor: '#999', // Border color
    borderStyle: 'dashed', // Dashed border style
  },
  placeholderCircle: {
    width: 90, // Smaller circle within the dashed border
    height: 90,
    borderRadius: 45,
    backgroundColor: '#F0F0F0', // Light gray background
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 90, // Same size as placeholder circle
    height: 90,
    borderRadius: 45,
    position: 'absolute',
  },
  addPhotoText: {
    color: '#999', // Gray color for the text
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 18, // Space between the two lines
  },
});
