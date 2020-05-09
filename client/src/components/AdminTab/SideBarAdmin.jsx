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



export default function SideBarAdmin(props) {
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen)
    return (
        <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand>
                <Link >{props.user.name}</Link> 
                {/* //to='/profile' */}
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink>
                        <Link to ='/users'>Users</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to ='/lessons'>Lessons</Link>
                        {/* to={`/chat?&name=${props.user.name}&room=General`} */}
                    </NavLink>
                </NavItem>
            </Nav>    
            </Collapse>
        </Navbar>
        </div>
    )
}
