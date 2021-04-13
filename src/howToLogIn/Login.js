import React from 'react'
import { useAuth } from './AuthContext'
import { serverLogin } from './api'
import { useHistory } from 'react-router-dom'

export const Login = () => {
    const { login } = useAuth()
    const history = useHistory()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const token = await serverLogin(e.target.email.value, e.target.password.value)
            login(token)
            history.push("/")
        } catch (error) {
            console.log(error)
            alert("smth went wrong")
        }
    }
    return (
        <>
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">
                        email
                    </label>
                    <input name="email" id="email" placeholder="email" type="email" />
                </div>
                <div>
                    <label htmlFor="password">
                        password
                    </label>
                    <input name="password" id="password" placeholder="password" type="password" />
                </div>
                <button type="submit">log in</button>
            </form>
        </>
    )
}