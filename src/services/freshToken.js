import axios from 'axios';

import { getMnemonicStr_Uri } from '../redux/api';

export const freshToken = async () => {
    let res = await axios.get(getMnemonicStr_Uri);
    let token = res.data.token;
    // console.log(token);
    //insert token to header
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return token;
}