import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const today = new Date().toDateString(); // Shows current date

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to JapaneseMonkApp</Text>
        <Text style={styles.date}>{today}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Products')}>
        <Text style={styles.buttonText}>🛍️ View Products</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Loans')}>
        <Text style={styles.buttonText}>💰 Loan Calculator</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
        <Text style={styles.buttonText}>ℹ️ About</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F8F9FA',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E1E1E',
  },
  date: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
  button: {
    width: '90%',
    padding: 15,
    backgroundColor: '#0066CC',
    marginVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});
