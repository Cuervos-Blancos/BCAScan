import React, { useState } from "react";

const getDataApi = async (url) => {
    try {
        let response = await fetch(url);

        return response.json();
    } catch (error) {
        return false;
    }
};

const GetAllAlumnos = async () => {
    try {
        let response = await getDataApi(
            ""
        );

        let alumnos_pendientes = response.results.map((pokemon) =>
            getDataApi(pokemon.url) // getDataApi -> dentro del dataApi pedira los datos "url" (propiedad) de los "pokemon"
        );

        let datos_alumnos = await Promise.all(alumnos_pendientes);

        return datos_alumnos;
    } catch (error) {
        return false;
    }
};

const GetAlumno = () => {
    const [result, setResult] = useState(false);

    const GetInfoAlumnos = async () => {
        setResult(false);

        let result = await GetAllAlumnos();
        if (result == false) {
            setResult(false);
        }
        setResult(result);
    };

    return [result, GetInfoAlumnos];
};

export default GetAlumno;
