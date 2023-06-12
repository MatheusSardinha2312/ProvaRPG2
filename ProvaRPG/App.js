import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import RPG from './src/componentes/RPG';
import CadastroScreen from './src/componentes/CadastroScreen';
import LoginScreen from './src/componentes/LoginScreen';
import RecuperarSenhaScreen from './src/componentes/RecuperarSenhaScreen';
import DashboardScreen from './src/componentes/DashboardScreen';

const Stack = createStackNavigator();

export default function App() {

  const cards = [
    {
      nome: 'EspadaNórdica',
      desc: 'Ela possui um dano de 20hp por ser extremamente lendária',
      imagem: "https://i.pinimg.com/236x/2b/2a/84/2b2a84ef81e22be2212bf57011d7bfbf.jpg"
    },
    {
      nome: 'PoçãoCura',
      desc: 'Uma poção que regenera 80% da vida do jogador',
      imagem: "https://pm1.narvii.com/6357/48931d14a3201d4497f3296807aea41dcf096770_00.jpg"
    },
    {
      nome: 'ArmaduraFerro',
      desc: 'Essa armadura adiciona 70 pontos de defesa ao jogador',
      imagem: "https://img.freepik.com/vetores-premium/jogo-de-madeira-escudo-escudo-vetor-medieval-batalha-armadura-armadura-espada-de-ferro-isolada-no-branco_191217-538.jpg?w=2000"
    },
  ];
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RPG">
        <Stack.Screen name="RPG" options={{ headerShown: false }}>
          {(props) => (
            <View style={styles.container}>
              {cards.map((c) => (
                <RPG key={c.nome} card={c} {...props} />
              ))}
            </View>
          )}
        </Stack.Screen>
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenhaScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
