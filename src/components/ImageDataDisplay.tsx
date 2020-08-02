import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import ImageGallery from 'react-image-gallery';


const ImageDataDisplay: React.FC<{
    Images: Array<{
        original: string,
        thumbnail: string,

    }>
}> = ({ Images }) => {

    return <>
        <ImageGallery items={Images} />
    </>;
};

export default ImageDataDisplay;