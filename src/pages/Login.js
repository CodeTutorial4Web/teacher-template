
import ".././assets/forms.css"
import PasswordInput from "../compnents/PasswordInput"
import { Link } from 'react-router-dom';



export default function Login() {


    const handleFormSubmit = (e) => {
        e.preventDefault()
    } 

    return (
        <main className="loginPage">

            <h2>Login</h2>

            <div className="formContainer">

                <form onSubmit={handleFormSubmit}>

                    <div className="formGroup">
                        <label>Email</label>
                        <input type="email" placeholder="Enter Email Address"/>
                    </div>

                    <div className="formGroup">
                    <label>Password</label>
                    <PasswordInput placeholder="Enter Password"/>
                    </div>

                    <button type="submit" className="btn">Login</button>


                     <Link to="/register">
                     Don't Have Account
                     </Link>   
                </form>
            </div>
        </main>
    )
}