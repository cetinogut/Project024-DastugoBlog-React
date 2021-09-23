import MenuIcon from '@material-ui/icons/Menu';
import { Home, ThreeDRotation } from '@material-ui/icons';
import './socialIcons.css'

import React from 'react'

const SocialIcons = () => {
    return (
        <div className="leftBody">
            <Home className="homeIcon"/> 
            <p className="companyTitle">Dastugo Technology</p>
            {/* <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i> */}
            <i className="social-icons fab fa-linkedin"></i>
            <i className="social-icons fab fa-github-square"></i>
        </div>
    )
}

export default SocialIcons
