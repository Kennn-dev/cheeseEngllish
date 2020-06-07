import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { userLogout } from '../../Actions/user';

const HomeNavbar = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const isLogin = useSelector(state => state.user)
  const [isOpen, setIsOpen] = useState(false);
 
  const toggle = () => setIsOpen(!isOpen);
  const handleLogOut = () => {
    console.log('Clicked')
    const action = userLogout()
    dispatch(action)
    history.push('/')
    localStorage.clear()
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img src={require('../../img/logo.png')} height='30' width='140' alt=""/> 
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {
              isLogin ? 
              <NavItem>
                  <h4 onClick={ handleLogOut }>Logout</h4>
              </NavItem>
              :
              <>
                <NavItem>
                  <NavLink>
                    <Link to='/'>Home</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link to='/login'>Login</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink >
                  <Link to='/register'>Register</Link>
                  </NavLink>
                </NavItem>
                </>
            }
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HomeNavbar;