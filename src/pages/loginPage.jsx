import { useState } from "react";
import axios from "axios";

export default function LoginPage() {
    const [email,setEmail] =useState("your email")
    const [password,setPassword]=useState("")
    function login(){
        axios.get("http://localhost:5000/api/users/login",{
            email:email,
            password:password
        }).then(
            (res)=>{
               if(res.data.user==null){
                toast.error(res.data.message)
                alert(res.data.message)
                return
               }
               localStorage.setItem("token",res.data.token)
               if(res.data.user.type=="token"){
                window.location.href="/admin"
               }else{
                window.location.href="/"
               }
            }
        )
    }

    return (
        <div className="w-full h-screen bg-red-400 flex justify-center items-center" >
            <div className="w-[450px] h-[450px] bg-blue-500 flex flex-col justify-center items-center ">
                <img src="logoo.png" className="rounded-full w-[100px] m-[10px]"/>
                <span>Email</span>
                <input type="name" className="rounded-[5px] border border-red-500" defaultValue={email} onChange={
                    (e)=>{
                    console.log(e.target.value)
                    setEmail(e.target.value)
                }
                }/>
                <span>Password</span>
                <input type="password" className="rounded-[5px] border border-red-500" defaultValue={password} onChange={
                    (e)=>{
                        setPassword(e.target.value)
                    }
                } />
                <button onClick={login} className="bg-red-700 m-[10px] hover:bg-black">Login</button>
            </div>
           
        </div>
    );
}

