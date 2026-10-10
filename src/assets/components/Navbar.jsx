import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsSearch } from 'react-icons/bs';


export default function Header() {
    return (
        <Navbar expand="lg" className="py-3" style={{ backgroundColor: '#fbe9e2' }}>
            <Container className="d-flex align-items-center">
                <Navbar.Brand href="#" style={{ fontStyle: 'italic', fontWeight: 600 }}>
                    Beautify
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-navbar" />

                <Navbar.Collapse id="main-navbar" className="justify-content-between">
                    <Nav className="gap-4 mx-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About Us</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#contact">Contact us</Nav.Link>
                    </Nav>

                    <Form className="d-flex">
                        <InputGroup style={{ borderRadius: '50px', overflow: 'hidden' }}>
                            <InputGroup.Text style={{ backgroundColor: '#fff', border: 'none' }}>
                                <BsSearch color="#999" />
                            </InputGroup.Text>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                style={{ border: 'none' }}
                            />
                        </InputGroup>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}