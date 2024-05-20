"use client";
import Link from 'next/link';
import {useState} from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
} from 'reactstrap';

import "./Navbar-estilo.css"

export function Navbarr(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (<>
    <div className="navbar-mobile">
      <Navbar style={{backgroundColor:"#101518"}}>
        <NavbarToggler style={{ backgroundColor: 'white', padding:"3px" }} onClick={toggleNavbar} className="me-2" />
        <Collapse className='nav-toggle-fondo' isOpen={!collapsed} navbar>
          <Nav navbar>
          <NavItem>
              <Link className='nav-item' href="/">Inicio</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-item' href="/especialidades">Especialidades</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-item' href="/galeria">Galeria</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-item' href="/inscripciones">Inscripciones</Link>
            </NavItem>
            <NavItem>
              <Link  className='nav-item'href="/contacto">Contacto</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>

    <div className="navbar-pc">

        <ul className="navbar-pc-ul">
          <li className='navbar-pc-li'><a className='navbar-a' href="">Inicio</a></li>
          <li className='navbar-pc-li'><a className='navbar-a' href="">Especialidades</a></li>
          <li className='navbar-pc-li'><a className='navbar-a' href="">Galeria</a></li>
          <li className='navbar-pc-li'><a className='navbar-a' href="">Inscripciones</a></li>
          <li className='navbar-pc-li'><a className='navbar-a' href="">Contacto</a></li>
        </ul>

    </div>


    </>
  );
}
