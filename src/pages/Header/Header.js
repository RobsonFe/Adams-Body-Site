/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '../image/vintage-1751222.svg'
import './header.css'

function Header() {
  return (
    <div className='container-fluid'>

        <header className='row mt-3' id='header'>
            <div id='logo-container'>
            <img src={logo} alt='logo do site' id='logo' />
            <h1>Adams Body Arts Studios</h1>
            </div>
            <p>Exibição de Artes</p>
        </header>
        <hr />

    </div>
  )
}

export default Header