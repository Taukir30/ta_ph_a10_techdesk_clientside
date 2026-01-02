import axios from 'axios';
import React, { use, useEffect } from 'react';
import { AuthContext } from '../provider/AuthContext';

const instance = axios.create({
    baseURL: 'http://localhost:3000'
    // baseURL: 'https://tech-desk-server.vercel.app'
})

const useAxiosSecure = () => {

    const { user } = use(AuthContext);

    useEffect( () => {
        
        //set token with using interceptor
        const requestInterceptor = instance.interceptors.request.use( (config) => {
    
            config.headers.authorization = `Bearer ${user.accessToken}`
            return config;
        } )

        return () => {
            instance.interceptors.request.eject(requestInterceptor)
        }

    }, [user])

    return instance;
};

export default useAxiosSecure;