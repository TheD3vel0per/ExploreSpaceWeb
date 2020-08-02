import React from 'react';
import { Container, Button } from "react-bootstrap";

const ThreeBodyProblemPage: React.FC<{}> = () => (
    <Container>
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Three-body_Problem_Animation_with_COM.gif"/>
        <h1>
            Three Body Problem!
        </h1>
        <p>
            In physics and classical mechanics, the three-body problem is the problem of taking the initial positions and velocities (or momenta) of three point masses and solving for their subsequent motion according to Newton's laws of motion and Newton's law of universal gravitation. The three-body problem is a special case of the n-body problem. Unlike two-body problems, no general closed-form solution exists, as the resulting dynamical system is chaotic for most initial conditions, and numerical methods are generally required. 
        </p>
        <p>
            <i>From <a href="https://en.wikipedia.org/wiki/Three-body_problem">Wikipedia</a></i>  
        </p>
        <Button href="https://3bp.expl0re.space">
            Click Here to View Our Custom-Made Simulation!
        </Button>
    </Container>
);

export default ThreeBodyProblemPage;