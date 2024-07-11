import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { handleRegister } = useContext(AuthContext);

    const onSubmit = (e) => {
        e.preventDefault();
        handleRegister(username, email, password);
    };

    
}