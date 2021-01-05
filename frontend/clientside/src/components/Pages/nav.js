
const [Login, setLogin]= useState(true)


return (
    <div className="Nav">
         <ul>
        {
        Login
        
        ?
    <>
      <Link to = '/'>{""}<li>Home</li></Link> 
      <Link to = '/SignUp'>{""}<li>SignUp</li></Link> 
      <Link to ='/Home'><li>Home</li></Link> 
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

