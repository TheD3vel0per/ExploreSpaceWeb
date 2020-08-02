import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import './AsteroidPage.css'
import AsteroidFetcher from '../fetchers/AsteroidFetcher'
import AsteroidDataTable from "../components/AsteroidDataTable";



const AsteroidPage: React.FC<{}> = () => {


    // const [date, setDate] = useState<string | null>('');
    // const [asteroid, setAsteroid] = useState<any>({})
    const [asteroidList, setAsteroidList] = useState<any>([{}])
    const [loadedAsteroids, setLoadedAsteroids] = useState<boolean>(false)
    var tempAsteroidList = []


    const fetcher = new AsteroidFetcher(window['nasa-key']);


    useEffect(() => {
        // setData(fetcher.getAsteroids());
        organizeData()
    }, [])


    async function organizeData() {

        var dates = await fetcher.getAsteroids().then(val => val.near_earth_objects);

        Object.keys(dates).forEach((date) => {
            // console.log(dates[date]) // plez daddy twork 4 me bb ;P pp 8======D~~~'

            const maxImages = dates[date].length;

            for (var i = 0; i < maxImages; i++) {
                tempAsteroidList.push({
                    name: dates[date][i].name,
                    diameter: Number(dates[date][i].estimated_diameter.meters.estimated_diameter_max).toFixed(2),
                    cad:  dates[date][i].close_approach_data[0].close_approach_date,
                    relVel: Number(dates[date][i].close_approach_data[0].relative_velocity.miles_per_hour).toFixed(2),
                    orbitVal: dates[date][i].close_approach_data[0].orbiting_body,
                    PHA: dates[date][i].is_potentially_hazardous_asteroid,
                })
                // setAsteroidList([...asteroidList, {
                //     name: dates[date][i].name,
                //     diameter: dates[date][i].estimated_diameter.meters.estimated_diameter_max,
                //     cad:  dates[date][i].close_approach_data[0].close_approach_date,
                //     relVel: dates[date][i].close_approach_data[0].relative_velocity.miles_per_hour,
                //     orbitVal: dates[date][i].close_approach_data[0].orbiting_body,
                //     PHA: dates[date][i].is_potentially_hazardous_asteroid,
                // }])

            }


        });

        console.log(tempAsteroidList)
        setAsteroidList(tempAsteroidList)

       setLoadedAsteroids(true)


        // await console.log(dates)
        // await console.log(endDate)


        // console.log(fetcher.getAsteroids());
    }


    return (
        <>
            <Container className="asteroidContainer">

                <h1> Asteroid Information</h1>
                {/* <input className="dateInput" type="date" onChange={(e) => { setDate(e.target.value) }} /> */}
                <Container className="asteroidData">

                    {/* DATA */}

                    {loadedAsteroids && (
                        <AsteroidDataTable asteroids={asteroidList}>
                            
                        </AsteroidDataTable>
                    )}

                </Container>



            </Container>
        </>
    );
};


export default AsteroidPage;