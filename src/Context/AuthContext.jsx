import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";


const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({ children }) => {
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(JSON.parse(localStorage.getItem('authTokens')).access) : null)
    let [loading, setLoading] = useState()


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
        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        }
        else {
            alert("Something Went Wrong")
        }
    }

    let logoutUser = ()=>{
        setUser(null)
        setAuthTokens(null)
        localStorage.removeItem('authTokens')
    }

    let updateToken = async ()=>{
        console.log("update_token_called");
        let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(
                {
                    'refresh': authTokens.refresh
                }
            )
        })

        let data = await response.json()
        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        }
        else {
            logoutUser()
        }
    }

    let contextData = {
        loginUser: loginUser,
        user: user,
        logoutUser: logoutUser
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(authTokens){
                updateToken()
            }
        }, 2000)

        return ()=> clearInterval(interval)
    }, [authTokens, loading])

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}