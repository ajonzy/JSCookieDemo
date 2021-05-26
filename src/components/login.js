import React, { useState } from "react"
import Cookie from "js-cookie"

import Data from "../../static/assets/dummydata.json"

export default function Login(props) {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [incorrectData, setIncorrectData] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        if(name === Data.name && password === Data.password) {
            Cookie.set("jsCookieDemo", name)
            props.handleSet()
        } else {
            setIncorrectData(true)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input name="name" value={name} placeholder="Name" onChange={() => setName(event.target.value)}></input>
            <input name="password" value={password} placeholder="Password" onChange={() => setPassword(event.target.value)}></input>
            <button>Submit</button>
            <p>{incorrectData ? "Incorrect name or password" : ""}</p>
        </form>
    )
}