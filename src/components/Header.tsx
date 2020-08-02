import React from "react";
import { NavDropdown } from "react-bootstrap";
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';
import { authService } from '../service/AuthService';
import * as firebase from 'firebase';

import Logo from '../images/rocket.png'

const Header: React.FC<{}> = () => {

    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        firebase.auth().onAuthStateChanged(authState => {
            setUser(authState);
        });
    }, []);

    const signOut = () => {
        authService.signOut();
    };

    const signIn = (provider: string) => {
        switch (provider) {
            case 'yahoo':
                authService.signInWithYahoo();
                break;
            case 'twitter':
                authService.signInWithTwitter();
                break;
            case 'github':
                authService.signInWithGithub();
                break;
            case 'google':
                authService.signInWithGoogle();
                break;
            case 'facebook':
                authService.signInWithFacebook();
                break;
            default:
                break;
        }
    };

    return <>
        <Navbar variant="dark" className="navbar navbar-inverse " >
            <Navbar.Brand>
                <img src={Logo} alt="" width={42} height={60} />
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
                <Nav.Link className="btn1">
                    <Link to="/privacy" id="link">
                        {/* <i className="fa fa-address-book-o fa-2x"></i> */}
                        <span className="d-none d-sm-inline">Privacy Policy</span>
                    </Link>
                </Nav.Link>
            </Nav>

            {user ? <>
                <span className="pp"> {user.displayName} </span>
                <Nav.Link className="LogoutButton" onClick={() => signOut()}>Log Out</Nav.Link>
            </> : 
                <NavDropdown title="Sign in with" id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={() => signIn('yahoo')}>Yahoo</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => signIn('twitter')}>Twitter</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => signIn('github')}>Github</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => signIn('google')}>Google</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => signIn('facebook')}>Facebook</NavDropdown.Item>
                </NavDropdown>
            }
        </Navbar>
    </>;
};

export default Header;