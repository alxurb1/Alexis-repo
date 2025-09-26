import axios from "axios"

const API_URL = 'https://jsonplaceholder.typicode.com'

const instance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        'Accept':'*/*',
        'X-Custom-Header': 'foobar',
    },
});

instance.interceptors.request.use(
    (config)=> {
        config.headers['X-Request-Id'] = Math.random().toString(36).substring(7)
        const token = localStorage.getItem('token');
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config
    },
    (error) =>{
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    localStorage.removeItem('token');
                    window.location.href = '/';
                    break;
                case 403:
                    console.error('Acceso denegado');
                    break;
                case 404:
                    console.error('Recurso no encontrado');
                    break;
                case 500:
                    console.error('Error interno del servidor');
                    break;
                default:
                    console.error('Error:', error.response.data.message || 'Error desconocido');    
            }
        } else if (error.request) {
            console.error('Error de conexión:', error.message);
        } else {
            console.error('Error:', error.message);
        }
        return Promise.reject(error);
    }
);

export const createCancelableRequest = () => {
    const controller = new AbortController();

    const request = {
        get: (url, config = {}) => instance.get(url, { ...config, signal: controller.signal}),
        post: (url, data, config = {}) => instance.post(url, data, { ...config, signal:controller.signal}),
        cancel: () => controller.abort()
    };
    return request;
};


export default instance;
