import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import BackgroundWrapper from './BackgroundWrapper';

export default function LoanRepaymentScreen() {
  const [repayment, setRepayment] = useState('');

  return (
    <BackgroundWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Loan Repayment</Text>
        <TextInput
          placeholder="Enter repayment amount"
          value={repayment}
          onChangeText={setRepayment}
          style={styles.input}
        />
        <Button title="Pay Now" onPress={() => console.log('Repayment submitted')} />
      </ScrollView>
    </BackgroundWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});
