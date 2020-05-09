import React,{ useState } from 'react'
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import Translate from '../TranslateInput/TranslateInput'

export default function Sidebar(props) {
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen)
    return (
        <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand>
                <Link to='/profile'>{props.user.name}</Link>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink>
                        <Link to='/course'>Course</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to={`/chat?&name=${props.user.name}&room=General`}>Chat</Link>
                    </NavLink>
                </NavItem>
            </Nav>
            <NavItem>
                <NavbarText>{props.user.level}</NavbarText>
            </NavItem>
            <NavItem>
                <NavbarText>{props.user.score}</NavbarText>
            </NavItem>
            <Translate/>       
            </Collapse>
        </Navbar>
        </div>
    )
}
