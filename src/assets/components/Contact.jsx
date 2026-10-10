import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsEnvelope, BsTelephone, BsGeoAlt } from 'react-icons/bs';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="contact-section">
            <Container>
                <h2 className="section-title">Contact us</h2>

                <Row className="g-5">
                    <Col md={5}>
                        <p className="contact-intro">
                            Questions about an order or need help choosing a product?
                            Send us a message and we'll get back to you within a day.
                        </p>

                        <ul className="contact-list">
                            <li><BsEnvelope /> hello@beautify.com</li>
                            <li><BsTelephone /> +91 90909 09090</li>
                            <li><BsGeoAlt /> Janmagar, Gujarat, India</li>
                        </ul>
                    </Col>

                    <Col md={7}>
                        <Form onSubmit={handleSubmit} className="contact-form">
                            <Row className="g-3">
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                                <Col sm={6}>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                                <Col xs={12}>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        name="message"
                                        placeholder="Your message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                                <Col xs={12}>
                                    <Button type="submit" className="bag-btn">
                                        Send message
                                    </Button>
                                    {sent && (
                                        <span className="sent-msg">Thanks! We'll be in touch soon.</span>
                                    )}
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}