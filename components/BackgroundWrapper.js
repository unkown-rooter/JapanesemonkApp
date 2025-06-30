import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

export default function BackgroundWrapper({ children }) {
  return (
    <ImageBackground
      source={require('../assets/Japanesemonk-logo.png')}
      style={styles.background}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
