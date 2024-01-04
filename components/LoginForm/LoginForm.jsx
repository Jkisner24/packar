"use client"
import React, { useState } from "react";
import AuthForm from "./AuthForm";
import { useDispatch, useSelector } from "react-redux";
import { postUser } from "@/store/slice";
import { useRouter } from "next/navigation";

const Login = () => {

  const users = useSelector((state) => state.slice.users)

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const router = useRouter()
  console.log("Users:", users)
  const handleLoginSubmit = async () => {
    const user = users.find(user => user.email === email)
    user ? router.push('/mobile-phone') : alert("Usuario inexistente")
  }

  const handleEmailChange = (e) => {
   setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
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
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
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
