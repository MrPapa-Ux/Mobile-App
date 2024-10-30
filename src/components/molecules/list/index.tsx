import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const List = ({date, description, amount, type}) => {
  return (
    <View style={styles.transactionItem}>
      <View style={styles.textContainer}>
        <Text style={styles.transactionDate}>{date}</Text>
        <Text style={styles.transactionDescription}>{description}</Text>
      </View>
      <Text
        style={[
          styles.transactionAmount,
          type === 'credit' ? styles.credit : styles.debit,
        ]}>
        {amount}
      </Text>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  transactionItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  transactionDate: {
    color: '#888',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
  transactionDescription: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Medium',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Medium',
  },
  debit: {
    color: '#FF0000',
  },
  credit: {
    color: '#00D084',
  },
});
