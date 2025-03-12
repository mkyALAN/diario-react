// CadastrarObra.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CadastrarObra = ({ navigation, route }) => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [status, setStatus] = useState('Não iniciada');

    const handleSalvar = () => {
        if (!titulo || !descricao || !status) {
            Alert.alert('Erro', 'Preencha todos os campos!');
            return;
        }

        const novaObra = {
            id: Math.random().toString(),
            titulo,
            descricao,
            status,
            imagem: 'https://via.placeholder.com/150',
        };

        if (route.params && route.params.onSalvar) {
            route.params.onSalvar(novaObra);
        } else {
            Alert.alert('Erro', 'onSalvar não está definido');
            return;
        }

        if (navigation.canGoBack()) {
            navigation.goBack();
        } else {
            navigation.navigate('ListarObras');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/muro_azul.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.logoText}>Diário de Obras</Text>
                </View>
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.title}>Cadastrar Nova Obra</Text>

                <Text style={styles.label}>Título</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o título da obra"
                    value={titulo}
                    onChangeText={setTitulo}
                />

                <Text style={styles.label}>Descrição</Text>
                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder="Digite a descrição da obra"
                    value={descricao}
                    onChangeText={setDescricao}
                    multiline
                />

                <Text style={styles.label}>Status</Text>
                <Picker
                    selectedValue={status}
                    style={styles.input}
                    onValueChange={(itemValue) => setStatus(itemValue)}
                >
                    <Picker.Item label="Não iniciada" value="Não iniciada" />
                    <Picker.Item label="Em andamento" value="Em andamento" />
                    <Picker.Item label="Concluída" value="Concluída" />
                    <Picker.Item label="Paralisada" value="Paralisada" />
                </Picker>

                <TouchableOpacity style={styles.button} onPress={handleSalvar}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.link}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },
    navbar: {
        backgroundColor: '#0f0f4c',
        padding: 20,
        alignItems: 'center',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    logoText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    formContainer: {
        maxWidth: 600,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
        marginVertical: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        marginBottom: 15,
        fontSize: 16,
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    button: {
        width: '100%',
        padding: 15,
        backgroundColor: '#0f0f4c',
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    link: {
        color: '#0f0f4c',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default CadastrarObra;