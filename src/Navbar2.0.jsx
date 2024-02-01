// import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./NavbarStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import {
   faHome,
   faChartBar,
   faUser,
   faFileAlt,
   faNewspaper,
 } from "@fortawesome/free-solid-svg-icons";




function Navbar() {
  const navigate = useNavigate();
  const ID = localStorage.getItem('userId');
function handleLogout (){
  localStorage.removeItem('userId');
  navigate('/login');
}

  return (
    <nav >
      <div className="cute">
        <li style={{listStyle:"none",padding:0}}>Euphoria</li>
            {/* <button className="cute">Euphoria</button> */}
     </div>
      <div>     
      
        <ul id="navbar"  style={{ listStyle: "none", padding: 0 }}>
         
          <li>
            <button onClick={() => navigate(`/actualhome/${ID}`)}>
            <FontAwesomeIcon className='font' icon={faHome} />
              Home</button>
          </li>
          <li>
            <button onClick={() => navigate(`/Reports/${ID}`)}>
            <FontAwesomeIcon className='font'  icon={faFileAlt} />
              Reports</button>
          </li>
          
          <li>
            <button onClick={() => navigate(`/stats/${ID}`)}>
            <FontAwesomeIcon className='font' icon={faChartBar} />
              Stats</button>
          </li>
          <li>
            <button onClick={() => navigate('/WebScraped')}>
            <FontAwesomeIcon className='font' icon={faNewspaper} />
              News</button>
          </li>
          <li>
            <button onClick={() => navigate(`/profile/${ID}`)}>
            <FontAwesomeIcon className='font' icon={faUser} />
              Profile</button>
          </li>
          
          <li>
            <button onClick={() => handleLogout()}>Logout</button>
          </li>
        </ul>
      </div>
  
    </nav>        
  );
}

export default Navbar;
