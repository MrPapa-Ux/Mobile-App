import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from '../../components/atoms';
import {TextInput, Header, List} from '../../components/molecules';
import {Gap} from '../../components/atoms';

const CashOnBank = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        text="Cash On Bank"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.descriptionSection}>
        <View style={styles.form}>
          <TextInput placeholder="Add the description" label="Description" />
          <Gap height={17} />
          <TextInput placeholder="Debit / Credit" label="Type" />
          <Gap height={22} />
          <Button text="Save" style={styles.saveButton} />
        </View>
      </View>
      <View style={styles.transactionSection}>
        <Text style={styles.text}>Last 3 Transactions</Text>
        <List
          date="17 April 2020"
          description="Water, Food"
          amount="-Rp. 300.000"
        />
        <List
          date="17 April 2020"
          description="Office Supplies"
          amount="-Rp. 300.000"
        />
        <List
          date="17 April 2020"
          description="Top Up"
          amount="+Rp. 300.000"
          type="credit"
        />
      </View>
    </View>
  );
};

export default CashOnBank;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFC',
  },
  descriptionSection: {
    padding: 20,
  },
  transactionSection: {
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  form: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    marginHorizontal: -20,
  },
  text: {
    fontFamily: 'Poppins-Bold',
    color: 'black',
    fontSize: 16,
    paddingBottom: 5,
  },
});
