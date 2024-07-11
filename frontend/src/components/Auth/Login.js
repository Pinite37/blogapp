import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { handleLogin } = useContext(AuthContext);

    const onSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, password);
    };

    return (
        <form onSubmit={onSubmit}>
            <h2>Login</h2>
            <div>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;