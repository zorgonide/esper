import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';

function Header() {
    const [isNavOpen, toggleNav] = useState(false);
    const [isModalOpen, toggleModal] = useState(false)

    return (
        <div>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={()=>toggleNav(!isNavOpen)} />
                    <NavbarBrand href="/">Esper</NavbarBrand>
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link"  to='/user'>User</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/devices'>Devices</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/groups'>Groups</NavLink>
                            </NavItem>
                        </Nav>
                        {/* <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                            </NavItem>
                        </Nav> */}
                    </Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default Header;