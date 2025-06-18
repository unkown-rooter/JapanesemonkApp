import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoBackground from '../components/LogoBackground';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <LogoBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Welcome to Japanesemonk App</Text>
        <Button title="View Products" onPress={() => navigation.navigate('Products')} />
        <Button title="Apply for Loan" onPress={() => navigation.navigate('LoanApplication')} />
        <Button title="Loan Repayment" onPress={() => navigation.navigate('LoanRepayment')} />
        <Button title="About Us" onPress={() => navigation.navigate('About')} />
      </ScrollView>
    </LogoBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
});
