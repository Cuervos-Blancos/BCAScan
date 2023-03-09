import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import GetAlumno from "../Hooks/GetAlumno";

const AlumnoCard = () => {
    const [Alumnos, setAlumnos] = useState(false);

    const [result, GetInfoAlumnos] = GetAlumno();

    const [colums, setColums] = useState(1);

    useEffect(() => {
        GetInfoAlumnos();
    }, []);

    useEffect(() => {
        setAlumnos(result);
    }, [result]);

    if (result == false) {
        return (
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                <Text style={{ fontSize: 20, color: "gray" }}>Cargando...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Search
                alumnos={result}
                setAlumnos={setAlumnos}
                setColums={setColums}
                colums={colums}
            />
            {/* <ListaPokemones pokemones={Pokemons} colums={colums} /> */}
            <ListaAlumnos alumnos={Alumnos} colums={colums} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default AlumnoCard;

// import React from 'react';
// import {View, StyleSheet} from 'react-native';

// const AlumnoCard = () => {
//     return (
//         <View>
//             // Grid
//         </View>
//     );
// }

// const styles = StyleSheet.create({})

// export default AlumnoCard;
