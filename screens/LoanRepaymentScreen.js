import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const dummyRepayments = [
  {
    id: '1',
    name: 'Alice Wanjiku',
    loanAmount: 1000,
    repaid: 400,
  },
  {
    id: '2',
    name: 'Brian Otieno',
    loanAmount: 2000,
    repaid: 1200,
  },
  {
    id: '3',
    name: 'Cynthia Mwikali',
    loanAmount: 1500,
    repaid: 700,
  },
];

const LoanRepaymentScreen = () => {
  const renderItem = ({ item }) => {
    const balance = item.loanAmount - item.repaid;

    return (
      <View style={styles.card}>
        <Text style={styles.name}>{item.name}</Text>
        <Text>Loan: KES {item.loanAmount}</Text>
        <Text>Repaid: KES {item.repaid}</Text>
        <Text style={styles.balance}>Balance Left: KES {balance}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loan Repayment Schedule</Text>
      <FlatList
        data={dummyRepayments}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
      <Text style={styles.footer}>Powered by Japanesemonk™</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, backgroundColor: '#fff',
  },
  title: {
    fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center',
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  name: {
    fontSize: 18, fontWeight: 'bold',
  },
  balance: {
    color: 'red', fontWeight: 'bold',
  },
  footer: {
    textAlign: 'center',
    marginTop: 20,
    color: '#999',
    fontSize: 14,
  },
});

export default LoanRepaymentScreen;
