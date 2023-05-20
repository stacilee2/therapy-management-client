import React from 'react'
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

function NavBar( {GiConversation} ) {
    return (
    <div>
      <Navbar className="nav-bar">
        <div className="logo">
          <div className="logo-icon"><GiConversation /></div>
          <p className="company-name">Specialty Therapy Services, LLC.</p>
        </div>
        <NavLink 
          exact to="/" 
          className="nav-link"
          activestyle={{ fontWeight: "bold", color: "pink"
          }}>
        Home
        </NavLink>
        <NavLink 
          exact to="/caseload"
          className="nav-link"
          activestyle={{ fontWeight: "bold", color: "pink"
        }}>
        Caseload
        </NavLink>
        <NavLink 
        exact to="/locations"
        className="nav-link"
        activestyle={{ fontWeight: "bold", color: "pink"
        }}>
        Locations
        </NavLink>
        <NavLink 
        exact to="/update"
        className="nav-link"
        activestyle={{ fontWeight: "bold", color: "pink"
        }}>
        Update Caseload
        </NavLink>
      </Navbar>
    </div>
  )
}

export default NavBar;
