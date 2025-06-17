import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const LoanRepaymentScreen = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(null);

  const calculateLoan = () => {
    const loanAmount = parseFloat(amount);
    if (!loanAmount || loanAmount <= 0 || name.trim() === '') {
      alert('Please enter valid name and amount');
      return;
    }
    const interestRate = 0.20;
    const interest = loanAmount * interestRate;
    const totalRepayment = loanAmount + interest;
    const weekly = totalRepayment / 2;

    setResult({
      loanAmount,
      interest,
      totalRepayment,
      weekly,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Loan Repayment Calculator</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Member Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Loan Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <Button title="Calculate" onPress={calculateLoan} />

      {result && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>Borrower: {name}</Text>
          <Text style={styles.resultText}>Loan Amount: Ksh {result.loanAmount.toFixed(2)}</Text>
          <Text style={styles.resultText}>Interest (20%): Ksh {result.interest.toFixed(2)}</Text>
          <Text style={styles.resultText}>Total Repayment: Ksh {result.totalRepayment.toFixed(2)}</Text>
          <Text style={styles.resultText}>2 Weekly Installments:</Text>
          <Text style={styles.resultText}>Week 1: Ksh {result.weekly.toFixed(2)}</Text>
          <Text style={styles.resultText}>Week 2: Ksh {result.weekly.toFixed(2)}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  resultBox: {
    marginTop: 20,
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default LoanRepaymentScreen;
