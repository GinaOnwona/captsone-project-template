import React from 'react';
import './Blog.css'

function Blog() {
    return (
            <div class="clearfix">
            <div className="blog"></div>
                {/* <div className ="float"> */}
                {/* <div className ="img-container">
                <div className ="clearfix::after"> */}
                <h1>Cheap Christmas Gift Ideas</h1>
                <button className="blogbtn">Read More</button>
            {/* </div> */}
            
            {/* </div> */}
            <br/>
            <div> Recent Articles </div>
            <br/>
        <div className="img-container">
            <div className="stress"></div>
                <h1>10 Money Tips to Prevent Christmas Stress</h1>
                <button className="blogbtn">Read More</button>
        </div>   
            <br/>
        <div className="img-container">
            <div className="bills"></div>
                <h1>How To Lower Your Bills This Christmas</h1>
                <button className="blogbtn">Read More</button>
        <div/>   
            <br/>
        {/* <div className="img-container"> */}
            <div className="grateful"></div>
               <h1>2020’s been rocky, and yet we’re grateful.</h1>
                <button className="blogbtn">Read More</button>
        {/* </div> */}
        
 
        </div> 
        </div> 
    )
}

export default Blog;
