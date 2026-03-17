import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Telas já existentes
import TelaPrincipal from './TelaPrincipal';
import TelaDieta from './TelaDieta';
import TelaInfo from './TelaInfo';

// Novas telas
import TelaLogin from './Login';
import TelaCadastro from './Cadastro';
import TelaTMB from './TelaTMB';

export type RootStackParamList = {
  TelaPrincipal: undefined;
  TelaDieta: undefined;
  TelaInfo: undefined;
  Login: undefined;
  Cadastro: undefined;
  TMB: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
        <Stack.Screen name="TelaDieta" component={TelaDieta} />
        <Stack.Screen name="TelaInfo" component={TelaInfo} />

        {/* Telas de autenticação */}
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="TMB" component={TelaTMB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
