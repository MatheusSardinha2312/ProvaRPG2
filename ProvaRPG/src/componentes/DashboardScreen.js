import React from 'react';
import { View, Text, Button } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  const handleLogout = () => {
    navigation.navigate('Login'); 
  };

  return (
    <View>
      <Text>Bem-vindo ao Dashboard</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default DashboardScreen;
