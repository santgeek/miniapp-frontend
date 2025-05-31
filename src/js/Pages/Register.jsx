import { userService } from "../Services/users"
import { useState } from "react"

export const Register = () => {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const newUser = async (e) => {
        e.preventDefault();
        try {
            const response = await userService.addUser(userData)
            console.log("Registration successful:", response);
            alert("Registration successful!")
            setUserData({
                name: "",
                email: "",
                password: ""
            })
        } catch (error) {
            console.error("Error", error)
            alert("Registration failed")
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevUserData => ({ ...prevUserData, [name]: value }))
    }


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <h1 className="text-center text-white mt-5 mb-5">Sign up now!</h1>
                    <form onSubmit={newUser}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label text-white">Insert your full name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                required
                                value={userData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label text-white">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                aria-describedby="emailHelp"
                                required
                                value={userData.email}
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
                                name="password"
                                required
                                value={userData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-warning w-50 mt-3 rounded-4">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}