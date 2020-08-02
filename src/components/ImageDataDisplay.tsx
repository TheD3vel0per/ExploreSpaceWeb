import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { Container, Carousel } from 'react-bootstrap';
import './ImageDataDisplay.css';

const ImageDataDisplay: React.FC<{
    Images: Array<{
        original: string,
        thumbnail: string,

    }>
}> = ({ Images }) => {

    return <>

        <Container id="carouselContainer">
            <Carousel id="carousel">
                {Images.map((image) => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image.original}
                            alt="First slide"
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    </>;
};

export default ImageDataDisplay;