"use client";
import React from "react";

const LoginForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">

      


      <form onSubmit={onSubmit} className="row justify-content-center">
        <div className="mb-3 col-12 col-md-6 text-left">
          <label htmlFor="exampleInputEmail1" className="form-label mt-3 px-2">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <label htmlFor="exampleInputPassword1" className="form-label mt-3 px-2">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
          <div className="text-primary text-center mt-5">
            <span style={{ cursor: "pointer" }}>
              ¿Has olvidado la contraseña?
            </span>
          </div>
        </div>

        <div className="mb-3 col-12 row justify-content-center">
          <button
            type="submit"
            className="btn w-auto mx-auto p-3 text-light mt-3"
            style={{ background: "var(--primary-color)" }}
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
