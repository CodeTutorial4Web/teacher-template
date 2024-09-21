import { useState } from "react";
import "../assets/forms.css"

export default function PasswordInput(props) {
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="password-input">
      <input
        id="userPassword"
        placeholder={props.placeholder}
        ref={props.useRef}
        type={showPassword ? "text" : "password"}
      />
      {showPassword ? (
        <i className="fas fa-eye-slash" onClick={toggleShowPassword}></i>
      ) : (
        <i className="fas fa-eye" onClick={toggleShowPassword}></i>
      )}
    </div>
  );
}
