import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';

export default function LoanApplicationScreen() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async () => {
    if (!name || !amount) {
      Alert.alert('⚠️ Missing Info', 'Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/loans/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, amount }),
      });

      const data = await response.json();
      if (response.ok) {
        Alert.alert('✅ Success', `Thank you ${name}, we received your loan application.`);
        setName('');
        setAmount('');
      } else {
        Alert.alert('❌ Failed', data.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('❌ Error', 'Network error. Make sure the backend is running.');
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Loan Application</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Loan Amount"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />
        <Button title="Submit Application" onPress={handleSubmit} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
  },
});
