import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import LogoBackground from '../components/LogoBackground';

export default function AboutScreen() {
  return (
    <LogoBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>About Japanesemonk</Text>
        <Text style={styles.text}>
          Welcome to Japanesemonk Business Suite. We are a trusted local business providing
          quality mitumba clothes, plastic crocs, charcoal, firewood, and financial services
          like table banking loans.
        </Text>
        <Text style={styles.text}>
          Our mission is to empower the community with quality, affordable products and
          digital financial tools. We are growing with our Ming Dynasty Tech Empire to reach
          every village and town.
        </Text>
        <Text style={styles.text}>
          Thank you for supporting Japanesemonk!
        </Text>
      </ScrollView>
    </LogoBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#ddd',
    lineHeight: 22,
  },
});
