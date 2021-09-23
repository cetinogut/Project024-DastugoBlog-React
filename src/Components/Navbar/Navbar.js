import React from 'react'
import './navbar.css';
import SocialIcons from '../SocialIcons/SocialIcons'
import defaultProfileImg from '../../assets/manager.png'

// let defaultImg = require('../../assets/manager.png');

export default function Navbar() {
    return (
        <div className="nav">
          <div className="navLeft">
            <SocialIcons/>
          </div>  
          <div className="navCentre">
              <ul className="navList">
                  <li className="navListItem">HOME</li>
                  <li className="navListItem">ABOUT</li>
                  <li className="navListItem">CONTACT</li>
                  <li className="navListItem">HOME</li>
                  <li className="navListItem">WRITE</li>
              </ul>
            
          </div>  
          <div className="navRight">
            <i className="search-icon fas fa-search"></i>
            <img 
                className="profileImg"
                src={defaultProfileImg} alt="" />
                {/* <img src={defaultImg} alt="" /> */}
            
            <ul className="navList">
                  <li className="navListItem">LOGOUT</li>
            </ul>
          </div>  
        
        </div>
    )
}
