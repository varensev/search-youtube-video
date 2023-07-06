import dotenv from 'dotenv';

const myFunction = () => {
    dotenv.config(); // Вызываем dotenv.config() в начале файла

    const apiKey = process.env.REACT_APP_API_KEY;

    return apiKey;
}

export { myFunction };
