import React, { useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Message from './Message'

function App() {
    let [count, setCount] = useState(0)
    let [isMorning, setDay] = useState(true)
    let [ischild, adult] = useState(true)
    return (

        <
        div className = { `box ${isMorning ? 'morning' : 'night'}` } >
        <
        h1 > have a Good { isMorning ? "Morning" : "Night" } < /h1> <
        h1 > you are { ischild ? '17 year old' : '18 year old' } < /h1>

        <
        Message counter = { count }
        /><br/ >
        <
        button onClick = {
            () => setCount(++count)
        } > click me < /button><br/ >
        <
        button onClick = {
            () => setDay(!isMorning)
        } > change mode < /button> <
        br / >
        <
        button onClick = {
            () => adult(!ischild)
        } > change age < /button> <
        /div>
    );
}

export default App;