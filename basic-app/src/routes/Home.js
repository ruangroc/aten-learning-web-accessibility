import Navigation from "../components/Navigation";

import { Container } from "react-bootstrap";

export default function Home() {
    return (
        <div>
            <Navigation />
            <Container className="mt-4">
                <h1>Welcome to the ATEN Pet Store!</h1>
                <p>
                    Currently learning and applying web accessibility guidelines while creating 
                    a fictional pet store e-commerce site using React and React-Bootstrap.
                </p>
            </Container>
        </div>
    );
}