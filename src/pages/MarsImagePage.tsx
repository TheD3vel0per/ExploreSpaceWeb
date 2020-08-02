import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import './AsteroidPage.css'
import ImageFetcher from '../fetchers/ImageFetcher'
import ImageDataDisplay from "../components/ImageDataDisplay";



const MarsImagePage: React.FC<{}> = () => {

    // const [images, setimages] = useState<string | null>('');
    // const [asteroid, setAsteroid] = useState<any>({})
    const [ImageList, setImageList] = useState<any>([{}])
    const [loadedImages, setLoadedImages] = useState<boolean>(false)


    const fetcher = new ImageFetcher(window['nasa-key']);
    var tempImageList = []


    useEffect(() => {

        // setData(fetcher.getAsteroids());
        organizeData()

    }, [])


    async function organizeData() {

        var images = await fetcher.getImages();

        {images['photos'].map((image) => {

            tempImageList.push({
                original: image['img_src'],
                thumbnail: image['img_src'],
            })
        })}

        console.log(tempImageList);


        setImageList(tempImageList);
        setLoadedImages(true);

    }


    return (
        <>
            <div>
                <h1>Mars Images</h1>



                {loadedImages && (
                    <ImageDataDisplay Images={ImageList}>

                    </ImageDataDisplay>
                )}
            </div>
        </>
    );
};


export default MarsImagePage;
