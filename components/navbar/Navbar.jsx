"use client"
import Link from "next/link";
import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import style from './Navbar.module.css'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="col" style={{background: 'var(--primary-color)'}} className="px-4">
      <Navbar.Brand>
        <Link href='/home' className="text-white" style={{textDecoration: 'none'}}>PACKAR</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"  style={{color: 'white', background: 'rgba(255, 255, 255, 0.9)'}}/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" >
          <Link href="/login" className={`text-light ${style['scale']} mt-2`} style={{textDecoration: 'none'}}>Iniciar Sesión</Link>
          <Link href="/register" className={`text-light ${style['scale']} mt-2`} style={{textDecoration: 'none'}}>Regístrate</Link>
        </Nav>
        <Nav>
        <Link href="#linkedFeatures" className={`text-light ${style['scale']} mt-2`} style={{textDecoration: 'none'}}>¿De qué nos encargamos?</Link>
          <Link href="#about-us" className={`text-light ${style['scale']} mt-2`} style={{textDecoration: 'none'}}>Sobre Nosotros</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBar