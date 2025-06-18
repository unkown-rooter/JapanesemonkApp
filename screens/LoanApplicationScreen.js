import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import LogoBackground from '../components/LogoBackground';

export default function LoanApplicationScreen() {
  const [form, setForm] = useState({
    name: '',
    idNumber: '',
    loanAmount: '',
    phoneNumber: '',
    loanPurpose: '',
    date: '',
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    // Add submit logic later
    alert(`Thank you ${form.name}, we received your loan application.`);
  };

  return (
    <LogoBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Loan Application</Text>

        <TextInput
          style={styles.input}
          placeholder="Member Name"
          placeholderTextColor="#999"
          value={form.name}
          onChangeText={(text) => handleChange('name', text)}
        />

        <TextInput
          style={styles.input}
          placeholder="ID Number"
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={form.idNumber}
          onChangeText={(text) => handleChange('idNumber', text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Loan Amount"
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={form.loanAmount}
          onChangeText={(text) => handleChange('loanAmount', text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          value={form.phoneNumber}
          onChangeText={(text) => handleChange('phoneNumber', text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Loan Purpose"
          placeholderTextColor="#999"
          value={form.loanPurpose}
          onChangeText={(text) => handleChange('loanPurpose', text)}
        />

        <Text style={styles.info}>Repayment Period: 2 Weeks</Text>
        <Text style={styles.info}>Interest: 20%</Text>

        <TextInput
          style={styles.input}
          placeholder="Date of Application"
          placeholderTextColor="#999"
          value={form.date}
          onChangeText={(text) => handleChange('date', text)}
        />

        <Button title="Submit Loan" onPress={handleSubmit} />
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
  info: {
    color: '#ccc',
    fontStyle: 'italic',
    marginBottom: 5,
  },
});
