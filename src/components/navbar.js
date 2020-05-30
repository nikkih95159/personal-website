import React from "react"
import {Navbar as NavbarReact} from 'react-bootstrap'

class Navbar extends React.PureComponent {
    render() {        
        return (
            <NavbarReact sticky="top" expand="lg" variant="light" bg="light">
                {/* <NavbarReact.Brand href="#">Projects</NavbarReact.Brand> */}
                {/* <NavbarReact.Brand href="#">About</NavbarReact.Brand> */}
                {/* <NavbarReact.Brand href="#">Contact</NavbarReact.Brand> */}
                <NavbarReact.Brand href="https://nikkih95159.github.io/personal-website/">Home</NavbarReact.Brand>
                <NavbarReact.Brand href="https://nikkih95159.github.io/personal-website/photos">Photos</NavbarReact.Brand>
            </NavbarReact>
        )
    }
}

export default Navbar;