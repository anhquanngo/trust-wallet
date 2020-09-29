import { USER_LOGIN } from '../constants';

export const userLogin = (data) => ({
    type: USER_LOGIN,
    data: data
})