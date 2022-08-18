import React from 'react'
import "../../../ComponentsCss/Pages/Autentication/Autenticacion.css"
import {Link} from "react-router-dom";

export default function Autenticacion() {
  return (
    <section className='section_autentication'>
      <div className='contend_autentication'>
      <h1 className='title_autentication'>Tienes una cuenta o deseas registrarte</h1>
      <p className='parrafo_autenticacion'>
      Crea una cuenta para poder registrarte</p>
      <div className='contend_button'>
      <Link to="/Autenticacion/Login">
        <button>Login</button>
      </Link>
        <button>Register</button>
      </div>
    </div>
    </section>
  )
}
