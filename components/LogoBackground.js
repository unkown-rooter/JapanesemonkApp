import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export default function LogoBackground({ children }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.overlay}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // solid black background
  },
  logoContainer: {
    height: windowHeight * 0.4, // top half or 40% of screen height
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '60%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    padding: 20,
  },
});
