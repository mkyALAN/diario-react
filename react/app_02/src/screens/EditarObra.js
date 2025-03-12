// EditarObra.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const EditarObra = ({ route, navigation }) => {
    const { obra, onSalvar } = route.params;
    const [titulo, setTitulo] = useState(obra.titulo);
    const [descricao, setDescricao] = useState(obra.descricao);
    const [status, setStatus] = useState(obra.status);

    const handleSalvar = () => {
        if (!titulo || !descricao || !status) {
            Alert.alert('Erro', 'Preencha todos os campos!');
            return;
        }

        const obraEditada = {
            ...obra,
            titulo,
            descricao,
            status,
        };

        onSalvar(obraEditada);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Editar Obra</Text>

            <Text style={styles.label}>Título</Text>
            <TextInput
                style={styles.input}
                value={titulo}
                onChangeText={setTitulo}
                placeholder="Digite o título"
            />

            <Text style={styles.label}>Descrição</Text>
            <TextInput
                style={[styles.input, styles.textArea]}
                value={descricao}
                onChangeText={setDescricao}
                placeholder="Digite a descrição"
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
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: '#0f0f4c',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
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

export default EditarObra;