import React from 'react';
import { Container, Table } from 'react-bootstrap';
import RoadsterFetcher from '../fetchers/RoadsterFetcher';
import './roadster.css'

const RoadsterPage: React.FC<{}> = () => {

    const [roadster, setRoadster] = React.useState({
        "name": "Elon Musk's Tesla Roadster",
        "launch_date_utc": "2018-02-06T20:45:00.000Z",
        "launch_date_unix": 1517949900,
        "launch_mass_kg": 1350,
        "launch_mass_lbs": 2976,
        "norad_id": 43205,
        "epoch_jd": 2458366.482893519,
        "orbit_type": "heliocentric",
        "apoapsis_au": 1.663752666195018,
        "periapsis_au": 0.9860753850280967,
        "semi_major_axis_au": 137.6352649527045,
        "eccentricity": 0.2557438701934329,
        "inclination": 1.077489463372395,
        "longitude": 317.0956890012447,
        "periapsis_arg": 177.4902539777412,
        "period_days": 557.0317797709337,
        "speed_kph": 75139.344,
        "speed_mph": 46689.409320624,
        "earth_distance_km": 194902757.14697537,
        "earth_distance_mi": 121106921.11117323,
        "mars_distance_km": 159204213.85950035,
        "mars_distance_mi": 98924881.57009159,
        "wikipedia": "https://en.wikipedia.org/wiki/Elon_Musk%27s_Tesla_Roadster",
        "details": "Elon Musk's Tesla Roadster is an electric sports car that served as the dummy payload for the February 2018 Falcon Heavy test flight and is now an artificial satellite of the Sun. Starman, a mannequin dressed in a spacesuit, occupies the driver's seat. The car and rocket are products of Tesla and SpaceX, both companies founded by Elon Musk. This 2008-model Roadster was previously used by Musk for commuting, and is the only consumer car sent into space."
    });

    React.useEffect(() => {
        const rf: RoadsterFetcher = new RoadsterFetcher();
        rf.getRoadster()
            .then((data) => setRoadster(data))
            .catch(console.error);
    }, [])


    return (
        <Container>
            <img className="roadster" src="/assets/images/Roadster.jpg"/>
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td><b>Earth Distance</b></td>
                        <td>{roadster.earth_distance_km} km</td>
                        <td>{roadster.earth_distance_mi} mi</td>
                    </tr>
                    <tr>
                        <td><b>Mars Distance</b></td>
                        <td>{roadster.mars_distance_mi} mi</td>
                        <td>{roadster.mars_distance_km} km</td>
                    </tr>
                    <tr>
                        <td><b>Relative Speed</b></td>
                        <td>{roadster.speed_kph} kph</td>
                        <td>{roadster.speed_mph} mph</td>
                    </tr>
                    <tr>
                        <td><b>Relative Speed</b></td>
                        <td>{roadster.speed_kph} kph</td>
                        <td>{roadster.speed_mph} mph</td>
                    </tr>
                    <tr>
                        <td><b>Relative Speed</b></td>
                        <td>{roadster.speed_kph} kph</td>
                        <td>{roadster.speed_mph} mph</td>
                    </tr>
                    <tr>
                        <td><b>Longitude</b></td>
                        <td colSpan={2}>{roadster.longitude}</td>
                    </tr>
                    <tr>
                        <td><b>Period Days</b></td>
                        <td colSpan={2}>{roadster.period_days}</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};

export default RoadsterPage;