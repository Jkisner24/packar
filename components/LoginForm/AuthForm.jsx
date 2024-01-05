import Image from "next/image"
import React, {useState} from "react"
import { LeftArrow, GoogleLogo } from "@/public/assets"
import { useRouter } from "next/navigation"

const AuthForm = ({
  h3Title,
  h2Text,
  h2Span,
  buttonText,
  formTitle,
  question,
  showNameInput,
  showForgotPassword,
  showLogin,
  dispatchFunction,
  handleEmailChange, 
  handlePasswordChange, 
  handleNameChange
}) => {

  const router = useRouter()
  const [loginLink, setLoginLink] = useState('/login')

  const handleLoginClick = () => {
    router.push(loginLink)
  }

  const goBackArrow = () => {
    router.back()
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchFunction(e);  
  };

  return (
    <>
      <div className="my-3 col-12 col-md-6 text-left d-flex flex-column">
        <Image src={LeftArrow} onClick={goBackArrow} alt="left arrow" style={{ cursor: "pointer" }} />
        <span className="mt-3 fs-5 fw-bold">{h3Title}</span>
      </div>
      <div className="my-5 col-12 col-md-6 text-left align-items-center d-flex flex-column w-100">
        <p className="fw-bold fs-3">
          {h2Text} <span className="d-block text-left">{h2Span}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="row justify-content-center">
        <div className="mb-3 col-12 col-md-6 text-left">
          {showNameInput && (
            <>
              <label htmlFor="name" className="form-label mt-3 px-2">
                Nombre
              </label>
              <input
                onChange={handleNameChange} 
                type="text"
                className="form-control"
                id="name"
                aria-describedby="nameHelp"
              />
            </>
          )}

          <label htmlFor="exampleInputEmail1" className="form-label mt-3 px-2">
            Email
          </label>
          <input
            onChange={handleEmailChange} 
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <label
            htmlFor="exampleInputPassword1"
            className="form-label mt-3 px-2"
          >
            Contraseña
          </label>
          <input
            onChange={handlePasswordChange}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
          {
            showForgotPassword && 
              <div className="text-primary text-center mt-5">
                 <span style={{ cursor: "pointer" }}>{question}</span>
              </div>
          }
          
        </div>

        <div className="mb-3 col-12 row justify-content-center">
          <button
            type="submit"
            className="btn w-auto mx-auto p-3 text-light mt-3"
            style={{ background: "var(--primary-color)" }}
          >
            {buttonText}
          </button>
        </div>
      </form>

      <div className="my-3 col-12 d-flex justify-content-center align-items-center">
        <div className="w-50 border-top border-3"></div>
        <span className="mx-5" style={{ cursor: "default" }}>
          o
        </span>
        <div className="w-50 border-top border-3 "></div>
      </div>

      <div className="my-5 col-12 d-flex justify-content-center">
        <Image
          src={GoogleLogo}
          alt="Google Logo"
          style={{ cursor: "pointer" }}
        />
      </div>

      {showLogin && 
         <div className="text-dark text-center my-3">
         <p>¿Ya tienes una cuenta? <span style={{ cursor: "pointer" }} onClick={handleLoginClick} className="text-primary">{question}</span></p>
      </div> 
      }
    </>
  );
};

export default AuthForm;
