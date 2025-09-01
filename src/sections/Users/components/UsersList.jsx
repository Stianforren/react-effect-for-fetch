import React from 'react'
import { useEffect, useState } from 'react';
import UsersListItem from './UsersListItem'

function UsersList() {
    const userURL = "https://boolean-uk-api-server.fly.dev/TestUser/contact";
    const [userList, setUserList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch(userURL);
        const jsonData = await response.json();
        setUserList(jsonData)
        };
        fetchData();
    },[])

    return (
    <section>
    <h2>Users Section</h2>
    <div className="scroll-container">
        <ul className="users-list">
          {userList.map((user) => (
                <UsersListItem user={user}/> 

            ))}
        </ul>
    </div>
    </section>
    )
}

export default UsersList
