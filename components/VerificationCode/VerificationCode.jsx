import Image from "next/image"
import React, { useState } from "react"
import { LeftArrow } from "@/public/assets"
import { useRouter } from "next/navigation"
import InputCode from "./InpuntCode";

const VerificationCode = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const goBackArrow = () => {
    router.back()
  };

  return (
    <>
      <div className="my-3 col-12 col-md-6 text-left d-flex flex-column">
        <Image
          src={LeftArrow}
          onClick={goBackArrow}
          alt="left arrow"
          style={{ cursor: "pointer" }}
        />
        <span className="mt-3 fs-5 fw-bold">Verificación</span>
      </div>
      <div className="my-5 col-12 col-md-6 text-left align-items-center d-flex flex-column w-100">
        <p className="fs-4">
          Por favor, introduce el código de <span className="d-block text-left">verificación que te hemos enviado.</span>
        </p>
      </div> 
      <InputCode
        length={6}
        loading={loading}
        onComplete={code => {
          setLoading(true);
          setTimeout(() => setLoading(false), 10000);
        }}
      /> 
      </>
  );
};

export default VerificationCode;
