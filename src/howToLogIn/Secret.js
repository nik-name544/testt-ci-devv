import { usePrivateApi } from "./usePrivateApi"
import { useEffect, useState } from "react"

export const Secret = () => {
    const [message, setMessage] = useState()
    useEffect(() => {
        const fetchSecret = async () => {
            const data = await getSecretInfo()
            setMessage(data)
        }
        fetchSecret()
    }, [])
    const { getSecretInfo } = usePrivateApi()
    return (
        <>
            <h1>Darova</h1>
            <p>{message && JSON.stringify(message, null, 2)}</p>

        </>
    )
}