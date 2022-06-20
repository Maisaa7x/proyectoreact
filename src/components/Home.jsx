import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {

  return (
    <div>
        <Link className="botoninicio" to="/">INICIO</Link>
        <Link className="botoninicio" to="/contacto"> CONTACTO </Link>
    </div>
  )
}