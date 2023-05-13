import Navigation from "../components/Navigation";

import { Container, Form, Button, Card } from "react-bootstrap";

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

                <Card style={{ width: '28rem' }} border="info">
                    <Card.Header>Get Notified!</Card.Header>
                    <Card.Body>
                        <Card.Title>Sign up for our newsletter!</Card.Title>
                        <Card.Text>You'll receive promo codes and a special treat for you and your furry friend on your birthday!</Card.Text>

                        <Form>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>What is your name?</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>What is your email address?</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="birthday">
                                <Form.Label>When is your birthday?</Form.Label>
                                <Form.Control type="date" placeholder="Enter birthday" />
                                <Form.Text className="text-muted">
                                We'll never share your birthday with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                
            </Container>
        </div>
    );
}