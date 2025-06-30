import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';

const LoanCalculatorScreen = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [totalRepayment, setTotalRepayment] = useState(null);
  const [weeklyPayment, setWeeklyPayment] = useState(null);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    if (isNaN(principal) || principal <= 0) {
      alert('Please enter a valid loan amount');
      return;
    }

    const interestRate = 0.20; // 20%
    const repaymentWeeks = 2;

    const total = principal + (principal * interestRate);
    const weekly = total / repaymentWeeks;

    setTotalRepayment(total.toFixed(2));
    setWeeklyPayment(weekly.toFixed(2));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.inner}>
        <Text style={styles.title}>Loan Calculator</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter loan amount"
          keyboardType="numeric"
          value={loanAmount}
          onChangeText={setLoanAmount}
        />

        <TouchableOpacity style={styles.button} onPress={calculateLoan}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>

        {totalRepayment && (
          <View style={styles.result}>
            <Text style={styles.resultText}>Total Repayment (2 weeks): Ksh {totalRepayment}</Text>
            <Text style={styles.resultText}>Weekly Payment: Ksh {weeklyPayment}</Text>
          </View>
        )}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  result: {
    marginTop: 10,
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
  },
  resultText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
});

export default LoanCalculatorScreen;
