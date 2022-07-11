import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

export const Login = () => {
    const [user, setUser] = useState('')
    const auth = useAuth()

    const handleLogin = () => {
        auth.login(user)
        Navigate('/')
    }
return (
    <div>
        <label>
            UserName: <input type='text' onChange={e => setUser(e.target.value)} />
        </label>
        <button onClick={handleLogin}>Login</button>
    </div>
)

}