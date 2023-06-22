import './App.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navbarr() {
  
  return (
    <div className="App">

                                                                            {/* navbar section */}

      <section className="home ">
  



    <Navbar className='ps-3 pe-5' bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img src={logo} alt="logo" width="70" height="70" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/nonveg">
            Non veg
          </Nav.Link>
          <Nav.Link as={Link} to="/veg">
            Veg
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      </section> 


<nav>
      <Link to="/Navbar">  </Link>
     </nav>
    </div>
     
    
  );


}

export default Navbarr;