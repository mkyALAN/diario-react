import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [messages, setMessages] = useState([]);

    const handleLogin = () => {
        if (!username || !password) {
            Alert.alert('Erro', 'Preencha todos os campos!');
            return;
        }

        if (username === 'admin' && password === 'admin') {
            navigation.navigate('ListarObras');
        } else {
            Alert.alert('Erro', 'Usuário ou senha incorretos!');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const { width, height } = Dimensions.get('window');
    const isDesktop = width >= 768;

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/logo_branca.png')}
                    style={[styles.logo, isDesktop && styles.logoDesktop]}
                />
            </View>

            <View style={[styles.content, isDesktop && styles.contentDesktop]}>
                <Text style={styles.title}>LOGIN</Text>
                {messages.length > 0 && (
                    <View style={styles.messages}>
                        {messages.map((message, index) => (
                            <Text key={index} style={styles.error}>{message}</Text>
                        ))}
                    </View>
                )}
                <TextInput
                    style={styles.input}
                    placeholder="Usuário"
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.checkboxContainer} onPress={togglePasswordVisibility}>
                    <View style={[styles.checkbox, showPassword && styles.checkboxChecked]} />
                    <Text style={styles.checkboxLabel}>Mostrar Senha</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f0f4c',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoDesktop: {
        width: 150,
        height: 150,
    },
    content: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '90%',
        maxWidth: 400,
        alignItems: 'center',
    },
    contentDesktop: {
        maxWidth: 500,
        padding: 40,
    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 20,
        color: '#0f0f4c',
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#0f0f4c',
        borderRadius: 3,
        marginRight: 10,
    },
    checkboxChecked: {
        backgroundColor: '#0f0f4c',
    },
    checkboxLabel: {
        color: '#0f0f4c',
    },
    button: {
        backgroundColor: '#0f0f4c',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    messages: {
        marginBottom: 10,
    },
    error: {
        color: 'red',
        textAlign: 'center',
    },
});

export default LoginScreen;