// ------------ OPCION CORRECTA ------------

// Este componente contiene la interfaz para simular una calculadora. 
// El usuario puede teclear números del 0 al 9 y estos números se muestran en una pantalla (Display). 
// Además, hay botones para borrar el último número, limpiar la pantalla y aceptar el número tecleado.

import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TecladoScreen() {
    // Definimos el estado inicial del display en una cadena vacía
    const [numero, setNumero] = useState('');
    const navigation = useNavigation();

    // Función que se ejecuta al presionar un botón numérico

    const handleNumeroPress = (n) => {
    // Si el número de caracteres en el display es menor a 10, concatenamos el número presionado al display
        if (numero.length < 10) {
            setNumero(numero + n);
        }
    };

    // Función que se ejecuta al presionar el botón de borrar
    const handleBorrarPress = () => {
        // Si el display no está vacío, eliminamos el último caracter
        setNumero(numero.slice(0, -1));
    };

     // Función que se ejecuta al presionar el botón de limpiar display
    const handleClearPress = () => {
        setNumero('');
    };

    // Función que se ejecuta al presionar el botón de aceptar
    const handleAceptarPress = () => {
        // Si el display no está vacío, navegamos a la pantalla de AlumnoCard y enviamos el número de alumno
        if (numero.length === 0) {
             // Si el display está vacío, mostramos un mensaje de error
            alert('Por favor, ingrese un número.');
            return;
        }
        navigation.navigate('AlumnoCard', { numeroAlumno: numero });
    };

    // Renderizar
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text h4 style={{ marginBottom: 30 }}>
                Teclee el número del alumno
            </Text>
            <Text h1 style={{ marginBottom: 30 }}>
                {numero}
            </Text>
            <View style={{ flexDirection: 'row' }}>
                <Button title="1" onPress={() => handleNumeroPress('1')} />
                <Button title="2" onPress={() => handleNumeroPress('2')} />
                <Button title="3" onPress={() => handleNumeroPress('3')} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Button title="4" onPress={() => handleNumeroPress('4')} />
                <Button title="5" onPress={() => handleNumeroPress('5')} />
                <Button title="6" onPress={() => handleNumeroPress('6')} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Button title="7" onPress={() => handleNumeroPress('7')} />
                <Button title="8" onPress={() => handleNumeroPress('8')} />
                <Button title="9" onPress={() => handleNumeroPress('9')} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Button title="Borrar" onPress={handleBorrarPress} />
                <Button title="0" onPress={() => handleNumeroPress('0')} />
                <Button title="Limpiar" onPress={handleClearPress} />
            </View>
            <Button title="Aceptar" onPress={handleAceptarPress} />
        </View>
    );
}

