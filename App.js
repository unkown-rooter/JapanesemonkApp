import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ✅ Import all screens
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ProductsScreen from './screens/ProductsScreen';
import LoanApplicationScreen from './screens/LoanApplicationScreen';
import LoanCalculatorScreen from './screens/LoanCalculatorScreen';
import LoanRepaymentScreen from './screens/LoanRepaymentScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="ViewProducts" component={ProductsScreen} />
        <Stack.Screen name="LoanApplication" component={LoanApplicationScreen} />
        <Stack.Screen name="LoanCalculator" component={LoanCalculatorScreen} />
        <Stack.Screen name="LoanRepayment" component={LoanRepaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
