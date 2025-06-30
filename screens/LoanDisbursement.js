// LoanDisbursementScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoanDisbursementScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loan Disbursement</Text>
      <Text>View and manage loan disbursement details.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  title: {
    fontSize: 22, fontWeight: 'bold'
  },
});

export default LoanDisbursementScreen;
