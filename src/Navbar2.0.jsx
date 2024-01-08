// import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./NavbarStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartBar,
  faUser,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  const navigate = useNavigate();
  const ID = localStorage.getItem('userId');

  return (
    <nav >
      <div>     
      
        <ul id="navbar"  style={{ listStyle: "none", padding: 0 }}>
          <li>
            <button onClick={() => navigate(`/actualhome/${ID}`)}>
            <FontAwesomeIcon icon={faHome} />
              Home</button>
          </li>
          <li>
            <button onClick={() => navigate(`/Reports/${ID}`)}>
            <FontAwesomeIcon icon={faFileAlt} />
              Reports</button>
          </li>
          
          <li>
            <button onClick={() => navigate(`/stats/${ID}`)}>
            <FontAwesomeIcon icon={faChartBar} />
              Stats</button>
          </li>
          <li>
            <button onClick={() => navigate(`/profile/${ID}`)}>
            <FontAwesomeIcon icon={faUser} />
              Profile</button>
          </li>
          <li>
            <button onClick={() => navigate('/login')}>Logout</button>
          </li>
        </ul>
      </div>
  
    </nav>        
  );
}

export default Navbar;
