import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePage.css';
const HomePage: React.FC<{}> = () => {
    return (
        <>
            <div className="cardsBackground">
                <Container>
                    <MDBRow className="card-z">
                        <MDBCol md='4' className="mb-4 d-flex" >

                            <MDBCard className="card-z">

                                <MDBCardImage
                                    hover
                                    overlay='white-light'
                                    className='card-img-top'
                                    src="/assets/images/Logo.png"
                                    alt='Project image'
                                />

                                <MDBCardBody cascade className='text-center '>
                                    <MDBCardTitle className='card-title'>
                                        <strong>Game Simulation</strong>
                                    </MDBCardTitle>

                                    <MDBCardText>
                                        <p className='blue-text'>This is a game for learning</p>
                                    </MDBCardText>

                                    <a href="https://game.expl0re.space">
                                        <Button className="align-self-end btn-primary">Click to Go</Button>
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol md='4' className="mb-4 d-flex" >
                            <MDBCard className="card-z " >
                                <MDBCardImage
                                    hover
                                    overlay='white-light'
                                    className='card-img-top'
                                    src="/assets/images/Roadster.jpg"
                                    alt='Project image'
                                />

                                <MDBCardBody cascade className='text-center '>
                                    <MDBCardTitle className='card-title'>
                                        <strong>Roadster Locator</strong>
                                    </MDBCardTitle>

                                    <MDBCardText>
                                        <p className='blue-text'>Where is Elon Musk's Roadster right now?</p>
                                    </MDBCardText>


                                    <Link to={'/roadster/'}>
                                        <Button className="align-self-end btn-primary">Click to go</Button>
                                    </Link>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol md='4' className="mb-4 d-flex" >
                            <MDBCard className="card-z " >
                                <MDBCardImage
                                    hover
                                    overlay='white-light'
                                    className='card-img-top'
                                    src="/assets/images/EarthAsteroid.jpg"
                                    alt='Project image'
                                />

                                <MDBCardBody cascade className='text-center '>
                                    <MDBCardTitle className='card-title'>
                                        <strong>Asteroid Data</strong>
                                    </MDBCardTitle>

                                    <MDBCardText>
                                        <p className='blue-text'>Get data for asteroids</p>
                                    </MDBCardText>


                                    <Link to={'/asteroids'}>
                                        <Button className="align-self-end btn-primary">Click to Go</Button>
                                    </Link>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol md='4' className="mb-4 d-flex" >
                            <MDBCard className="card-z " >
                                <MDBCardImage
                                    hover
                                    overlay='white-light'
                                    className='card-img-top'
                                    src="/assets/images/SolarSystem.png"
                                    alt='Project image'
                                />

                                <MDBCardBody cascade className='text-center '>
                                    <MDBCardTitle className='card-title'>
                                        <strong>Orbital Data</strong>
                                    </MDBCardTitle>

                                    <MDBCardText>
                                        <p className='blue-text'>Get data for Orbitals</p>
                                    </MDBCardText>


                                    <Link to={'/project/'}>
                                        <Button className="align-self-end btn-primary">Click to go</Button>
                                    </Link>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol md='4' className="mb-4 d-flex" >
                            <MDBCard className="card-z " >
                                <MDBCardImage
                                    hover
                                    overlay='white-light'
                                    className='card-img-top'
                                    src="/assets/images/MarsArt.jpg"
                                    alt='Project image'
                                />

                                <MDBCardBody cascade className='text-center '>
                                    <MDBCardTitle className='card-title'>
                                        <strong>Mars Explorer</strong>
                                    </MDBCardTitle>

                                    <MDBCardText>
                                        <p className='blue-text'>Get Real Images and Data from Mars</p>
                                    </MDBCardText>


                                    <Link to={'/mars/'}>
                                        <Button className="align-self-end btn-primary">Click to go</Button>
                                    </Link>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        
                    </MDBRow>

                </Container>
            </div>
        </>
    );
};

export default HomePage;