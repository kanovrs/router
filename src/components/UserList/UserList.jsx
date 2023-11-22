import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <ul className='user-list'>
            <h1 className='user-list__tittle'> Cписок користувачів</h1>
            {users.map((user) => (
                <li className='user-list__item' key={user.id}>
                    {user.name}
                    <Link to={`/albums/${user.id}`}>Альбомы</Link>
                </li>
            ))}
        </ul>
    )
}
