import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button } from 'react-native';

// Import Screens
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>JapaneseMonk Business Suite</Text>
      <Button title="Members" onPress={() => navigation.navigate('Members')} />
      <Button title="Loans" onPress={() => navigation.navigate('Loans')} />
      <Button title="Products" onPress={() => navigation.navigate('Products')} />
    </View>
  );
}

function MembersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Members Screen</Text>
    </View>
  );
}

function LoansScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loans Screen</Text>
    </View>
  );
}

function ProductsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Members" component={MembersScreen} />
        <Stack.Screen name="Loans" component={LoansScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' }
});
