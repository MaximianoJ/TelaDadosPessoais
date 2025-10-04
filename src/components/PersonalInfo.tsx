// src/components/PersonalInfo.tsx

import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TextInput,
    TouchableOpacity
} from 'react-native';
// 1. Importe o novo componente de modal
import ActionSheetModal from './SheetModal';

const colors = {
    primary: '#FF5733',
    editborder: '#FF5733',
    editText: '#FF5733',
    text: '#333333',
    textMuted: '#888888',
    background: '#ffffffff',
    border: '#E0E0E0',
    white: '#FFFFFF',
};

const PersonalInfo = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                {/* O conteúdo da tela continua o mesmo */}
                <View style={styles.profileHeader}>
                    <Image
                        source={{ uri: 'https://avatars.githubusercontent.com/u/63155478?v=4' }}
                        style={styles.avatar}
                    />
                    <View style={styles.userInfoContainer}>
                        <Text style={styles.name}>Nicolas Yanase</Text>
                        <Text style={styles.phone}>+55 11 97730-4028</Text>
                    </View>
                </View>

                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput style={styles.input} value="nicolasyanase18@gmail.com" editable={false} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Senha</Text>
                        <TextInput style={styles.input} value="************" editable={false} secureTextEntry />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={openModal}>
                        <Text style={styles.buttonText}>Editar informações</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* 2. Use o novo componente aqui */}
            <ActionSheetModal
                visible={isModalVisible}
                onClose={closeModal}
                title="O que você quer editar?"
            >
                {/* 3. Passe os inputs como "filhos" (children) do modal */}
                <View style={{width: '100%'}}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Número de telefone</Text>
                        <TextInput style={styles.input} value="+55 11 97730-4028" />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput style={styles.input} value="nicolasyanase18@gmail.com" />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Senha</Text>
                        <TextInput style={styles.input} value="************" editable={false} />
                    </View>
                </View>
            </ActionSheetModal>
        </View>
    );
};

const styles = StyleSheet.create({
    // Estilos Gerais
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: colors.background,
    },
    profileHeader: {
        //alignItems: 'center',
        marginBottom: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userInfoContainer: {
        marginLeft: 25,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.text,
    },
    phone: {
        fontSize: 16,
        color: colors.textMuted,
        marginTop: 4,
    },
    formContainer: {
        width: '100%',
    },
    // --- Estilos para o Formulário (que antes eram componentes separados) ---
    inputContainer: {
        width: '100%',
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        color: colors.textMuted,
        marginBottom: 8,
    },
    input: {
        backgroundColor: colors.background,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 12,
        padding: 16,
        fontSize: 16,
        color: colors.text,
    },
    button: {
        backgroundColor: colors.white,
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 20,
        borderWidth: 1,
        borderColor: colors.editborder,
    },
    buttonText: {
        color: colors.editText,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default PersonalInfo;