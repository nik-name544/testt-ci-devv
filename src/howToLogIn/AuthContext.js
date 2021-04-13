import React, { createContext, useState, useContext } from 'react'
import { Login } from './Login'

const AuthContext = createContext()


export function AuthProvider({ children }) {
    const [token, setToken] = useState()
    const isloggedIn = !!token

    const login = (newToken) => {
        setToken(newToken)
    }

    const logout = () => {
        setToken(null)
    }
    return (
        <AuthContext.Provider value={{ token, isloggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext)