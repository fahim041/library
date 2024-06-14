'use client'
import { useState, useEffect } from "react"

interface User {
    id: number;
    name: string;
}

export default function UserPage(){
    const [users, setUsers] = useState<User[]>();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((users: User[]) => setUsers(users))
    }, [])

    return (
        <div className="p-4">
            <h1>Users</h1>
            <ul>
                {users?.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}