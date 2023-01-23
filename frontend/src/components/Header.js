import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom"
import './Header.css'
function Header() {
    const navigate = useNavigate()
    let auth = localStorage.getItem('user')

    const logout = () => {
        localStorage.clear()
        navigate('/signup')
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">E_Commerse</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {auth ? <>
                            <Nav className="naav"><Link to='/'>Products</Link></Nav>
                            <Nav className="naav"><Link to='/addproduct'>Add Products</Link></Nav>
                            {/* <Nav className="naav"><Link to='/updateproduct'>Update Products</Link></Nav> */}
                            <Nav className="naav"><Link onClick={logout} to='/signup'>Logout({JSON.parse(auth).name})</Link></Nav>
                        </> :
                            <Nav className="naav"><Link to='/signup'>Signup</Link><Link className="naav" to='/signin'>Signin</Link></Nav>


                        }
                    </Nav>






                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header