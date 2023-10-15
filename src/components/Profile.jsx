import React from "react";

const Profile = (props) => {
  return (
    <div className="card  rounded mb-4 shadow">
      <img src="" alt="" className="card-img " />
      <div className="card-body">
        <h5 className="card-title">Repo</h5>
        <p className="card-text">Public</p>
        <p className="card-text">Creado por Gabriel el 20 de Julio del 2013</p>
      </div>
      <div className="card-footer d-flex justify-content-between align-items-center">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Ver Repo
        </a>
        <div>
          <span className="badge bg-secondary me-2">400 stars</span>
          <span className="badge bg-secondary">200 Watchers</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
