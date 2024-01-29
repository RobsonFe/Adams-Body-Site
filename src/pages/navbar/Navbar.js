/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <nav id='navbar' className='container'>
        <div className='row justify-content-center'>
            <NavLink to="/" className="navl">
            <a>Home</a>
            </NavLink>
            <NavLink to="/projetos" className="navl">
            <a>Projetos</a>
            </NavLink>
            <NavLink to="/artista" className="navl">
            <a>Artista</a>
            </NavLink>
            <NavLink to="/contato" className="navl">
            <a>Contato</a>
            </NavLink>

        </div>
    </nav>
  )
}

export default Navbar