import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from './Message'

function App() {
    let [count, setCount] = useState(0)
    return (

        <
        >
        <
        Message counter = { count }
        /> <
        button onClick = {
            () => setCount(++count)
        } > click me < /button> <
        />
    );
}

export default App;