import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import LogoBackground from '../components/LogoBackground';

export default function ProductsScreen() {
  return (
    <LogoBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Available Products</Text>
        {/* Sample list */}
        <Text style={styles.item}>👕 Mitumba Clothes</Text>
        <Text style={styles.item}>🩴 Plastic Crocs</Text>
        <Text style={styles.item}>🔥 Charcoal</Text>
        <Text style={styles.item}>🌲 Firewood</Text>
      </ScrollView>
    </LogoBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  item: {
    fontSize: 18,
    color: '#ccc',
    marginVertical: 5,
  },
});
