import { useState } from "react"
export default function Counter() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    return (
        <>
            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}></input>
            <h3>you type {text}</h3>
            <button onClick={()=>setCount(count+1)}>Click me!</button>
            <button onClick={()=>setCount(0)}>reset</button>
            <p>You Click me {count} time</p>
        </>
    )
}