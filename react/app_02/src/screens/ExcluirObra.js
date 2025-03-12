// ExcluirObra.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const ExcluirObra = ({ route, navigation }) => {
    const { id, onExcluir } = route.params;
    const [loading, setLoading] = useState(false);

    const handleExcluir = () => {
        Alert.alert(
            'Confirmar Exclusão',
            'Você tem certeza que deseja excluir esta obra?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Excluir',
                    onPress: () => {
                        onExcluir(id);
                        navigation.goBack();
                    },
                },
            ],
            { cancelable: true }
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Excluir Obra</Text>
            <Text style={styles.message}>Você tem certeza que deseja excluir esta obra?</Text>
            <TouchableOpacity
                style={[styles.button, loading && styles.buttonDisabled]}
                onPress={handleExcluir}
                disabled={loading}
            >
                <Text style={styles.buttonText}>{loading ? 'Excluindo...' : 'Sim, excluir'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    message: {
        fontSize: 16,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#ff0000',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonDisabled: {
        backgroundColor: '#ccc',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    backButton: {
        marginTop: 20,
        alignItems: 'center',
    },
    backButtonText: {
        color: '#0f0f4c',
    },
});

export default ExcluirObra;