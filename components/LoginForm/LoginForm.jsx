"use client"
import React, { useEffect, useReducer, useState } from "react";
import AuthForm from "./AuthForm";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, postUser, sendMail } from "@/store/slice";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {

  const [approvedLogin, setApproveLogin] = useState(false)
  const [rejectedLogin, setRejectedLogin] = useState(false)

  const users = useSelector((state) => state.slice.users) || []
  console.log("users", users)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const router = useRouter()
  const dispatch = useDispatch()

  const handleLoginSubmit = async () => {
    const user = users.find((user) => user.email === email && user.password === password)

    if (!user) {
      setRejectedLogin(true);
      toast.error("Correo o contraseña incorrecta.")
    }

    if (user) {
      setApproveLogin(true)
    }
  };

  useEffect(() => {
    dispatch(getUsers())
    if (approvedLogin) {
      toast.success("Iniciando sesión :)")
      setTimeout(() => {
        router.push("/home")
      }, 2000)
    }
  }, [dispatch, approvedLogin, router]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  };

  return (
    <>
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

      {approvedLogin && <Toaster position="top-center" reverseOrder={false} />}
      {rejectedLogin && <Toaster position="top-center" reverseOrder={false} />}
    </>
  )
}

const Register = () => {
 
  const dispatch = useDispatch()
  const users = useSelector((state) => state.slice.users);
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mailSent, setMailSent] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (mailSent) {
      dispatch(sendMail(email));
    }
  }, [mailSent, dispatch, email]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegisterSubmit = () => {
    dispatch(postUser({ username: name, email, password }));
    dispatch(sendMail(email));
    router.push("/login")
  };

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
      handleNameChange={handleNameChange} 
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
    />
  )
}

export { Login, Register }
