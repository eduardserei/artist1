import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import normalLogo from '../../assets/download-cropped.jpeg';
import johnLogo from '../../assets/john-logo-removebg-preview.png';
import johnLogo2 from '../../assets/john-logo2-nobg.png';

import './mobile-nav.styles.scss'

const MobileNav = () => {
    const [sidebarShown, setSidebarShown] = useState(false);
    const showSidebar = () => {
        setSidebarShown(prev => !prev)
    }
    
        return (
        <nav className='mobile-nav-container'>
            <img src={normalLogo} alt={'Logo Missing'} className='mobile-nav-container__logo' onClick={showSidebar}/>
            <div className={`mobile-nav-container__sidebar ${sidebarShown ? "show" : ''}`}>
                <ul>
                    <li><Link to='/' onClick={showSidebar}>Home</Link></li>
                    <li><Link to='/about' onClick={showSidebar}>About</Link></li>
                    <li><Link to='/contact' onClick={showSidebar}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default MobileNav;