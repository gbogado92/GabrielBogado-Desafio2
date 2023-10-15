import React, { useEffect, useState } from "react";
import Profile from "./components/Profile";

const App = () => {
  // Utilizamos el estado para almacenar la lista de repositorios y la lista de usuarios
  const [items, setItems] = useState([]); // Para los repositorios
  const [users, setUsers] = useState([]); // Para los usuarios

  useEffect(() => {
    // Este primer efecto se ejecuta al cargar la página
    // Obtenemos la lista de usuarios de la API de GitHub
    const fetchUsers = async () => {
      const url = "https://api.github.com/users";
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        // Extraemos los nombres de usuario y los almacenamos en el estado
        setUsers(data.map((user) => user.login));
      }
    };

    fetchUsers(); // Llamamos a la función para obtener la lista de usuarios
  }, []);

  useEffect(() => {
    // Este segundo efecto se ejecuta cuando el estado de "users" cambia
    // Obtenemos los repositorios de los usuarios
    const fetchData = async () => {
      const repositories = [];
      for (const user of users) {
        // Para cada usuario, obtenemos su repositorio más reciente
        const url = `https://api.github.com/users/${user}/repos?per_page=1&sort=updated`;
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          // Agregamos el repositorio más reciente a la lista
          repositories.push(data[0]);
        }
      }
      // Actualizamos el estado "items" con la lista de repositorios
      setItems(repositories);
    };

    if (users.length > 0) {
      fetchData(); // Llamamos a la función para obtener los repositorios
    }
  }, [users]);

  return (
    <>
      <h1 className="text-center my-5">
        Desafío 2: Integración con API de GitHub
      </h1>

      <section className="py-5 pb-5">
        <div className="container text-center">
          <div className="row">
            {items.map((item, index) => (
              <div className="col-12 col-md-6 col-lg-4 mb-5" key={index}>
                <Profile {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
