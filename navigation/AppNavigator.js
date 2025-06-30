import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import LoanRepaymentEntryScreen from '../screens/LoanRepaymentEntryScreen';
import AboutScreen from '../screens/AboutScreen';
import ProductsScreen from '../screens/ProductsScreen';
import LoanCalculatorScreen from '../screens/LoanCalculatorScreen';
import LoanApplicationScreen from '../screens/LoanApplicationScreen';
import LoanRepaymentScreen from '../screens/LoanRepaymentScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="LoanRepaymentEntry" component={LoanRepaymentEntryScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="LoanCalculator" component={LoanCalculatorScreen} />
      <Stack.Screen name="LoanApplication" component={LoanApplicationScreen} />
      <Stack.Screen name="LoanRepaymentSchedule" component={LoanRepaymentScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
