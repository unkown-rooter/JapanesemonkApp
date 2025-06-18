
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView
} from 'react-native';

export default function LoanApplicationScreen() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [purpose, setPurpose] = useState('');

  const handleSubmit = async () => {
    if (!name || !phone || !amount || !purpose) {
      Alert.alert('Missing Fields', 'Please fill in all fields.');
      return;
    }

    const numericAmount = parseFloat(amount);
    const interest = numericAmount * 0.2; // 20%
    const totalRepayment = numericAmount + interest;
    const repaymentPeriod = '2 weeks';

    const loanData = {
      name,
      phone,
      amount: numericAmount,
      purpose,
      totalRepayment,
      repaymentPeriod,
    };

    try {
      const response = await fetch('http://192.168.74.11:5000/api/loans', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loanData),
      });

      if (response.ok) {
        Alert.alert('✅ Success', `Loan submitted!\nTotal Repayment: Ksh ${totalRepayment.toFixed(2)} in ${repaymentPeriod}`);
        setName('');
        setPhone('');
        setAmount('');
        setPurpose('');
      } else {
        Alert.alert('❌ Server Error', 'Something went wrong on the backend.');
      }
    } catch (error) {
      Alert.alert('🔌 Network Error', 'Could not reach backend. Check your IP and hotspot.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Loan Application</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Loan Amount (Ksh)"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Purpose"
        value={purpose}
        onChangeText={setPurpose}
      />

      <Button title="Submit Loan Application" onPress={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
});
