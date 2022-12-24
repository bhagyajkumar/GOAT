import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";


const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({ children }) => {

    let [user, setUser] = useState(null)
    let [authTokens, setAuthTokens] = useState(null)

    let loginUser = async (username, password) => {
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(
                {
                    'username': username,
                    'password': password
                }
            )
        })

        let data = await response.json()
        if (response.status === 200)
        {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        }
        else
        {
            alert("Something Went Wrong")
        }
    }

    let contextData = {
        loginUser: loginUser,
        user: user,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}