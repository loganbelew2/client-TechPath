import { SetStateAction, useState } from "react";
import "./forms.css";
export default function InputPass() {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    const eyeIcon = document.getElementById("icon");
    const passwordElement = document.getElementById(
      "first-pass"
    ) as HTMLInputElement;
    const passWord = e.target.value;
    setPassword(e.target.value);
    if (passWord.length > 0) {
      passwordElement.classList.remove("input--password");
      eyeIcon?.classList.remove("hide");
    } else {
      eyeIcon?.classList.add("hide");
      passwordElement.classList.add("input--password");
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
  
  return (
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
  );
}
