import React, { useState, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap';
import './AsteroidPage.css'
import AsteroidFetcher from '../fetchers/AsteroidFetcher'
// import DataTable from "..src/components/DataTable"



const AsteroidPage: React.FC<{}> = () => {


    const [date, setDate] = useState<string | null>('');

    const fetcher = new AsteroidFetcher("penis");

    useEffect(()=> {
        console.log(fetcher.getAsteroids());
    }, [date])


    return (
        <>
            <Container className="asteroidContainer">

                <h1> Asteroid Information</h1>
                <input className="dateInput" type="date" onChange={(e) => { setDate(e.target.value) }} />
                <Container className="asteroidData">

                    {/* DATA */}
                    {/* <DataTable>
                    </DataTable> */}

                </Container>



            </Container>
        </>
    );
};


export default AsteroidPage;
