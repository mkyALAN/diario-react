// ListarObras.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

const ListarObras = ({ navigation }) => {
    const [obras, setObras] = useState([
        { id: '1', titulo: 'Obra 1', descricao: 'Descrição da Obra 1', status: 'Não iniciada', imagem: 'https://via.placeholder.com/150' },
        { id: '2', titulo: 'Obra 2', descricao: 'Descrição da Obra 2', status: 'Em andamento', imagem: 'https://via.placeholder.com/150' },
        { id: '3', titulo: 'Obra 3', descricao: 'Descrição da Obra 3', status: 'Concluída', imagem: 'https://via.placeholder.com/150' },
        { id: '4', titulo: 'Obra 4', descricao: 'Descrição da Obra 4', status: 'Paralisada', imagem: 'https://via.placeholder.com/150' },
    ]);

    const handleAdicionarObra = (novaObra) => {
        setObras([...obras, novaObra]);
    };

    const handleExcluirObra = (id) => {
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
                        setObras(obras.filter(obra => obra.id !== id));
                    },
                },
            ],
            { cancelable: true }
        );
    };

    const handleEditarObra = (obra) => {
        navigation.navigate('EditarObra', { obra, onSalvar: (obraEditada) => {
            setObras(obras.map(o => o.id === obraEditada.id ? obraEditada : o));
        }});
    };

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item.titulo}</Text>
            <Text style={styles.cardDescription}>{item.descricao}</Text>
            <Text style={styles.cardStatus}>{item.status}</Text>
            <View style={styles.actions}>
                <TouchableOpacity onPress={() => handleEditarObra(item)}>
                    <Text style={styles.editButton}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleExcluirObra(item.id)}>
                    <Text style={styles.deleteButton}>Excluir</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <View style={styles.logo}>
                    <Image source={require('../assets/muro_branco.png')} style={styles.logoImage} />
                    <Text style={styles.logoText}>Diário de Obras</Text>
                </View>

                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('CadastrarObra', { onSalvar: handleAdicionarObra })
                    }
                >
                    <Image source={require('../assets/adicionar.png')} style={styles.addIcon} />
                </TouchableOpacity>
            </View>

            <FlatList
                data={obras}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.flatListContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9D9D9',
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#191970',
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoImage: {
        width: 50,
        height: 50,
    },
    logoText: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 10,
    },
    addIcon: {
        width: 30,
        height: 30,
    },
    flatListContent: {
        padding: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
    },
    cardDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    cardStatus: {
        fontSize: 14,
        color: '#0f0f4c',
        fontWeight: 'bold',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    editButton: {
        color: '#0f0f4c',
        fontWeight: 'bold',
    },
    deleteButton: {
        color: '#ff0000',
        fontWeight: 'bold',
    },
});

export default ListarObras;