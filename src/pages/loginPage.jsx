
export default function LoginPage() {
    return (
        <div className="w-full h-screen bg-red-400 flex justify-center items-center" >
            <div className="w-[450px] h-[450px] bg-blue-500 flex flex-col justify-center items-center ">
                <img src="logoo.png" className="rounded-full w-[100px] m-[10px]"/>
                <span>Email</span>
                <input type="name" className="rounded-[5px] border border-red-500"/>
                <span>Password</span>
                <input type="password " className="rounded-[5px] border border-red-500" />
                <button className="bg-red-700 m-[10px] hover:bg-black">Login</button>
            </div>
           
        </div>
    );
}