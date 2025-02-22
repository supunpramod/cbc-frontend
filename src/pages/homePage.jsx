import { Link } from 'react-router-dom';
import './homepage.css';
export default function HomePage(){
    return(
        <div className="home-container">
        <header>
            <h1>Welcome to My Website</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>

        <section className="hero">
            <h2>Your One-Stop Solution</h2>
            <p>We provide the best services to help your business grow.</p>
            <button>Get Started</button>
               
            <Link to ="/login" >
            <button>Login</button> 
            </Link>
        </section>

        <footer>
            <p>&copy; 2025 My Website. All rights reserved.</p>
        </footer>

        <Link to ="/login" >LOGIN</Link>
    </div>

    )
}    
