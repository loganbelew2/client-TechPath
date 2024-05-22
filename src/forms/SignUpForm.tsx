import { SetStateAction, useState } from "react";
import InputEmail from "../components/forms/InputEmail";

export default function SignUpForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    const eyeIcon = document.getElementById("icon");
    const passwordElement = document.getElementById('first-pass') as HTMLInputElement
    const passWord = e.target.value;
    setPassword(e.target.value)
    if (passWord.length > 0) {
        passwordElement.classList.remove('input--password');
        eyeIcon?.classList.remove("hide")
    }else {
        eyeIcon?.classList.add("hide")
        passwordElement.classList.add('input--password');
    }
  };

  const handleConfirmPasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    const eyeIcon = document.getElementById("icon2");
    const passwordElement = document.getElementById('second-pass') as HTMLInputElement
    const passWord = e.target.value;
    setConfirmPassword(e.target.value)
    if (passWord.length > 0) {
        passwordElement.classList.remove('input--password');
        eyeIcon?.classList.remove("hide")
    }else {
        eyeIcon?.classList.add("hide")
        passwordElement.classList.add('input--password');
    }
  };

  const changePassIcon = (whichPass: string, whichIcon: string) => {
    const eyeIcon = document.getElementById(whichIcon);
    const inputPassword = document.getElementById(whichPass) as HTMLInputElement
    if (inputPassword?.type === "password") {
      inputPassword.type = "text";
      eyeIcon?.classList.remove("input--hide");
      eyeIcon?.classList.add("input--show");
    } else {
      inputPassword.type = "password";
      eyeIcon?.classList.remove("input--show");
      eyeIcon?.classList.add("input--hide");
    }
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const confirmPassElement = document.getElementById('second-pass');
    if (confirmPassword !== password) {
      setErrorMessage("Please make sure passwords match.");
      confirmPassElement?.classList.add('inputRed')
    } else {
      setErrorMessage("");
      confirmPassElement?.classList.remove('inputRed')
      alert("form submitted");
    }
  };

  return (
    <div className="form-wrapper">
      <h2>Sign Up</h2>
      <form
        action="submit"
        method="post"
        onSubmit={handleSubmit}
        className="form"
      >
        <InputEmail />
        <div className="form-wrapper__input-box--password input-box">
          <input
            id="first-pass"
            className="input input--password"
            name="password"
            type="password"
            required
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <i
            id="icon"
            className="input--hide hide"
            onClick={() => changePassIcon("first-pass", "icon")}
          ></i>
            
        </div>
        <div className="form-wrapper__input-box--password input-box">
          <input
            id="second-pass"
            className={`input input--password `}
            name="password"
            type="password"
            required
            placeholder="confirm password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
           <i
            id="icon2"
            className="input--hide hide"
            onClick={() => changePassIcon("second-pass", "icon2")}
          ></i>
        </div>
        {errorMessage && <p className="input--error">{errorMessage}</p>}
        <button className="button form-wrapper__button" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}
