import React, { useEffect, useState } from "react";
import axios from "axios";
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch((err) => console.log("error getting data:", err));
  }, []);

  return (
    <div>
      Users:
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}-{user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
