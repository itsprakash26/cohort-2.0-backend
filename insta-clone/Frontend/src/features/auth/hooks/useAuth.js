import { useContext } from "react";
import { AuthContext } from "../auth.contex";
import { login, register } from "../services/auth.api";

export const useAuth = () => {
    const contex = useContext(AuthContext)
    const { user, setUser, loading, setLoading } = contex



    const handleLogin = async (username, password) => {
        setLoading(true)
        const response = await login(username, password)
        setUser(response.user)
        setLoading(false)
    }

    const handleRegister = async (username, email, password) => {
        setLoading(true)
        const response = await register(username, email, password)
        setUser(response.data)
        setLoading(false)
    }

    return {
        user, loading, handleLogin, handleRegister
    }
}