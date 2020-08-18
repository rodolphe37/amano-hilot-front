
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import Slide from 'react-reveal/Slide';



const BsNavLink = (props) => {
  const { route, title } = props;
  return (
    <Link href={route}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  )
}


const Header = () => {
  const { API_URL } = process.env
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
      <Navbar className="port-navbar port-default absolute" color="faded" light expand="md">
        <Slide cascade top ssrFadeout>
          <div className="container">
            <NavbarBrand className="port-navbar-brand" href="/">
              <img src={`${API_URL}/uploads/logo-amano-hilot_2_6d0b15c029.png`} alt="logo-amano-hilot" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem className="port-navbar-item">
                  <BsNavLink route="/#home" title="Accueil" />
                </NavItem>
                <NavItem className="port-navbar-item">
                  <BsNavLink route="/about" title="A Propos" />
                </NavItem>
                <NavItem className="port-navbar-item port-navbar-link" data-tooltip="Ici les articles du blog sont affichés sous forme de liste... &#xa; &#xa; avec possibilité de faire une recherche par mots clés."
                  data-tooltip-location="bottom">
                  <BsNavLink route="/blogsPage" title="Blog" />
                </NavItem>
                <NavItem className="port-navbar-item">
                  <BsNavLink route="/contact" title="Contact" />
                </NavItem>
                <NavItem className="port-navbar-item nav-conditional">
                  <ul className="nav-activity">
                    <UncontrolledDropdown nav inNavbar className="uncontrol-nav">
                      <DropdownToggle className="nav-link port-navbar-link" nav caret>
                        Activités
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          <Link href="/portfolio">
                            <a className="list-group-item"> Développeur </a>
                          </Link>
                        </DropdownItem>
                        <DropdownItem>
                          <Link href="/therapeute">
                            <a className="list-group-item"> Thérapeute </a>
                          </Link>
                        </DropdownItem>
                        <DropdownItem>
                          <Link href="/lapidaire">
                            <a className="list-group-item"> Lapidaire </a>
                          </Link>
                        </DropdownItem>
                        <DropdownItem>
                          <Link href="/blogs">
                            <a className="list-group-item"> Blog </a>
                          </Link>
                        </DropdownItem>
                        <DropdownItem>
                          <Link href="/jeux">
                            <a className="list-group-item opt"> Les Jeux Amano-Hilot </a>
                          </Link>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </ul>
                </NavItem>
                <NavItem className="port-navbar-item">
                  <div>
                    <iframe title="sharing button" className="sharing-button" src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.amano-hilot.fr&layout=box_count&size=small&width=81&height=40&appId" width="81" height="40" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>                </div>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Slide>
      </Navbar>
      <style jsx>{`
        .nav-activity {
          list-style: none;
          margin-left: -39px !important;
        }
      `}</style>
    </div>
  );
}

export default Header;
