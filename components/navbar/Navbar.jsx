"use client"
import Link from "next/link";
import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import style from './Navbar.module.css'

export default function App() {
  return (
    <Navbar collapseOnSelect expand="col" style={{background: 'var(--primary-color)'}} className="px-4">
      <Navbar.Brand>
        <Link href='/home' className="text-white" style={{textDecoration: 'none'}}>PACKAR</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" color="light" style={{color: 'white', background: 'white'}}/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" >
          <Nav.Link href="" className={`text-light ${style['scale']}`}>Features</Nav.Link>
          <Nav.Link href="" className={`text-light ${style['scale']}`}>Pricing</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="" className={`text-light ${style['scale']}`}>More deets</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
