import axios from "axios";
import { Notification } from "../model/Notification.ts";
import { User } from "../model/User.ts";
import { EnvData } from "../model/EnvData.ts";
import { Predictions } from "../model/Predictions.ts"; 

const BACKEND_URL = 'http://127.0.0.1:5000'

export const getEnvData = async () => {
    const url = BACKEND_URL + '/get-fetched-data';
    const response = await axios.get<EnvData[]>(url)
    return response.data
}

export const getEnvDataElement = async (id: string) => {
    const url = BACKEND_URL + '/get-fetched-data';
    const response = await axios.get<EnvData>(`${url}/${id}`)
    return response.data
}

export const getNotifications = async () => {
    const url = BACKEND_URL + '/get-notification';
    const response = await axios.get<Notification[]>(url)
    return response.data
}

export const getPredictedData = async () => { 
    const url = BACKEND_URL + '/get-predictions';
    const response = await axios.get<Predictions[]>(url)
    return response.data
}

export const createUser = async (user: User) => {
    const url = BACKEND_URL + '/signin';
    const response = await axios.post<User>(url, user)
    return response.data
}

export const login = async (user: User) => {
    const url = BACKEND_URL + '/login';
    const response = await axios.post<User>(url, user)
    return response.data
}

export const updateUser = async (user: User) => {
    const url = BACKEND_URL + '/user';
    const response = await axios.put<User>(url, user)
    return response.data
} 
