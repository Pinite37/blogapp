import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login, register } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            setUser({ token })
        }
    }, []);

    const handleLogin = async (email, password) => {
        const { token } = await login(email, password);
        setUser({ token });
        localStorage.setItem('token', token);
        navigate('/dashboard');
    }

    const handleRegister = async (username, email, password) => {
        await register(username, email, password);
        navigate('/login');
    }

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleRegister, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}