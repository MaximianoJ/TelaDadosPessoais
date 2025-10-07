// src/screens/NotificationsScreen.tsx

import React from 'react';
import { StyleSheet, SectionList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Header from '../Header';
import NotificationItem from '../NotificationItem';

// Dados de exemplo
const NOTIFICATIONS_DATA = [
    {
        title: 'Hoje',
        data: [
            { id: '1', icon: 'airplane', text: 'Você recebeu um convite de Nicolas para uma viagem para Nagasaki', time: '11:00', showActions: true },
            { id: '2', icon: 'person', text: 'Solicitação de amizade aceita. Agora você é amigo de Nicolas', time: '11:00', showActions: false },
        ],
    },
    {
        title: 'Anteriores',
        data: [
            { id: '3', icon: 'airplane', text: 'Você recebeu um convite de Nicolas para uma viagem para Hiroshima', time: '11:00', showActions: true },
            { id: '4', icon: 'person-add', text: 'Você recebeu um pedido de amizade de Nicolas', time: '11:00', showActions: true },
        ],
    },
];

const NotificationsScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Header
                title="Notificação"
                onBackPress={() => navigation.goBack()} // Ação para o botão de voltar
                // O ícone de notificação aqui não precisa de ação
            />
            <SectionList
                sections={NOTIFICATIONS_DATA}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <NotificationItem
                        icon={item.icon as any} // 'as any' para simplificar a tipagem do ícone
                        text={item.text}
                        time={item.time}
                        showActions={item.showActions}
                    />
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sectionHeader}>{title}</Text>
                )}
                contentContainerStyle={styles.listContainer}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFFFFF' },
    listContainer: { paddingHorizontal: 20 },
    sectionHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333333',
        backgroundColor: '#FFFFFF',
        paddingTop: 18,
        paddingBottom: 4,
    },
});

export default NotificationsScreen;