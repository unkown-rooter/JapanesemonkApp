import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>JapanesemonkApp 🧘‍♂️</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Products')}>
        <Text style={styles.buttonText}>Products</Text>
      </TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoanRepaymentEntry')}>
  <Text style={styles.buttonText}>Enter Repayment</Text>
</TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoanApplication')}>
        <Text style={styles.buttonText}>Loan Application</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoanCalculator')}>
        <Text style={styles.buttonText}>Loan Calculator</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoanRepaymentSchedule')}>
        <Text style={styles.buttonText}>Loan Repayment Schedule</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
        <Text style={styles.buttonText}>About</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>Powered by Japanesemonk™</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#444',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  footer: {
    marginTop: 40,
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
});

export default HomeScreen;
