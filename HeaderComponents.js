import React, { Component } from 'react';
import {  NavbarBrand , Navbar , Nav , NavbarToggler , Collapse , NavItem ,
         NavLink } from 'reactstrap';




class Header extends Component {
    constructor(props) {
    super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
            
        };
        this.toggleNav = this.toggleNav.bind(this);
       
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    
    render() {
        return (

            <React.Fragment> 
                
                    <div className="top-bar">
                        <div className="container"> 
                            <div className="col-12 text-right">
                                <p>Turn of Phrase</p>
                            </div>
                        </div>
                    </div>
                
                <Navbar className="navbar bg-dark navbar-expand-lg navbar-dark sticky-top"> 
                    <div className="container"> 
                        <NavbarBrand  className="mr-auto" href="/">
                        <img id="logo" src="../assets/turnofphraselogo.png" alt="logo" height="150"/>
                            </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="navbar-nav ml-auto">
                                <NavItem active>
                                    <NavLink className="nav-link" to="/home">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                     About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/demo">
                                         Demo
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/feedback">
                                        Feedback
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/team">
                                         Team
                                    </NavLink>
                                </NavItem>

                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}
                    
                
            
        
    
    
        
        
export default Header;


                    

        