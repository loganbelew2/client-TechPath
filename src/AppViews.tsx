import { Route, Routes } from "react-router-dom";
import LoginForm from "./forms/LoginForm";
import SignUpForm from "./forms/SignUpForm";
import HomePage from "./HomePage";


export default function AppViews() {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/Login" element={<LoginForm/>}/>
            <Route path="/Register" element={<SignUpForm/>}/>
        </Routes>
    )
}