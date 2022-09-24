import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SideBar from './SideBar';

const Container = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(true)

  const burgerClick = () => {
    setOpenSidebar(prev => !prev)
  }

  return (
    <React.Fragment>
      <div className="main" style={openSidebar ? { display: 'flex' } : { display: 'block' }}>
        {
          openSidebar ? <SideBar /> : ''
        }
        <div className={openSidebar ? 'container wrapper' : ''}>
          <div className="head-nav">
            {
              openSidebar ? <i className="bi bi-list burger" onClick={burgerClick}></i> : <i class="bi bi-x burger" onClick={burgerClick}></i>
            }

            <div className="dropdown">
              <Link className="btn btn-default dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Username
              </Link>

              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/">Settings & Privacy</Link></li>
                <li><Link className="dropdown-item" to="/">Sign out</Link></li>
              </ul>
            </div>
          </div>
          <div className="container div-content">
            {children}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Container