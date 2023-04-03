import axios from 'axios';

export const getDataApi = async (numeroAlumno) => {
    try {
        const response = await axios.get(`http://localhost:5000/mobile/${numeroAlumno}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
