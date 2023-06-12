import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const RecuperarSenhaScreen = () => {
  const [email, setEmail] = useState('');

  const handleRecuperarSenha = () => {
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Recuperar Senha" onPress={handleRecuperarSenha} />
    </View>
  );
};

export default RecuperarSenhaScreen;