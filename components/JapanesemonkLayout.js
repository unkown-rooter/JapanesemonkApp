// components/JapanesemonkLayout.js
import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';

export default function JapanesemonkLayout({ children }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 🔝 Logo at top */}
      <Image
        source={require('../assets/japanesemonk-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Your screen content here */}
      <View style={styles.content}>
        {children}
      </View>

      {/* 🔚 Footer */}
      <Text style={styles.footer}>Powered by Japanesemonk™</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#000',
  },
  logo: {
    width: 200,
    height: 80,
    marginBottom: 10,
  },
  content: {
    width: '100%',
    paddingHorizontal: 20,
  },
  footer: {
    fontSize: 14,
    color: 'white',
    marginTop: 30,
    marginBottom: 20,
    textAlign: 'center',
    opacity: 0.6,
  },
});
