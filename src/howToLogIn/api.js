const server = process.env.REACT_APP_API_SERVER

export const serverLogin = (email, password) => {
    console.log(server)
    return fetch(`https://2xcdq.sse.codesandbox.io/api/login`, {
        method: "POST",
        body: JSON.stringify({
            email,
            password
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        if (res.status === 200) {
            return res.json().then((data) => {
                return data.token
            })
        } else {
            const error = new Error(res.error)
            throw error
        }
    })
}