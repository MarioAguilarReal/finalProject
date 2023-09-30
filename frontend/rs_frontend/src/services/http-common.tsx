import axios, {AxiosInstance} from "axios";
import React from "react";
import  HttpStatusCode  from "../models/common/HttpStatusCode.enum";

export interface IApiService {
    error: any;
    response: any;
    showError: (message: string) => void;
    getErrorMessage: (error: any) => string;
    getErrorToDisplay: (errorTitle: string) => JSX.Element;
    displayError: (errorTitle: string) => void;
}

export interface CustomAxios extends AxiosInstance {
    history: any;
    rsAdmin: IApiService;
}

const instance = axios.create({
    baseURL: '/api',
    headers: {
        // 'accept': '*/*',
        'Content-Type': 'application/json',
    },
    withCredentials: false,
}) as CustomAxios;

instance.interceptors.request.use((config) => {
    return config;
});

export default instance;