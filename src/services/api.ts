import axios from 'axios'

const appUrl = process.env.REACT_APP_ENVIRONMENT_MODE === 'local' ? 'http://localhost:3000/api' : 'https://dt-money-gules.vercel.app/api';

export const api = axios.create({
    baseURL: appUrl
})