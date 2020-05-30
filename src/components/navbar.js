import React from "react"
import {Navbar as NavbarReact} from 'react-bootstrap'

class Navbar extends React.PureComponent {
    render() {        
        return (
            <NavbarReact sticky="top" expand="lg" variant="light" bg="light">
                {/* <NavbarReact.Brand href="#">Projects</NavbarReact.Brand> */}
                {/* <NavbarReact.Brand href="#">About</NavbarReact.Brand> */}
                {/* <NavbarReact.Brand href="#">Contact</NavbarReact.Brand> */}
                <NavbarReact.Brand href="/../">Home</NavbarReact.Brand>
                <NavbarReact.Brand href="/../photos">Photos</NavbarReact.Brand>
            </NavbarReact>
        )
    }
}

export default Navbar;