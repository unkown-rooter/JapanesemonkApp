import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import BackgroundWrapper from '../components/BackgroundWrapper';

export default function LoanCalculatorScreen() {
  const [loanAmount, setLoanAmount] = useState('');
  const [totalRepayment, setTotalRepayment] = useState(null);
  const [weeklyPayment, setWeeklyPayment] = useState(null);

  const calculateLoan = () => {
    const amount = parseFloat(loanAmount);
    if (isNaN(amount)) return;

    const interest = amount * 0.2;
    const total = amount + interest;
    const weekly = total / 2;

    setTotalRepayment(total.toFixed(2));
    setWeeklyPayment(weekly.toFixed(2));
  };

  return (
    <BackgroundWrapper>
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Loan Calculator</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter loan amount"
            keyboardType="numeric"
            value={loanAmount}
            onChangeText={setLoanAmount}
            placeholderTextColor="#aaa"
          />

          <TouchableOpacity style={styles.button} onPress={calculateLoan}>
            <Text style={styles.buttonText}>Calculate</Text>
          </TouchableOpacity>

          {totalRepayment && (
            <View style={styles.resultBox}>
              <Text style={styles.resultText}>
                Total Repayment (20% Interest): Ksh {totalRepayment}
              </Text>
              <Text style={styles.resultText}>
                Weekly Payment (2 weeks): Ksh {weeklyPayment}
              </Text>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </BackgroundWrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  resultBox: {
    marginTop: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 15,
    borderRadius: 10,
  },
  resultText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
});
