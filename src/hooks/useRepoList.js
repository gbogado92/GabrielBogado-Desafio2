import { useEffect, useState } from "react";

const useRepoList = (users) => {
  const [repos, setRepos] = useState([]); // Estado para almacenar la lista de repositorios

  useEffect(() => {
    const fetchData = async () => {
      const repositories = [];
      // Iteramos a través de la lista de usuarios para obtener sus últimos repositorios
      for (const user of users) {
        // Construimos la URL de la API de GitHub para obtener el último repositorio del usuario
        const url = `https://api.github.com/users/${user}/repos?per_page=1&sort=updated`;
        // Realizamos una solicitud a la API de GitHub para obtener la información del repositorio
        const res = await fetch(url);
        if (res.ok) {
          // Si la solicitud fue exitosa, obtenemos los datos del repositorio
          const data = await res.json();
          // Agregamos el primer repositorio de la respuesta (último actualizado) a nuestra lista de repositorios
          repositories.push(data[0]);
        }
      }
      // Actualizamos el estado 'repos' con la lista de repositorios
      setRepos(repositories);
    };

    if (users.length > 0) {
      fetchData(); // Llamamos a la función 'fetchData' para obtener los repositorios si hay usuarios en la lista
    }
  }, [users]); // El efecto se ejecuta cuando cambia la lista de usuarios

  return repos; // Devuelve la lista de repositorios como un resultado del hook
};

export default useRepoList;
