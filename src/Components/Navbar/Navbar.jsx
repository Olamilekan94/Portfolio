import { Link } from "react-router-dom"
import "./Navbar.css"

import logo from '../../assets/attiwrite.png'

const Navbar = () => {
  return (
    <div className="navbar-container">
     <div className='navbar'>
      <img src={logo} className="logo" alt=""/>
      <ul className='nav-menu'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About Me</li></Link>
        <Link to="/service"><li>Services</li></Link>
        <Link to="/contact"><li>Contact Me</li></Link>


      </ul>

    </div>
    </div>
  )
}

export default Navbar