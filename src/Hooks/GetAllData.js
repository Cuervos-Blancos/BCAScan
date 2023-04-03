import { getDataApi } from './ApiRequests';

async function getAllData(numeroAlumno) {
    try {
        const response = await getDataApi(`http://localhost:5000/mobile/${numeroAlumno}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Something went wrong');
    }
}

export default getAllData;
