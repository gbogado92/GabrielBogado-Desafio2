import Profile from "./components/Profile";
import useRepoList from "./hooks/useRepoList";
import useUserList from "./hooks/useUserList";

const App = () => {
  const users = useUserList(); // Llama al custom hook para obtener la lista de usuarios
  const repos = useRepoList(users); // Llama al custom hook para obtener la lista de repositorios basada en la lista de usuarios
  return (
    <>
      <h1 className="text-center my-5">
        Desafío 2: Integración con API de GitHub
      </h1>

      <section className="py-5 pb-5">
        <div className="container text-center">
          <div className="row">
            {repos.map((item, index) => (
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
