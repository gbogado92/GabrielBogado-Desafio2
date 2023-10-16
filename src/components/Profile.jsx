import React from "react";

// Función para formatear la fecha en un formato legible
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    undefined,
    options
  );
  return formattedDate;
}

const Profile = (props) => {
  // Verificamos si la propiedad "owner" existe en las props
  if (!props.owner) {
    return null; // Si no existe, no mostramos nada y salimos de la función
  }

  return (
    <div className="card rounded mb-4 shadow">
      <img
        src={props.owner.avatar_url}
        alt={props.owner.login}
        className="card-img rounded-circle mt-3 shadow"
        style={{ width: "50px", margin: "0 auto" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          {" "}
          {props.private ? (
            <span className="badge bg-danger">Private</span>
          ) : (
            <span className="badge bg-success">Public</span>
          )}
        </p>
        <p className="card-text">
          Creado por {props.owner.login} el {formatDate(props.created_at)}
        </p>
      </div>
      <div className="card-footer d-flex justify-content-between align-items-center">
        <a
          href={props.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Ver Repo
        </a>
        <div>
          <span className="badge bg-secondary me-2">
            {" "}
            {props.stargazers_count} stars
          </span>
          <span className="badge bg-secondary">
            {props.watchers_count} Watchers
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
