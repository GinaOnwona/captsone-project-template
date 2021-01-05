import React,  {useState, useEffect} from 'react';
import Login from "./components/Pages/Login";
// import Home from "./Components/Home";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import NavBar from "./components/Pages/NavBar"
import SignUp from './components/Pages/SignUp';
import Blog from './components/Pages/Blog';
import Home from './components/Pages/Home';
import Footer from './components/Pages/Footer';
import Dashboard from './components/Pages/Dashboard';
import Expenses from './components/ExpensePage/Expenses';
import Income from './components/IncomePage/Income';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import "./App.css";




function App() {
  
  return (
   
    <div>
      
   <BrowserRouter>
   <NavBar/>
    <Switch>
      
      <Route path='/Login' component={Login} />
      <Route path='/Signup' component={SignUp} />
      <Route path='/Blog' component={Blog} />
      <Route exact path='/' component={Home} />
      <Route path='/Expenses' component={Expenses} />
      <Route path='/Income' component={Income} />
      <Route path='/Dashboard' component={Dashboard} />
        
        </Switch>      
        
    </BrowserRouter>
    <div>
     <div className="page-container">
     <div className="content-wrap">
     </div>
    <Footer/>
   
    </div>
     </div>
    </div>
  )
}

export default App;
