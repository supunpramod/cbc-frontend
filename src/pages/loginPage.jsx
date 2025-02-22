import './loginpage.css';
export default function LoginPage() {
    return (
        <div className="login-container">
            <h1>Login Page</h1>
            <input type="text" placeholder="Enter your username" className="input-field" />
            <input type="password" placeholder="Enter your password" className="input-field" />
            <button className="login-button">Login</button>
        </div>
    );
}