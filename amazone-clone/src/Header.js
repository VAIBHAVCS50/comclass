import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from "@mui/icons-material/Search"; 

function Header() {
  return (
    <nav className='header'>
      <Link to="/login">
      <img className="header_logo" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='no image'></img>
      </Link>
      {/* logo on the left */}
       <input type='text' className="header_searchInput"/>
       {/* <SearchIcon className="header_searchIcon"/> */}
      {/* search box */}
      {/* 3 links  */}
      {/* basket number with numbers */}

    </nav>
  )
}

export default Header
