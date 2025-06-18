import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import BackgroundWrapper from './BackgroundWrapper';

export default function LoanApplicationScreen() {
  const [amount, setAmount] = useState('');

  return (
    <BackgroundWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Apply for a Loan</Text>
        <TextInput
          placeholder="Enter loan amount"
          value={amount}
          onChangeText={setAmount}
          style={styles.input}
        />
        <Button title="Submit" onPress={() => console.log('Loan requested')} />
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
