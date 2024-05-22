import "/src/components/forms/forms.css"
import { Link } from "react-router-dom";
import InputEmail from "../components/forms/InputEmail";
import InputPass from "../components/forms/InputPass";


export default function LoginForm() {


  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }


  return (
    <div className="form-wrapper">
      <h2>Login</h2>
      <form className="form" action="submit" method="post" onSubmit={handleSubmit}>
        <InputEmail/>
        <InputPass />
        <div className="form-wrapper__remember-forgot">
          <label htmlFor="remember">
            <input id="remember" type="checkbox" /> remember me
          </label>
          <Link to="/">Forgot Password?</Link>
        </div>
        <button type="submit" className="button form-wrapper__button">
          Login
        </button>
        <br />
        <div className="form-wrapper__separators">
        <div className="separator"></div>
        <span>Or</span>
        <div className="separator"></div>
        </div>
        <img
          src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
          alt=""
        />
        <div className="form-wrapper__register-link-box">
          <p className="form-wrapper__paragraph">
            Don't have an account? <Link to="/Register">Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
