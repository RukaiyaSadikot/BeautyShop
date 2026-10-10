import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import heroImg from '../images/hero/img.png'; 

export default function Hero() {
    return (
        <section className="hero-section">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="hero-text">
                        <h1>Discover Your Beauty</h1>
                        <p>
                            Explore our range of skincare, makeup, and beauty
                            essentials made to help you feel your best, every day.
                        </p>
                        <Button className="hero-btn">Shop Now</Button>
                    </Col>

                    <Col md={6} className="text-center">
                        <img src={heroImg} alt="Beautify model" className="hero-img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}