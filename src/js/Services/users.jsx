import axios from "axios";

//const BASE_URL = "https://miniapp-backend-zjnn.onrender.com";

const BASE_URL = "https://probable-memory-4jgwwj6v77vwhqx56-3000.app.github.dev/";

export const addUser = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, data);
        const newUser = response.data;
        console.log(newUser);
        return newUser;
    } catch {
        throw new Error("User registration failed");
    }

}

export const logUser = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, data);
        const logedUser = response.data;
        console.log(logedUser);
        return logedUser;
    } catch {
        throw new Error("User login failed");
    }
}

export const getUser = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/user`);
        const users = response.data;
        return users;
    } catch {
        throw new Error("User data unavailable");
    }
}

export const userService = {
    addUser,
    logUser,
    getUser
}