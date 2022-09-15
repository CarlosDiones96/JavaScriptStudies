import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header()
{
    return (
        <Navbar bg="warning" expand="lg">
        <Container>
        <Navbar.Brand href="#">Meu blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#">Início</Nav.Link>
                <Nav.Link href="#">Outro link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">Action 1</NavDropdown.Item>
                    <NavDropdown.Item href="#">Action 2</NavDropdown.Item>
                    <NavDropdown.Item href="#">Action 3</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="#">Action 4</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Header;