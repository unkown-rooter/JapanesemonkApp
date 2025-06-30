import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>JapaneseMonk™</Text>
      <Text style={styles.tagline}>"Empowering Local Hustlers, Digitally"</Text>

      <Text style={styles.sectionTitle}>About Us</Text>
      <Text style={styles.paragraph}>
        JapaneseMonk™ is a community-based digital platform designed to help hustlers in Kenya access micro-loans, promote mitumba businesses, and manage group savings with ease.
      </Text>

      <Text style={styles.sectionTitle}>Our Mission</Text>
      <Text style={styles.paragraph}>
        To empower youth and local entrepreneurs with digital financial tools for growth.
      </Text>

      <Text style={styles.sectionTitle}>Our Vision</Text>
      <Text style={styles.paragraph}>
        A connected community where every hustler can thrive through technology.
      </Text>

      <Text style={styles.sectionTitle}>Location</Text>
      <Text style={styles.paragraph}>
        📍 Based in Kabuchai, Bungoma County – Supporting dreams, one tap at a time.
      </Text>

      <Text style={styles.sectionTitle}>Our Dream</Text>
      <Text style={styles.paragraph}>
        🔗 Follow us as we build the Ming Dynasty Tech Empire!
      </Text>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Powered by Japanesemonk™</Text>
        <Image
          source={require('../assets/Japanesemonk-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  tagline: {
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'italic',
    color: 'gray',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 5,
    color: '#333',
  },
  paragraph: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  },
  footer: {
    marginTop: 40,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: 'gray',
  },
  logo: {
    width: 70,
    height: 50,
    marginTop: 5,
  },
});
