import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const LoanRepaymentEntryScreen = () => {
  const [memberName, setMemberName] = useState('');
  const [amountRepaid, setAmountRepaid] = useState('');
  const [repaymentDate, setRepaymentDate] = useState('');

  const handleSubmit = () => {
    if (!memberName || !amountRepaid || !repaymentDate) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // 🔗 Later: send this to backend
    console.log('Repayment Submitted:', {
      memberName,
      amountRepaid,
      repaymentDate,
    });

    Alert.alert('Success', 'Repayment recorded successfully!');
    setMemberName('');
    setAmountRepaid('');
    setRepaymentDate('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Loan Repayment</Text>

      <TextInput
        style={styles.input}
        placeholder="Member Name"
        value={memberName}
        onChangeText={setMemberName}
      />

      <TextInput
        style={styles.input}
        placeholder="Amount Repaid (KES)"
        keyboardType="numeric"
        value={amountRepaid}
        onChangeText={setAmountRepaid}
      />

      <TextInput
        style={styles.input}
        placeholder="Repayment Date (e.g. 2025-06-30)"
        value={repaymentDate}
        onChangeText={setRepaymentDate}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Repayment</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>Powered by Japanesemonk™</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, backgroundColor: '#fff',
  },
  title: {
    fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center',
  },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 10,
    padding: 10, marginBottom: 15, fontSize: 16,
  },
  button: {
    backgroundColor: '#333', padding: 15, borderRadius: 10,
  },
  buttonText: {
    color: '#fff', textAlign: 'center', fontSize: 18,
  },
  footer: {
    marginTop: 30, textAlign: 'center', fontSize: 14, color: '#999',
  },
});

export default LoanRepaymentEntryScreen;
