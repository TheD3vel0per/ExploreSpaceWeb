import React, { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import Axios from 'axios';
import Geocode from 'react-geocode';
import './IssPage.css'


const IssPage: React.FC = () => {

    const API_KEY = 'AIzaSyAixXVA1zMyB8fb4O_PY5oZQw3N_ONAetQ';


    const [loaded, setLoaded] = useState(false)
    const [issCoords, setIssCoords] = useState({ latitude: 0.0, longitude: 0.0 });
    const [yourCoords, setYourCoords] = useState({ latitude: 0.0, longitude: 0.0 });

    const [distance, setDistance] = useState(0);



    useEffect(() => {
        load();
    }, [])

    useEffect(() => {

        Axios.get(`http://api.open-notify.org/iss-now.json`).then((val) => {
            setIssCoords({ latitude: val.data['iss_position'].latitude, longitude: val.data['iss_position'].longitude });
        }).then(() => {

            console.log(calculateDistance(yourCoords.longitude, yourCoords.latitude, issCoords.longitude, issCoords.latitude))
            setDistance(calculateDistance(yourCoords.longitude, yourCoords.latitude, issCoords.longitude, issCoords.latitude));
            setLoaded(true);
        })

    }, [issCoords])


    const loadRecommended = (tags) => {
        console.log('load recommended');
        fetch('/api/projects/recommended', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tags: tags
            })

        }).then(async (result) => {
            const data = await result.json();
            // this.setState({
            //   projects: data
            // });
        }).catch(console.log);
    }

    const load = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            setYourCoords({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
        })
    }


    function degreesToRadians(degrees) {
        return degrees * Math.PI / 180;
    }

    const calculateDistance = (longitude1, latitude1, longitude2, latitude2) => {
        var earthRadiusKm = 6371;

        var dLat = degreesToRadians(latitude2 - latitude1);
        var dLon = degreesToRadians(longitude2 - longitude1);

        latitude1 = degreesToRadians(latitude1);
        latitude2 = degreesToRadians(latitude2);

        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(latitude1) * Math.cos(latitude2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return earthRadiusKm * c;

    }

    return (
        <>
            <Container>
                <h1> This is How Close You Are to the ISS (International Space Station)</h1>


                <div className="issContainer">

                    {loaded ? (
                        <>
                            <div className="row">
                                <div className="issCoordinates">
                                    <h2>ISS Coordinates</h2>

                                    <h2>{(issCoords.latitude).toFixed(4)}</h2>
                                    <h3>{(issCoords.longitude).toFixed(4)}</h3>
                                </div>

                                <div className="yourCoordinates">
                                    <h2>Your Coordinates</h2>
                                    <h2>{(yourCoords.latitude).toFixed(4)}</h2>
                                    <h3>{(yourCoords.longitude).toFixed(4)}</h3>
                                </div>

                            </div>

                            <div>
                                <div className="result">
                                    <h1> Distance</h1>
                                    <h2>{distance.toFixed(4)}</h2>
                                </div>
                            </div>

                        </>

                    ) :
                        (
                            <h1> Loading...</h1>
                        )
                    }

                </div>

            </Container>
        </>

    )
};

export default IssPage;