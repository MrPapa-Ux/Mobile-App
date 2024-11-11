import React from 'react';
import SplashScreen from './src/pages/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import Home from './src/pages/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddTransaction from './src/pages/AddTransaction';
import FlashMessage from 'react-native-flash-message';
import CashOnHand from './src/pages/CashOnHand';
import CashOnBank from './src/pages/CashOnBank';
import './src/config/Firebase';

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="AddTransaction"
          component={AddTransaction}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="CashOnHand"
          component={CashOnHand}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="CashOnBank"
          component={CashOnBank}
          options={{headerShown: false}}
        />
      </stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
