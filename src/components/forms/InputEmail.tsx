

import "./forms.css" 
export default function InputEmail() {
    return (
        <div className="input-box">
          <input
            className="input input--email"
            name="email"
            type="email"
            required
            placeholder="Email"
          />
        </div>
    )
}