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
  NavbarText,
  Button
} from 'reactstrap';

export default function Sidebar(props) {
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen)
    return (
        <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand>
                <Link to='/profile'><h2>{props.user.name}</h2></Link>
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
                        <Link to='/profile'>Profile</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to={`/chat?&name=${props.user.name}&room=General`}>Chat</Link>
                    </NavLink>
                </NavItem>
            </Nav>
                <NavbarText>Level : <Button>{props.user.level}</Button> &nbsp;</NavbarText>
                <NavbarText>Score : {props.score}</NavbarText>       
            </Collapse>
        </Navbar>
        </div>
    )
}
