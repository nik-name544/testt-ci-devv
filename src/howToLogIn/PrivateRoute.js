import React from 'react'
import { useAuth } from './AuthContext'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ redirectPath = "/login", ...props }) => {
    const { isLoggedIn } = useAuth()
    return (
        isLoggedIn ? <Route {...props} /> : <Redirect to={redirectPath} />
    )
}
