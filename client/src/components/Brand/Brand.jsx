import React from 'react'
import { Link } from 'react-router-dom'
import "./Brand.css";

const Brand = ({
  color
}) => {
  return (
    <Link to="/" className="brand" style={{ color }} >
      KodiHouse
    </Link>
  )
}

export default Brand