import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsInstagram, BsFacebook, BsTwitterX } from 'react-icons/bs';

export default function Footer() {
    return (
        <footer className="site-footer">
            <Container>
                <Row className="g-4">
                    <Col md={5}>
                        <h3 className="footer-brand">Beautify</h3>
                        <p className="footer-text">
                            High quality, cruelty-free beauty products to help you look
                            and feel your best.
                        </p>
                    </Col>

                    <Col xs={6} md={3}>
                        <h4 className="footer-heading">Quick links</h4>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact us</a></li>
                        </ul>
                    </Col>

                    <Col xs={6} md={4}>
                        <h4 className="footer-heading">Follow us</h4>
                        <div className="footer-social">
                            <a href="#" aria-label="Instagram"><BsInstagram /></a>
                            <a href="#" aria-label="Facebook"><BsFacebook /></a>
                            <a href="#" aria-label="X"><BsTwitterX /></a>
                        </div>
                    </Col>
                </Row>

                <p className="footer-copy">© 2026 Beautify. All rights reserved.</p>
            </Container>
        </footer>
    );
}