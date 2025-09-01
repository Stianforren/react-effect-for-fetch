import { useEffect, useState } from "react";

function UsersSection() {
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

            ))}
        </ul>
    </div>
  </section>

  )
}

export default UsersSection
