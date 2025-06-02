import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/index.css"

export const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem("accessToken");
        setIsLoggedIn(false);
        navigate("/");
    }

    useEffect(() => {
        const checkToken = async () => {
            const token = localStorage.getItem("accessToken");
            setIsLoggedIn(!!token);
        }
        checkToken();
    }, [localStorage.getItem("accessToken")])

    return (
        <nav className="navbar navbar-expand-lg bg-navbar-custom navbar-dark">
            <div className="container justify-content-between">
                <Link to={'/'} className="navbar-brand text-warning fw-bold">
                    MiniApp
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    {isLoggedIn ? (
                        <li className="nav-item">
                            <button className="btn btn-outline-warning" onClick={handleLogOut}>
                                Logout
                            </button>
                        </li>
                    ) : (
                        <ul className="navbar-nav justify-content-end">
                            <li>
                                <Link to={'/login'} className="nav-link text-white" >
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link to={'/register'} className="nav-link text-white" >
                                    Sign up!
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    )
}

