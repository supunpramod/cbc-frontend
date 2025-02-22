import "./testing.css"
import { useState } from "react";
export default function Testing(){
const [count,setCount]=useState(0);
const[name,setName]=useState("Students");

function increment(){
    console.log("incrementing")
    setCount(count+1)
}

function decrement(){
    console.log("decrement")
    setCount(count-1)
}

function changeName(value){
    setName(value)

}
    return(
        <div className="back">
            <h1>{name}</h1>
            <button className="val" onClick={decrement}>-</button>
            <span>{count}</span>
            <button className="val" onClick={increment}>+</button>

            <div class="button-panel">
                <button className="btn1" onClick={()=>changeName("Students")}>Students</button>
                <button className="btn1" onClick={()=>changeName("Teachers")}>Teachers</button>
                <button className="btn1" onClick={()=>changeName("Admins")}>Admins</button>
            </div>
        </div>
        
    )
}
