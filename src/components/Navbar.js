import { faBars, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const Navbar = ({ openSideBar }) => {
  const logout = () => {
    localStorage.clear();
    Navigate('/login')
  }
  return (
    <nav className="navbar navbar-expand-lg bg-nav px-1" >
      <div className="container-fluid">
        <button onClick={openSideBar} className='btn' ><FontAwesomeIcon color='lightblue' icon={faBars} /></button>
        <Link className="navbar-brand ms-3" to='/'>Dashboard</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon color='lightblue' size='lg' icon={faBars} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='/'>Home</Link>
            </li> */}
          </ul>
          <Link to='/register'><FontAwesomeIcon color='lightblue' icon={faRightToBracket} className='mx-2' />Register</Link>
          <Link onClick={logout} ><FontAwesomeIcon color='lightblue' icon={faRightToBracket} className='mx-2' />Logout</Link>

        </div>
      </div>
    </nav>
  )
}

export default Navbar