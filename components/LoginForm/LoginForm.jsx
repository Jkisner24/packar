"use client"
import React from "react";
import AuthForm from "./AuthForm";
import { useDispatch } from "react-redux";
import { getUsers, postUser } from "@/store/slice";

const Login = () => {

  const dispatch = useDispatch()
  const handleLoginSubmit = () => {
    dispatch(getUsers()) 
  }

  return (
    <AuthForm
      onSubmit={handleLoginSubmit}
      h3Title="Iniciar sesión"
      h2Text="Encuentra tu mejor opción"
      h2Span="al mejor precio."
      buttonText="Iniciar sesión"
      formTitle="Inicio de sesión"
      question="¿Has olvidado la contraseña?"
      showNameInput={false}
      showForgotPassword={true}
      showLogin={false}
      dispatchFunction={handleLoginSubmit}
    />
  )
}

const Register = () => {
 
  const dispatch = useDispatch()
  const handleRegisterSubmit = () => {
    dispatch(postUser()) 
  }

  return (
    <AuthForm
      onSubmit={handleRegisterSubmit}
      h3Title="Crear cuenta"
      h2Text="Ahorra tiempo y dinero en"
      h2Span="tus envíos de paquetería."
      buttonText="Crear cuenta"
      formTitle="Crear cuenta"
      question="Inicia sesión"
      showNameInput={true}
      showForgotPassword={false}
      showLogin={true}
      dispatchFunction={handleRegisterSubmit}
    />
  )
}

export { Login, Register }
