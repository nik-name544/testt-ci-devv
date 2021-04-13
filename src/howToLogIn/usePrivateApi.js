import React from 'react'
import { useAuth } from './AuthContext'
const server = process.env.REACT_APP_API_SERVER

export const usePrivateApi = () => {
    const { token } = useAuth()
    const getSecretInfo = () => {
        return fetch(`${server}/api/secret`, {
            headers: {
                Authorization: "Bearer" + token
            }
        }).then(res =>{
            return res.json()
        })
    }
    return (
         {getSecretInfo}
    )
}
