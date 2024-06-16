"use client";
import Link from 'next/link';
import {useState} from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import { usePathname } from 'next/navigation';
import "./Navbar-estilo.css"

export function Navbarr(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const path = usePathname()

  const linkInicio = "/"
  const linkEspecialidades = "/especialidades"
  const linkGaleria= "/galeria"
  const linkInscripcion = "/inscripcion"
  const linkContacto = "/contacto"


  const isPathActive = (link) => path.startsWith(link);

  return (<>
    <div className="navbar-mobile">
      <Navbar style={{backgroundColor:"#101518"}}>
        <NavbarToggler style={{ backgroundColor: 'white', padding:"3px" }} onClick={toggleNavbar} className="me-2" />
        <Collapse className='nav-toggle-fondo' isOpen={!collapsed} navbar>
          <Nav navbar>
          <NavItem>
              <Link href={linkInicio}><div className="nav-item">Inicio</div></Link>
            </NavItem>
            <NavItem>
              <Link href={linkEspecialidades}><div className="nav-item">Especialidades</div></Link>
            </NavItem>
            <NavItem>
              <Link href="/galeria"><div className="nav-item">Galeria</div></Link>
            </NavItem>
            <NavItem>
              <Link href="/inscripciones"><div className="nav-item">Inscribirme</div></Link>
            </NavItem>
            <NavItem>
              <Link href="/contacto"><div className="nav-item">Contacto</div></Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>

    <div className="navbar-pc">

        <ul className="navbar-pc-ul">
          <Link className='navbar-a' href="/"><li className={`navbar-pc-li ${path === linkInicio ? 'navActive' : ''}`}>Inicio</li></Link>
          <Link className='navbar-a' href={linkEspecialidades}><li className={`navbar-pc-li ${isPathActive(linkEspecialidades) ? 'navActive' : ''}`}>Especialidades</li></Link>
          <Link className='navbar-a' href=""><li className={`navbar-pc-li ${path == linkGaleria ? 'navActive' : ''}`}>Galeria</li></Link>
          <Link className='navbar-a' href=""><li className={`navbar-pc-li ${path == linkInscripcion ? 'navActive' : ''}`}>Inscripciones</li></Link>
          <Link className='navbar-a' href=""><li className={`navbar-pc-li ${path == linkContacto ? 'navActive' : ''}`}>Contacto</li></Link>
        </ul>

    </div>


    </>
  );
}
