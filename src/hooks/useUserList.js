import { useEffect, useState } from "react";

const useUserList = () => {
  const [users, setUsers] = useState([]); // Estado para almacenar la lista de usuarios

  useEffect(() => {
    const fetchUsers = async () => {
      const url = "https://api.github.com/users";
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        // Extraemos los nombres de usuario de la respuesta de la API de GitHub
        const userLogins = data.map((user) => user.login);
        // Actualizamos el estado 'users' con la lista de nombres de usuario
        setUsers(userLogins);
      }
    };

    fetchUsers(); // Llamamos a la función 'fetchUsers' para obtener la lista de usuarios
  }, []); // El efecto se ejecuta solo una vez al cargar el componente

  return users; // Devuelve la lista de usuarios como un resultado del hook
};

export default useUserList;
