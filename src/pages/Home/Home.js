/* eslint-disable no-unused-vars */
import React from 'react';
import dragon from '../image/novoDragao.jpeg';
import './home.css'

function Home() {
  return (
    <main className='container'>
      <img src={dragon} className='img-fluid' alt='dragão'/>
    </main>
  )
}

export default Home