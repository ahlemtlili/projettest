import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';
import logo from '../../logo.svg';
import { FaSignInAlt } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../Redux/actions/userActions";
import { useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>

      <Nav style={{"fontSize":"35px"}}>
        <NavLink to='/'>
          <img className='logo' style={{width:"110px"}} src={logo} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>

            <NavLink to='/' activeStyle>
              Home
            </NavLink>
           
            <NavLink to='/contactUs' activeStyle>
            Contact Us
      
          </NavLink> 
          <NavLink to='/login' activeStyle>
            LOGIN
      
          </NavLink> 

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>

        {localStorage.getItem("token")? (
          <Button variant="primary" style={{"fontSize":"25px" , "color":"white"}}
            onClick={() =>
              dispatch(logoutUser(navigate))
            }> LOGOUT
          </Button>
        ) :
  
     <div>
        <Link type="button" class="btn btn-primary"  style={{"fontSize":"25px" , "color":"white"}} to='/AccountP'><FaSignInAlt/>Sign up Parent</Link>
        {" "} {" "} {" "}
         <Link type="button" class="btn btn-primary"  style={{"fontSize":"25px" , "color":"white"}} to='/AccountT'><FaSignInAlt />Sign up Teacher</Link>
          </div>}
   </Nav>
    </>
  );
};

export default Navbar;