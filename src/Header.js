import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // return (
        //     <Navbar inverse collapseOnSelect>
        //         <Navbar.Header>
        //             <Navbar.Brand>
        //                 <a href="#brand">React-Bootstrap</a>
        //             </Navbar.Brand>
        //             <Navbar.Toggle />
        //         </Navbar.Header>
        //         <Navbar.Collapse>
        //             <Nav>
        //                 <NavItem eventKey={1} href="#">
        //                     Link
        //                 </NavItem>
        //                 <NavItem eventKey={2} href="#">
        //                     Link
        //                 </NavItem>
        //                 <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        //                     <MenuItem eventKey={3.1}>Action</MenuItem>
        //                     <MenuItem eventKey={3.2}>Another action</MenuItem>
        //                     <MenuItem eventKey={3.3}>Something else here</MenuItem>
        //                     <MenuItem divider />
        //                     <MenuItem eventKey={3.3}>Separated link</MenuItem>
        //                 </NavDropdown>
        //             </Nav>
        //             <Nav pullRight>
        //                 <NavItem eventKey={1} href="#">
        //                     Link Right
        //                 </NavItem>
        //                 <NavItem eventKey={2} href="#">
        //                     Link Right
        //                 </NavItem>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Navbar>
        // );
        return (
            <div className="navigation-bar">
                <nav className="navbar navbar-default navbar-fixed-top transparent">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">ФК "Урожайная"</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                                <li><a href="#">Link</a></li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                       aria-haspopup="true" aria-expanded="false">
                                        Dropdown
                                        <span
                                            className="caret">
                                        </span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else here</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="#">Separated link</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="#">One more separated link</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <a className="btn btn-social-icon btn-twitter">
                                <span className="fa fa-twitter"></span>
                            </a>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#">Link</a></li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                       aria-haspopup="true" aria-expanded="false">Dropdown
                                        <span
                                            className="caret">
                                        </span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else here</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            );




    }
}

export default Header;
