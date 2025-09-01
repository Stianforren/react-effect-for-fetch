import React from 'react'

function UsersListItem({user}) {
  return (
    <>
        <li style={{background: user.favouriteColour}} key={user.id}>
            <img
            src={user.profileImage}
            alt={user.firstName + " " + user.lastName}
            />
            <h3>{user.firstName + " " + user.lastName}</h3>
            <p>Email: {user.email}</p>
        </li>
    </>
  )
}

export default UsersListItem
