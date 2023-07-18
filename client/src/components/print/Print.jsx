import { useState, useEffect } from "react";

const Print = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {

    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/users"); 
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user)  => (
        <div key={user.userId}>
          <h3>{user.title}</h3>
          <p>Nombre: {user.name}</p>
          <p>Edad: {user.age}</p>
          <p>Nombre de usuario: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Print;