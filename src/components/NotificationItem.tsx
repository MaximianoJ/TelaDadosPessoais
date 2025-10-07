import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const colors = {
    icon: '#FFFFFF',
    primary: '#FF5733',
    lightPink: '#FFE2DC',
    text: '#333333',
    textMuted: '#888888',
};

type NotificationItemProps = {
    icon: keyof typeof Ionicons.glyphMap;
    text: string;
    time: string;
    showActions?: boolean;
};

const NotificationItem = ({ icon, text, time, showActions = false }: NotificationItemProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Ionicons name={icon} size={22} color={colors.icon} />
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.textRow}>
                    <Text style={styles.mainText}>{text}</Text>
                    <Text style={styles.timeText}>{time}</Text>
                </View>
                {showActions && (
                    <View style={styles.actionsRow}>
                        <TouchableOpacity style={[styles.button, styles.acceptButton]}>
                            <Text style={styles.acceptButtonText}>Aceitar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.rejectButton]}>
                            <Text style={styles.rejectButtonText}>Recusar</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flexDirection: 'row', paddingVertical: 16, alignItems: 'flex-start' },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    contentContainer: { flex: 1 },
    textRow: { flexDirection: 'row', justifyContent: 'space-between' },
    mainText: { flex: 1, color: colors.text, fontSize: 15, marginRight: 8 },
    timeText: { color: colors.textMuted, fontSize: 13 },
    actionsRow: { flexDirection: 'row', marginTop: 12 },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 36,
        borderRadius: 8,
        marginRight: 18,
    },
    acceptButton: { backgroundColor: colors.lightPink },
    acceptButtonText: { color: colors.primary, fontWeight: 'bold' },
    rejectButton: { backgroundColor: '#FFD1D1' },
    rejectButtonText: { color: '#FF0049', fontWeight: 'bold' },
});

export default NotificationItem;