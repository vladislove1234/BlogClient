import React, {Component} from 'react'
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import logo from '../photos/logo192.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Blog from '../pages/Blog'
import Discussions from '../pages/Discussions'
import NotFound from '../pages/NotFound'
import Contacts from '../pages/Contacts'

export default class Header extends Component{
    render(){
        return(
            <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" height="3rem">
                <Container>
                    <NavbarBrand >
                        <img
                            src = {logo}
                            height = "30"
                            width = "30"
                            className = "d-inline-block align-top"
                            alt="Logo"
                        />
                        React Blog
                    </NavbarBrand>
                    <NavbarToggle aria-controls="responsive-navbar-nav"/>
                    <NavbarCollapse id = "responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/"> Home</Nav.Link>
                            <Nav.Link href="/projects"> Projects</Nav.Link>
                            <Nav.Link href="/blog"> Blog</Nav.Link>
                            <Nav.Link href="/discussions"> Discussions</Nav.Link>
                            <Nav.Link href="/contacts">Contacts</Nav.Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
            <Router>
                <Switch>
                    <Route exact path ="/" Component={Home}/>
                    <Route exact path ="/projects" Component={Projects}/>
                    <Route exact path ="/blog" Component={Blog}/>
                    <Route exact path ="/discussions" Component={Discussions}/>
                    <Route exact path ="/contacts" Component={Contacts}/>
                    <Route Component={NotFound}/>
                </Switch>
            </Router>
            </>
        )
    }
}