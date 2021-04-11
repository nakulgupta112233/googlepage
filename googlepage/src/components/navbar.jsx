import React from "react";
import { FaTh } from 'react-icons/fa';
import '../App.css'


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-white">

  <div className="collapse navbar-collapse" id="navbarTop">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item-right"><a className="nav-link" href="#">Gmail</a> </li>
      <li className="nav-item"><a className="nav-link" href="#">Images</a> </li>
      <li className="nav-item"><a className="nav-link mx-2" href="#"><FaTh size={25}/></a> </li>
      <button class="btn btn-primary btn-outline-blue my-2 my-sm-0" type="submit">Sign In</button>
    </ul>
  </div>
</nav>
    </div>
  );
}

export default Navbar;
