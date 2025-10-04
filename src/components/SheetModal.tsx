// src/components/SheetModal.tsx

import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// 1. Importe o LinearGradient que acabamos de instalar
import { LinearGradient } from 'expo-linear-gradient';

const colors = {
    primary: '#FF5733',
    secondary: '#C70039', // Adicionei uma segunda cor para o gradiente
    text: '#333333',
    textMuted: '#888888',
    white: '#FFFFFF',
};

type SheetModalProps = {
    visible: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
};

const SheetModal = ({ visible, onClose, title, children }: SheetModalProps) => {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                {/* 2. O LinearGradient é o container pai */}
                <LinearGradient
                    colors={[colors.primary, colors.secondary]} // Cores do gradiente
                    start={{ x: 0, y: 0 }} // Começa no canto superior esquerdo
                    end={{ x: 1, y: 1 }}   // Termina no canto inferior direito
                    style={styles.gradientBorderContainer}
                >
                    {/* 3. O container do modal é o "filho" */}
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>{title}</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                            <Ionicons name="close" size={28} color={colors.textMuted} />
                        </TouchableOpacity>

                        {children}

                        <View style={styles.modalButtonContainer}>
                            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                                <Text style={styles.cancelButtonText}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.confirmButton} onPress={onClose}>
                                <Text style={styles.confirmButtonText}>Confirmar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.37)',
    },
    // NOVO container para o gradiente, que cria a "borda"
    gradientBorderContainer: {
        padding: 1, // Esta é a espessura da sua borda! Aumente para uma borda mais grossa.
        borderTopRightRadius: 22, // Um pouco maior que o container interno
        borderTopLeftRadius: 22,
    },
    // ALTERADO container do modal
    modalContainer: {
        backgroundColor: 'white',
        padding: 22,
        borderTopRightRadius: 20, // Cantos arredondados
        borderTopLeftRadius: 20,
        width: '100%',
        alignItems: 'center',
    },
    // O resto dos estilos permanece o mesmo...
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        color: colors.text,
    },
    closeButton: {
        position: 'absolute',
        top: 15,
        right: 15,
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
    cancelButton: {
        flex: 1,
        backgroundColor: colors.secondary,
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.secondary,
        marginRight: 10,
    },
    cancelButtonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    confirmButton: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    confirmButtonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SheetModal;