import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function LoanCalculatorScreen() {
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(null);

  const calculateLoan = () => {
    const loanAmount = parseFloat(amount);
    if (isNaN(loanAmount) || loanAmount <= 0) {
      setResult(null);
      return;
    }

    const interest = loanAmount * 0.20; // 20% interest
    const totalRepayment = loanAmount + interest;
    const weeklyPayment = totalRepayment / 2;

    setResult({ totalRepayment, weeklyPayment });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Loan Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter loan amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Button title="Calculate" onPress={calculateLoan} />

      {result && (
        <View style={styles.resultBox}>
          <Text>Total Repayment (with 20% interest): Ksh {result.totalRepayment.toFixed(2)}</Text>
          <Text>Weekly Payment (2 weeks): Ksh {result.weeklyPayment.toFixed(2)}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    flexGrow: 1,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
  },
  resultBox: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
});
