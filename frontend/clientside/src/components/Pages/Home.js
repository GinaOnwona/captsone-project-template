import React, {useState} from 'react';
import './Home.css'
import {Link} from 'react-router-dom'
import Button from  'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'


function Home() {
    return (
    <div>

        <div className="home"></div>
            {/* <div className="clearfix"> */}
                <div className="flot">
                    <h1>Gain Total Control of Your Money</h1> 
                    <p>When you’re on top of your money, life is good.
                    We help you effortlessly manage your finances in one place.
                    Stop checking when next is payday by having full control over your finances.</p>
                      <br/>      
                    <Button href="http://localhost:3000/Login">Start Now</Button> <Button href="http://localhost:3000/Dashboard">Dashboard</Button> 
                    </div> 
                {/* </div>      */}
        
    </div>
    )
}

export default Home;
