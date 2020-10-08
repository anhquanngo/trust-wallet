import axios from 'axios';

export const axiosHeader = (key, value) => {
    axios.defaults.headers.common[key] = value;
}

export const AUTHORIZATION_KEY = "Authorization";