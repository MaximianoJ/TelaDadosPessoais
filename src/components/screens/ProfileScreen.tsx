// src/screens/ProfileScreen.tsx

import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../Header';
import TabSelector from '../TabSelector';
import PersonalInfo from '../PersonalInfo'; // Apenas importe e use

const TABS = ['Dados pessoais', 'Histórico de viagem', 'Configurações'];

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Dados pessoais':
        return <PersonalInfo />; // Continua funcionando perfeitamente
      // ... outros casos
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Perfil" />
      <TabSelector
        tabs={TABS}
        activeTab={activeTab}
        onTabPress={setActiveTab}
      />
      {renderTabContent()}
    </SafeAreaView>
  );
};

// ... (seus estilos para ProfileScreen)
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
});


export default ProfileScreen;