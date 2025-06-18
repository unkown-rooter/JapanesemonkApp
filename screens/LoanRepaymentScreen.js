import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import LogoBackground from '../components/LogoBackground';

export default function LoanRepaymentScreen() {
  const [memberName, setMemberName] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
  const [paymentDate, setPaymentDate] = useState('');

  const handleSubmit = () => {
    alert(`Thank you ${memberName}, your repayment of Ksh ${amountPaid} was received.`);
  };

  return (
    <LogoBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Loan Repayment</Text>

        <TextInput
          style={styles.input}
          placeholder="Member Name"
          placeholderTextColor="#999"
          value={memberName}
          onChangeText={setMemberName}
        />

        <TextInput
          style={styles.input}
          placeholder="Amount Paid"
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={amountPaid}
          onChangeText={setAmountPaid}
        />

        <TextInput
          style={styles.input}
          placeholder="Payment Date"
          placeholderTextColor="#999"
          value={paymentDate}
          onChangeText={setPaymentDate}
        />

        <Button title="Submit Payment" onPress={handleSubmit} />
      </ScrollView>
    </LogoBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 12,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    color: '#fff',
    borderRadius: 8,
    backgroundColor: '#222',
  },
});
