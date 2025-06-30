import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';

const LoanApplicationScreen = () => {
  const [memberName, setMemberName] = useState('');
  const [groupName, setGroupName] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanPurpose, setLoanPurpose] = useState('');
  const [repaymentPeriod, setRepaymentPeriod] = useState('');

  const submitLoanApplication = async () => {
    if (!memberName || !groupName || !loanAmount || !loanPurpose || !repaymentPeriod) {
      Alert.alert('All fields are required');
      return;
    }

    try {
      const response = await fetch('http://<YOUR_LOCAL_IP>:5000/api/loans', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          memberName,
          groupName,
          loanAmount: Number(loanAmount),
          loanPurpose,
          repaymentPeriod,
        }),
      });

      const data = await response.json();

      if (response.status === 201) {
        Alert.alert('Success', data.message);
        setMemberName('');
        setGroupName('');
        setLoanAmount('');
        setLoanPurpose('');
        setRepaymentPeriod('');
      } else {
        Alert.alert('Error', data.error || 'Something went wrong');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to connect to server');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Table Banking Loan Application</Text>

      <TextInput
        style={styles.input}
        placeholder="Member Name"
        value={memberName}
        onChangeText={setMemberName}
      />
      <TextInput
        style={styles.input}
        placeholder="Group Name"
        value={groupName}
        onChangeText={setGroupName}
      />
      <TextInput
        style={styles.input}
        placeholder="Loan Amount"
        keyboardType="numeric"
        value={loanAmount}
        onChangeText={setLoanAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Loan Purpose"
        value={loanPurpose}
        onChangeText={setLoanPurpose}
      />
      <TextInput
        style={styles.input}
        placeholder="Repayment Period (e.g. 2 weeks)"
        value={repaymentPeriod}
        onChangeText={setRepaymentPeriod}
      />

      <TouchableOpacity style={styles.button} onPress={submitLoanApplication}>
        <Text style={styles.buttonText}>Submit Application</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 60,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#222',
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#111',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default LoanApplicationScreen;
