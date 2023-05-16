import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { getAllData } from './GetAllData';

const AlumnoCard = ({ numeroAlumno }) => {
    const [alumnoData, setAlumnoData] = useState({});

    useEffect(() => {
        getAllData(numeroAlumno)
            .then((data) => {
                setAlumnoData(data);
                console.log(data);
            })
            .catch((error) => console.error(error));
    }, [numeroAlumno]);

    return (
        <View>
            <Text>Nombre: {alumnoData.nombre}</Text>
            <Text>Apellido: {alumnoData.apellido}</Text>
        </View>
    );
};

export default AlumnoCard;
