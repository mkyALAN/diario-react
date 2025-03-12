import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const RevisarObra = ({ route, navigation }) => {
    const { obra } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{obra.titulo}</Text>
            {obra.imagem && (
                <Image source={{ uri: obra.imagem }} style={styles.image} />
            )}
            <Text style={styles.label}>Data da Obra:</Text>
            <Text style={styles.text}>{obra.data}</Text>
            <Text style={styles.label}>Descrição:</Text>
            <Text style={styles.text}>{obra.descricao}</Text>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>Voltar</Text>
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
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#0f0f4c',
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
        color: '#333',
    },
    backButton: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#0f0f4c',
        borderRadius: 5,
        alignItems: 'center',
    },
    backButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default RevisarObra;