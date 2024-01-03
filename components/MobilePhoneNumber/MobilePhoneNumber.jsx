"use client"
import Image from "next/image"
import React from "react"
import { MobilePhoneNumberSvg } from "@/public/assets"
import SelectPhoneNumber from "./SelectPhoneNumber"
import { useRouter } from "next/navigation";

const MobilePhoneNumber = () => {

  const router = useRouter()
  const verificationCode = () => {
    router.push('/verification-code')
  }
  return (
    <div className="content w-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <Image
          style={{width: '50%', height: '50%'}}
          className="my-5"
          src={MobilePhoneNumberSvg}
          alt="Checked"
        />
        <p className="fw-bold fs-5 mt-5 mb-3">
          Introduce tu número de teléfono
        </p>
        <SelectPhoneNumber />
        <p className="fs-6 mt-4 mb-3">
          Te enviaremos un código OTP para{" "}
          <span className="d-block text-left">
            verificar tu número de teléfono
          </span>
        </p>
        <div className="container mb-4">
          <div className="col-12">
            <button
              type="button"
              className="btn w-50 mx-auto p-3 text-light mt-3"
              style={{ background: "var(--primary-color)" }}
              onClick={verificationCode}
            >
              Enviar código
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePhoneNumber;
