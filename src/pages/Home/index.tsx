import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {NullPhoto} from '../../assets/icon';
import {Button, Gap} from '../../components/atoms';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerTitle}>
        <View style={styles.header}>
          <Text style={styles.title}>Money Tracker</Text>
          <Image source={NullPhoto} style={styles.profile} />
        </View>
        <Text style={styles.subtitle}>Track your money</Text>
      </View>
      <Gap height={20} />
      <View style={styles.balanceSection}>
        <Text style={styles.balanceLabel}>Your Balance</Text>
        <Text style={styles.balanceAmount}>Rp. 10.000.000</Text>
        <View style={styles.line} />
        <View style={styles.subTotal}>
          <Text style={styles.labelOn}>Cash on Hand</Text>
          <Text style={styles.amountOn}>Rp. 4.000.000</Text>
        </View>
        <View style={styles.subTotal}>
          <Text style={styles.labelOn}>Cash on Bank</Text>
          <Text style={styles.amountOn}>Rp. 6.000.000</Text>
        </View>
      </View>
      <View style={styles.transactionSection}>
        <Text style={styles.transactionTitle}>Add Transaction</Text>
        <Button
          text="Cash On Hand"
          onPress={() => navigation.navigate('CashOnHand')}
        />
        <Gap height={26} />
        <Button
          text="Cash On Bank"
          onPress={() => navigation.navigate('CashOnBank')}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFC',
  },
  headerTitle: {
    backgroundColor: '#ffffff',
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  profile: {
    width: 50,
    height: 50,
    top: 30,
  },
  title: {
    fontSize: 22,
    color: '#020202',
    marginLeft: -30,
    marginTop: 30,
    fontFamily: 'Poppins-Medium',
  },
  subtitle: {
    color: '#8D92A3',
    fontSize: 14,
    marginLeft: 28,
    fontFamily: 'Poppins-Regular',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  balanceSection: {
    backgroundColor: '#ffffff',
    padding: 30,
  },
  subTotal: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  balanceLabel: {
    fontSize: 16,
    color: '#020202',
    fontFamily: 'Poppins-Medium',
  },
  balanceAmount: {
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
    marginVertical: 3,
    marginHorizontal: 50,
    color: '#000000',
  },
  line: {
    width: 350,
    height: 1,
    backgroundColor: '#000000',
    marginVertical: 8,
  },
  labelOn: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Poppins-Medium',
  },
  amountOn: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Poppins-Medium',
    paddingLeft: 20,
  },
  transactionSection: {
    marginVertical: 20,
    padding: 30,
    backgroundColor: '#ffffff',
  },
  transactionTitle: {
    fontSize: 18,
    color: '#020202',
    fontFamily: 'Poppins-Medium',
  },
});
