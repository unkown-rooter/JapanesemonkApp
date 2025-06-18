import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

export default function LoanRepaymentScreen() {
  const [loanAmount, setLoanAmount] = useState('');
  const [schedule, setSchedule] = useState([]);

  const calculateRepayment = () => {
    const amount = parseFloat(loanAmount);
    if (isNaN(amount) || amount <= 0) return;

    const interest = amount * 0.1;
    const total = amount + interest;
    const weeklyRepayment = total / 4;

    const newSchedule = [];
    for (let i = 1; i <= 4; i++) {
      newSchedule.push({
        week: i,
        amount: weeklyRepayment.toFixed(2),
      });
    }

    setSchedule(newSchedule);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <ScrollView contentContainerStyle={styles.innerContainer}>
        <Text style={styles.title}>Loan Repayment Calculator</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter loan amount"
          keyboardType="numeric"
          value={loanAmount}
          onChangeText={setLoanAmount}
        />

        <Button title="Calculate Repayment" onPress={calculateRepayment} />

        {schedule.length > 0 && (
          <View style={styles.scheduleContainer}>
            <Text style={styles.scheduleTitle}>Repayment Schedule</Text>
            {schedule.map((item, index) => (
              <Text key={index} style={styles.scheduleText}>
                Week {item.week}: Ksh {item.amount}
              </Text>
            ))}
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  scheduleContainer: {
    marginTop: 30,
  },
  scheduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scheduleText: {
    fontSize: 16,
    marginVertical: 4,
  },
});
