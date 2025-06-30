import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function ProductsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>PRODUCTS</Text>
      <Text style={styles.mainItem}>• MITUMBA 👕</Text>
      <Text style={styles.mainItem}>• CROCS 🥿</Text>
      <Text style={styles.mainItem}>• CHARCOAL</Text>
      <Text style={styles.mainItem}>• FIREWOOD 🌳</Text>

      <Text style={styles.sectionTitle}>MITUMBA</Text>
      <Text style={styles.item}>1. Sweatpants — Ksh 300</Text>
      <Text style={styles.item}>2. T-shirts — Ksh 150</Text>
      <Text style={styles.item}>3. Jeans — Ksh 200</Text>
      <Text style={styles.item}>4. Jersey — Ksh 450</Text>

      <Text style={styles.sectionTitle}>CROCS</Text>
      <Text style={styles.item}>1. Pair 1 — Ksh 300</Text>
      <Text style={styles.item}>2. Pair 2 — Ksh 280</Text>
      <Text style={styles.item}>3. Pair 3 — Ksh 250</Text>
      <Text style={styles.item}>4. Pair 4 — Ksh 150</Text>
      <Text style={styles.item}>5. Pair 5 — Ksh 120</Text>
      <Text style={styles.item}>6. Pair 6 — Ksh 100</Text>
      <Text style={styles.item}>7. Pair 7 — Ksh 80</Text>

      <Text style={styles.sectionTitle}>CHARCOAL</Text>
      <Text style={styles.item}>1 Bag — Ksh 1200</Text>
      <Text style={styles.item}>1 Debe — Ksh 200</Text>
      <Text style={styles.item}>1 Koro — Ksh 50</Text>

      <Text style={styles.sectionTitle}>FIREWOOD</Text>
      <Text style={styles.item}>3 Pieces — Ksh 10</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',  // Or your app background color
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  mainItem: {
    fontSize: 20,
    marginVertical: 4,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#007AFF',
  },
  item: {
    fontSize: 18,
    marginLeft: 10,
    marginVertical: 2,
  },
});
