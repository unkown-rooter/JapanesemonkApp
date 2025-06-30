// LoanApplicationScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoanApplicationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loan Application</Text>
      <Text>Form to apply for chama loans goes here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  title: {
    fontSize: 22, fontWeight: 'bold'
  },
});

export default LoanApplicationScreen;
