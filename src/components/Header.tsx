import React from "react";
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC<{}> = () => {
    
    return <>
        <Navbar variant="dark" className="navbar navbar-inverse " >
            <Navbar.Brand>
                <img src="/images/ExploreSpace.png" alt="" width={65} height={65} />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Nav className="mr-auto">
                <Nav.Link className="btn1">
                    <Link to="/" id="link">
                        <div className="nounderline">
                            {/* <i className="fa fa-home fa-2x"></i> */}
                            <span className="btn1 d-none d-sm-inline nounderline">Home</span>
                        </div>
                    </Link>
                </Nav.Link>
                <Nav.Link className="btn1">
                    <Link to="/about-us" id="link">
                        {/* <i className="fa fa-address-book-o fa-2x"></i> */}
                        <span className="d-none d-sm-inline">About Us</span>
                    </Link>
                </Nav.Link>


            </Nav>
        </Navbar>
    </>;
};

export default Header;