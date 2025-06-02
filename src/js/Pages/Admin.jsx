import { useState } from "react"
import { Link } from "react-router-dom"
import { Users } from "../components/Admin/Users"

export const Admin = () => {
    const [activeContent, setActiveContent] = useState("");

    const handleActiveContent = (contentName) => {
        setActiveContent(contentName);
    }

    const renderContent = () => {
        switch (activeContent) {
            case 'users':
                return <Users />
            default:
                return <h3 className="text-white p-3">Click on the admin panel</h3>
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 col-lg-2 bg-dark text-white p-3" style={{ "height": "100vh" }}>
                    <h4 className="">Admin panel</h4>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to={""}
                                className={`nav-link text-white fs-5 mt-4 text-decoration-none ${activeContent === 'users' ? 'fw-bold' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleActiveContent('users');
                                }}
                            >
                                View users
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-9 col-lg-10 pt-4" style={{ "height": "100vh", overflowY: "auto" }}>
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}