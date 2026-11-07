import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000/api/auth",
    withCredentials: true,
});

// Register API
export async function register(username, email, password) {
    const response = await API.post("/register", {
        username,
        email,
        password,
    });
    return response.data;
}

// Login API
export async function login(username, password) {
    const response = await API.post("/login", {
        username,
        password,
    });
    return response.data;
}
