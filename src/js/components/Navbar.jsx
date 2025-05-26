import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container justify-content-between">
                <Link to={'/'} className="navbar-brand text-warning fw-bold">
                    MiniApp
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav justify-content-end">
                        <li><Link to={'/login'} className="nav-link text-white" >Login</Link></li>
                        <li><Link to={'/register'} className="nav-link text-white" >Sign up!</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

