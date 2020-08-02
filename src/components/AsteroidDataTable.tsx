import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

const AsteroidDataTable: React.FC<{
    asteroids: Array<{
        name: string,
        diameter: string,
        cad: string,
        relVel: string,
        orbitVal: string,
        pha: boolean,
    }>
}> = ({ asteroids }) => {

    return <>

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Diameter</th>
                    <th>Close Approach Date</th>
                    <th>Relative Velocity</th>
                    <th>Orbiting Body</th>
                    <th>"Potentially Hazardous Asteroid (True/False)"</th>
                </tr>
            </thead>
            <tbody>
                {asteroids.map((asteroid) => (
                    <tr>
                        <td>{asteroid.name}</td>
                        <td>{asteroid.diameter}</td>
                        <td>{asteroid.cad}</td>
                        <td>{asteroid.relVel}</td>
                        <td>{asteroid.orbitVal}</td>
                        <td>{asteroid.pha ? "Yes" : "No"}</td>
                    </tr>
                ))}
            </tbody>
        </Table>


    </>;
};

export default AsteroidDataTable;