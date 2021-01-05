import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
// import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'
// import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";


export default function NavBar() {
  const [Login, setLogin]= useState(true)
    return(
      <div className="Nav">
         <ul>
        {
        Login
        
        ?
    <>
      <Link to = '/'>{""}<li>Home</li></Link>  
      <Link to ='/Login'><li>Login</li></Link>
      <Link to ='/Income'><li>Income</li></Link>
      <Link to ='/Expenses'><li>Expenses</li></Link>
      <Link to ='/Dashboard'><li>Dashboard</li></Link>
      <Link to ='/Blog'><li>Blog</li></Link>
        
    </>
      :
    <>
    </>
      
      }

    </ul>

    </div>
 ) 
    }


      
//            <div>     
// <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="primary" variant="dark">
//   <ReactBootStrap.Navbar.Brand href="/">everyMoni</ReactBootStrap.Navbar.Brand>
//   <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
//     <ReactBootStrap.Nav className="mr-auto">
//     {/* <ReactBootStrap.Nav.Link to = '/'>{""}<li>Home</li></ReactBootStrap.Nav.Link> */}
//     <ReactBootStrap.Nav.Link to = '/Login'>{""}Login</ReactBootStrap.Nav.Link>
//     <ReactBootStrap.Nav.Link to = '/Income'>{""}Income</ReactBootStrap.Nav.Link>
//     <ReactBootStrap.Nav.Link to = '/Expenses'>{""}Expenses</ReactBootStrap.Nav.Link>
//     <ReactBootStrap.Nav.Link to = '/Dashboard'>{""}Dashboard</ReactBootStrap.Nav.Link>
//     <ReactBootStrap.Nav.Link to = '/Blog'>{""}Blog</ReactBootStrap.Nav.Link>
      
//     </ReactBootStrap.Nav>
    
//   </ReactBootStrap.Navbar.Collapse>
// </ReactBootStrap.Navbar>
//     </div>
// )
// }