import { userService } from "../Services/users"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate()
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prevLoginData => ({ ...prevLoginData, [name]: value }));
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await userService.logUser(loginData)
            console.log("Successful login", response)
            alert("Successful login!")
            if (response.token) {
                localStorage.setItem('accessToken', response.token);
            }
            setLoginData({
                email: "",
                password: ""
            })
            navigate("/admin")
        } catch (error) {
            console.error("Error", error)
            alert("Invalid credentials")
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <h1 className="text-center text-white mt-5 mb-5">Wellcome back!</h1>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label text-white">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                required
                                name="email"
                                value={loginData.email}
                                onChange={handleChange}
                            />
                            <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label text-white">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                required
                                name="password"
                                value={loginData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning w-50 mt-3 rounded-4">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}