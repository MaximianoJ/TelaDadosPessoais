import React from 'react';

// 1. Importe a sua tela de perfil que está dentro da pasta 'src'
import ProfileScreen from './src/components/screens/ProfileScreen';

export default function App() {
  // 2. Em vez de retornar a tela padrão do Expo, 
  //    retorne o componente da sua tela.
  return <ProfileScreen />;
}

// Não precisamos mais do StyleSheet que vem por padrão, então ele foi removido.