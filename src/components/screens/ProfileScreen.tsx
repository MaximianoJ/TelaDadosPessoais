import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import Header from '../Header';
import TabSelector from '../TabSelector';
import PersonalInfo from '../PersonalInfo';

type RootStackParamList = {
  Profile: undefined;
  Notifications: undefined;
};
type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;

const TABS = ['Dados pessoais', 'Histórico de viagem', 'Configurações'];

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const handleNavigateToNotifications = () => {
    navigation.navigate('Notifications');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Dados pessoais':
        return <PersonalInfo />;
      case 'Histórico de viagem':
        return <View style={styles.contentArea}><Text>Histórico de Viagem</Text></View>;
      case 'Configurações':
        return <View style={styles.contentArea}><Text>Configurações</Text></View>;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="Perfil" 
        onNotificationPress={handleNavigateToNotifications} 
      />
      
      <TabSelector
        tabs={TABS}
        activeTab={activeTab}
        onTabPress={setActiveTab}
      />
      
      {renderTabContent()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;