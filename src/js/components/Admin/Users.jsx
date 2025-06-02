import { userService } from "../../Services/users";
import { useEffect, useState } from "react";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true)
                const response = await userService.getUser()
                setUsers(response);
            } catch (error) {
                console.error("Error", error)
            } finally {
                setLoading(false)
            }
        }
        fetchUsers();
    }, [])

    if (loading) {
        return (
            <div className="d-flex justify-content-center">
                <div class="spinner-border text-warning" role="status">
                    <span class="visually-hidden">Loading users...</span>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {users.length === 0 ? (
                        <p className="text-white">No users found</p>
                    ) : (
                        <table class="table ">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <th scope="row">{user.id}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )
                    }
                </div>
            </div>
        </div>
    )
}
