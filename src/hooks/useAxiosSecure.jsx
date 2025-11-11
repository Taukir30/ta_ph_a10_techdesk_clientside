import axios from 'axios';
import React, { use } from 'react';
import { AuthContext } from '../provider/AuthContext';

const instance = axios.create({
    baseURL: 'http://localhost:3000'
})

const useAxiosSecure = () => {

    const { user } = use(AuthContext);

    //set token with using interceptor
    instance.interceptors.request.use( (config) => {

        config.headers.authorization = `Bearer ${user.accessToken}`
        return config;
    } )

    return instance;
};

export default useAxiosSecure;