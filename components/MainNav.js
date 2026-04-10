import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

export default function MainNav() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="fixed-top">
        <Container>
          <Navbar.Brand as={Link} href="/">
            Ileperuma Achchige Dineth Damishka Gunarathna
          </Navbar.Brand>

          <Nav className="me-auto">
              <Nav.Link as={Link} href="/about">
              About
            </Nav.Link>
            
            <Nav.Link as={Link} href="/favourites">
              Favourites
            </Nav.Link>
          </Nav>

        </Container>
      </Navbar>

      <br />
      <br />
    </>
  );
}