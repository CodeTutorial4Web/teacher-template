import ".././assets/forms.css";
import PasswordInput from "../compnents/PasswordInput";
import { Link } from "react-router-dom";

export default function Register() {



    const handleFormSubmit = (e) => {
        e.preventDefault()
    } 


  return (
    <main className="registerPage">
      <h2>Register</h2>

      <div className="formContainer">
   
        <form onSubmit={handleFormSubmit}>
          <div className="formGroup">
            <label>Username</label>
            <input type="text" placeholder="Enter Username" />
          </div>

          <div className="formGroup">
            <label>Email</label>
            <input type="email" placeholder="Enter Email Address" />
          </div>

          <div className="formGroup">
            <label>Password</label>
            <PasswordInput placeholder="Enter Password" />
          </div>

          
          <div className="formGroup">
            <label>Phone Number</label>
            <input type="number" placeholder="Enter Phone Number" />
          </div>
         

          <div className="formGroup">
            <label>Select School Year</label>
            <select >
                <option value="1" key="1">Secondary 1</option>
                <option value="2" key="2">Secondary 2</option>
                <option value="3" key="3">Secondary 3</option>
            </select>
          </div>

          <div className="formGroup">
            <label>Your Birthday</label>
            <input type="date" />
          </div>

          <button type="submit" className="btn">
          Register
          </button>

          <Link to="/register">Already Have Account Login</Link>
        </form>
      </div>
    </main>
  );
}
