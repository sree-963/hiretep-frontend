import { useState } from "react";
import { Link } from "react-router-dom";
// SCSS
import "./employerloginform.scss";

// IMPORTING DIFFERENT COMPONENTS
import { useLogin } from "../../../../../Hooks/Employer Hooks/useLogin";

//IMPORTING DEPENDENCIES
import { useNavigate } from "react-router-dom";

const EmployerLoginForm = () => {
  const { login, error } = useLogin();
  const navigate = useNavigate();

  const [Login, setLogin] = useState( {
    email: "",
    password: "",
  } );
  const [formErrors, setFormErrors] = useState( {} );

  const handleChange = ( e ) => {
    const { name, value } = e.target;
    setLogin( { ...Login, [name]: value } );
  };

  const validate = ( values ) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if ( !values.email ) {
      errors.email = "Email is required";
    } else if ( !regex.test( values.email ) ) {
      errors.email = "Invalid Email";
    }

    if ( !values.password ) {
      errors.password = "Password is required";
    } else if ( values.password.length < 4 ) {
      errors.password = "Password too short";
    }

    return errors;
  };

  const handleSubmit = async ( e ) => {
    e.preventDefault();
    const errors = validate( Login );
    setFormErrors( errors );

    await login( Login.email, Login.password );
    if ( localStorage.getItem( "user" ) ) {
      navigate( "/employer/hire" );
      setLogin( {
        email: "",
        password: "",
      } );
    }
  };

  return (
    <div className="login-form">
      <h1>Welcome back!</h1>
      <p>
        <span>New here?</span> Register to create an account.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={Login.email}
          placeholder="email"
          onChange={handleChange}
        // required
        />
        <p className="error-msg">{formErrors.email}</p>
        <input
          type="text"
          name="password"
          value={Login.password}
          placeholder="password"
          onChange={handleChange}
        // required
        />
        <Link to="/employer-forgot-password">Forgot Password</Link>

        <p className="error-msg">{formErrors.password}</p>

        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}> Error : {error}</p>}
    </div>

  );
};

export default EmployerLoginForm;
