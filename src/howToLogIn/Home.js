import { Link } from "react-router-dom"
import React from 'react'

export const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <ul>
                <li>
                    <Link to="/login">login</Link>
                </li>
                <li>
                    <Link to="/secret">secret</Link>
                </li>
            </ul>
        </>
    )
}