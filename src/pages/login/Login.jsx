import logo from "../../assets/images/header.svg";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../api";
import { toast } from "react-toastify";

const Login = () => {
    let navigate = useNavigate();

    const [username, setUsername] = useState("emilys");
    const [password, setPassword] = useState("emilyspass");

    const handleLogin = (e) => {
        e.preventDefault();
        let user = { username, password };

        axios
            .post("/auth/login", user)
            .then((res) => {
                localStorage.setItem("x-auth-token", res.data.token);
                toast.success("Welcome");
                navigate("/admin");
            })
            .catch((err) => {
                console.log(err);
                toast.error("Username or password invalid");
            });
    };
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <div>
            <div className="login">
                <form onSubmit={handleLogin} className="login__form">
                    <img src={logo} alt="" />
                    <div className="login__input">
                        <label htmlFor="name">
                            Name<span>*</span>
                        </label>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="login__input">
                        <label htmlFor="password">
                            Password<span>*</span>
                        </label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="login__warning">
                        <div>
                            <input type="checkbox" />
                            <p>Remember Me</p>
                        </div>
                        <p>Forgot Password?</p>
                    </div>
                    <div className="login__btns">
                        <button>Login</button>
                        <button>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
